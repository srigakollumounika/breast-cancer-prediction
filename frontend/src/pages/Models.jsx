import {
  Award,
  BarChart3,
  Brain,
  CheckCircle2,
  RefreshCw,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  compareModels,
  getBestModel,
  getModels,
} from "../services/api";

function Models() {
  const [models, setModels] = useState([]);
  const [bestModel, setBestModel] = useState(null);
  const [comparison, setComparison] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadModels();
  }, []);

  const formatText = (text) => {
    if (!text) return "N/A";

    return String(text)
      .replaceAll("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatPercentage = (value) => {
    if (value === null || value === undefined) {
      return "N/A";
    }

    const number = Number(value);

    if (Number.isNaN(number)) {
      return String(value);
    }

    if (number <= 1) {
      return `${(number * 100).toFixed(2)}%`;
    }

    return `${number.toFixed(2)}%`;
  };

  const getModelName = (model, index = 0) => {
    if (typeof model === "string") {
      return formatText(model);
    }

    return formatText(
      model?.name ||
        model?.model ||
        model?.model_name ||
        model?.id ||
        `Model ${index + 1}`
    );
  };

  const loadModels = async () => {
    try {
      setLoading(true);
      setError("");

      const [modelsData, bestData, comparisonData] =
        await Promise.all([
          getModels(),
          getBestModel(),
          compareModels(),
        ]);

      console.log("Models:", modelsData);
      console.log("Best Model:", bestData);
      console.log("Comparison:", comparisonData);

      if (Array.isArray(modelsData)) {
        setModels(modelsData);
      } else if (Array.isArray(modelsData?.models)) {
        setModels(modelsData.models);
      } else {
        setModels([]);
      }

      setBestModel(bestData);

      if (Array.isArray(comparisonData)) {
        setComparison(comparisonData);
      } else if (Array.isArray(comparisonData?.models)) {
        setComparison(comparisonData.models);
      } else {
        setComparison([]);
      }
    } catch (error) {
      console.error("Error loading models:", error);

      setError(
        "Unable to load model information. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <div className="page-header">
          <div>
            <h1>Machine Learning Models</h1>
            <p>Loading AI model information...</p>
          </div>
        </div>

        <div className="card">
          <p>Loading available models...</p>
        </div>
      </div>
    );
  }

  const bestModelName = getModelName(bestModel);

  return (
    <div className="page models-page">

      {/* HEADER */}

      <div className="page-header models-header">
        <div>
          <h1>Machine Learning Models</h1>

          <p>
            Explore, analyze and compare the AI models used
            for breast cancer prediction.
          </p>
        </div>

        <button
          className="models-refresh-btn"
          onClick={loadModels}
        >
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>


      {/* ERROR */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}


      {/* BEST MODEL HERO */}

      {bestModel && (
        <div className="best-model-hero">

          <div className="best-model-hero-left">

            <div className="best-model-hero-icon">
              <Award size={30} />
            </div>

            <div>
              <p className="best-model-tag">
                BEST PERFORMING MODEL
              </p>

              <h2>{bestModelName}</h2>

              <p className="best-model-description">
                Selected based on the highest overall
                performance for breast cancer prediction.
              </p>
            </div>

          </div>


          <div className="best-model-accuracy">

            <p>Accuracy</p>

            <h2>
              {formatPercentage(bestModel?.accuracy)}
            </h2>

          </div>

        </div>
      )}


      {/* AVAILABLE MODELS */}

      <div className="models-section">

        <div className="models-section-header">

          <div>

            <h2>Available Models</h2>

            <p>
              AI and machine learning models currently
              available for prediction.
            </p>

          </div>

          <span className="models-count">
            {models.length} Models
          </span>

        </div>


        {models.length > 0 ? (

          <div className="available-models-grid">

            {models.map((model, index) => {

              const modelName = getModelName(model, index);

              const accuracy =
                typeof model === "object"
                  ? model.accuracy
                  : null;

              const aucScore =
                typeof model === "object"
                  ? model.auc_score
                  : null;

              return (

                <div
                  className="available-model-card"
                  key={
                    typeof model === "object"
                      ? model.id || index
                      : index
                  }
                >

                  <div className="model-card-top">

                    <div className="model-icon">
                      <Brain size={22} />
                    </div>

                    <span className="model-number">
                      MODEL {index + 1}
                    </span>

                  </div>


                  <h3>{modelName}</h3>


                  <p className="model-card-description">
                    Machine learning model for intelligent
                    breast cancer classification.
                  </p>


                  <div className="model-card-metrics">

                    <div>

                      <span>Accuracy</span>

                      <strong>
                        {accuracy !== null &&
                        accuracy !== undefined
                          ? formatPercentage(accuracy)
                          : "Available"}
                      </strong>

                    </div>


                    {aucScore !== null &&
                      aucScore !== undefined && (

                        <div>

                          <span>AUC Score</span>

                          <strong>
                            {formatPercentage(aucScore)}
                          </strong>

                        </div>

                      )}

                  </div>


                  {modelName === bestModelName && (

                    <div className="model-best-badge">

                      <CheckCircle2 size={16} />

                      Best Performing Model

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        ) : (

          <div className="empty-models">

            <Brain size={35} />

            <h3>No Models Available</h3>

            <p>
              Model information is currently unavailable.
            </p>

          </div>

        )}

      </div>


      {/* MODEL COMPARISON */}

      <div className="models-section comparison-section">

        <div className="models-section-header">

          <div>

            <h2>Model Performance Comparison</h2>

            <p>
              Compare the evaluation metrics of each
              machine learning model.
            </p>

          </div>

          <BarChart3 size={28} />

        </div>


        {comparison.length > 0 ? (

          <div className="comparison-grid">

            {comparison.map((model, index) => {

              const modelName =
                getModelName(model, index);

              return (

                <div
                  className="comparison-model-card"
                  key={model.id || index}
                >

                  <div className="comparison-model-header">

                    <div className="comparison-model-icon">

                      <Brain size={20} />

                    </div>

                    <div>

                      <p>MODEL</p>

                      <h3>{modelName}</h3>

                    </div>

                  </div>


                  <div className="metrics-list">

                    <div className="metric-row">

                      <div className="metric-label">

                        <TrendingUp size={16} />

                        <span>Accuracy</span>

                      </div>

                      <strong>
                        {formatPercentage(model.accuracy)}
                      </strong>

                    </div>


                    <div className="metric-row">

                      <div className="metric-label">

                        <Target size={16} />

                        <span>Precision</span>

                      </div>

                      <strong>
                        {formatPercentage(model.precision)}
                      </strong>

                    </div>


                    <div className="metric-row">

                      <div className="metric-label">

                        <CheckCircle2 size={16} />

                        <span>Recall</span>

                      </div>

                      <strong>
                        {formatPercentage(model.recall)}
                      </strong>

                    </div>


                    <div className="metric-row">

                      <div className="metric-label">

                        <ActivityIcon />

                        <span>F1 Score</span>

                      </div>

                      <strong>
                        {formatPercentage(model.f1_score)}
                      </strong>

                    </div>

                  </div>


                  {model.auc_score !== undefined && (

                    <div className="auc-score-box">

                      <span>AUC Score</span>

                      <strong>
                        {formatPercentage(model.auc_score)}
                      </strong>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        ) : (

          <div className="empty-models">

            <BarChart3 size={35} />

            <h3>No Comparison Data</h3>

            <p>
              Model performance metrics are not available.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}


/* F1 SCORE ICON */

function ActivityIcon() {
  return <TrendingUp size={16} />;
}


export default Models;