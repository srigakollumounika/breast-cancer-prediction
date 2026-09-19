import {
  Activity,
  History as HistoryIcon,
  RefreshCw,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  deletePrediction,
  getPredictionHistory,
} from "../services/api";


function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // ===============================
  // LOAD PREDICTION HISTORY
  // ===============================

  const loadHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getPredictionHistory();

      console.log("History API Response:", data);

      // API directly returns an array
      if (Array.isArray(data)) {
        setHistory(data);
      }

      // API returns { history: [...] }
      else if (Array.isArray(data?.history)) {
        setHistory(data.history);
      }

      // API returns { predictions: [...] }
      else if (Array.isArray(data?.predictions)) {
        setHistory(data.predictions);
      }

      // API returns { data: [...] }
      else if (Array.isArray(data?.data)) {
        setHistory(data.data);
      }

      // Unknown response
      else {
        console.warn("Unexpected history response:", data);
        setHistory([]);
      }

    } catch (error) {
      console.error("History loading error:", error);

      setError(
        error.response?.data?.detail ||
        "Failed to load prediction history."
      );

      setHistory([]);

    } finally {
      setLoading(false);
    }
  };


  // ===============================
  // LOAD HISTORY ON PAGE OPEN
  // ===============================

  useEffect(() => {
    loadHistory();
  }, []);


  // ===============================
  // DELETE PREDICTION
  // ===============================

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Prediction ID not found");
      return;
    }

    try {
      await deletePrediction(id);

      setHistory((previousHistory) =>
        previousHistory.filter(
          (prediction) => prediction.id !== id
        )
      );

    } catch (error) {
      console.error("Delete error:", error);

      setError(
        error.response?.data?.detail ||
        "Failed to delete prediction."
      );
    }
  };


  // ===============================
  // LOADING STATE
  // ===============================

  if (loading) {
    return (
      <div className="page">
        <h2>Loading Prediction History...</h2>
      </div>
    );
  }


  // ===============================
  // PAGE UI
  // ===============================

  return (
    <div className="page">


      {/* PAGE HEADER */}

      <div className="page-header">

        <div>
          <h1>Prediction History</h1>

          <p>
            View and manage previous breast cancer predictions.
          </p>
        </div>


        <button
          className="primary-btn"
          onClick={loadHistory}
        >
          <RefreshCw size={18} />

          Refresh
        </button>

      </div>


      {/* ERROR MESSAGE */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}


      {/* HISTORY CARD */}

      <div className="card">


        <div className="section-header">

          <HistoryIcon size={24} />

          <h2>Recent Predictions</h2>

        </div>


        {/* EMPTY HISTORY */}

        {history.length === 0 ? (

          <div className="empty-state">

            <HistoryIcon size={50} />

            <h2>No Predictions Yet</h2>

            <p>
              Your prediction history will appear here.
            </p>

          </div>

        ) : (


          /* HISTORY LIST */

          <div className="history-list">


            {history.map((item, index) => {


              // ===============================
              // SAFE CONFIDENCE VALUE
              // ===============================

              const confidence =
                item.confidence !== undefined &&
                item.confidence !== null
                  ? Number(item.confidence)
                  : null;


              return (

                <div
                  className="history-card"
                  key={item.id || index}
                >


                  {/* HISTORY INFORMATION */}

                  <div className="history-info">


                    <div className="prediction-title">

                      <Activity size={20} />

                      <h3>
                        {item.prediction || "Unknown"}
                      </h3>

                    </div>


                    {/* CONFIDENCE */}

                    <p>

                      <strong>
                        Confidence:
                      </strong>{" "}

                      {confidence !== null &&
                      !Number.isNaN(confidence)

                        ? `${confidence.toFixed(2)}%`

                        : "N/A"
                      }

                    </p>


                    {/* MODEL */}

                    {item.model_used && (

                      <p>

                        <strong>
                          Model:
                        </strong>{" "}

                        {item.model_used}

                      </p>

                    )}


                    {/* PREDICTION CLASS */}

                    {item.prediction_value !== undefined && (

                      <p>

                        <strong>
                          Prediction Class:
                        </strong>{" "}

                        {item.prediction_value === 1
                          ? "Benign (1)"
                          : "Malignant (0)"
                        }

                      </p>

                    )}


                    {/* DATE */}

                    {item.created_at && (

                      <p>

                        <strong>
                          Date:
                        </strong>{" "}

                        {new Date(
                          item.created_at
                        ).toLocaleString()}

                      </p>

                    )}


                  </div>


                  {/* DELETE BUTTON */}

                  {item.id && (

                    <button
                      className="delete-btn"

                      onClick={() =>
                        handleDelete(item.id)
                      }

                      title="Delete Prediction"
                    >

                      <Trash2 size={18} />

                    </button>

                  )}


                </div>

              );

            })}


          </div>

        )}


      </div>


    </div>
  );
}


export default History;