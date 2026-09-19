import { useState } from "react";
import { predictCancer } from "../services/api";

function Prediction() {
  const [features, setFeatures] = useState(Array(30).fill(""));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const handleSampleData = () => {
    const sampleValues = [
      17.99,
      10.38,
      122.8,
      1001.0,
      0.1184,
      0.2776,
      0.3001,
      0.1471,
      0.2419,
      0.07871,

      1.095,
      0.9053,
      8.589,
      153.4,
      0.006399,
      0.04904,
      0.05373,
      0.01587,
      0.03003,
      0.006193,

      25.38,
      17.33,
      184.6,
      2019.0,
      0.1622,
      0.6656,
      0.7119,
      0.2654,
      0.4601,
      0.1189,
    ];

    setFeatures(sampleValues.map(String));
    setError("");
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    const numericFeatures = features.map((value) =>
      parseFloat(value)
    );

    if (numericFeatures.some((value) => isNaN(value))) {
      setError("Please enter valid values for all 30 features.");
      return;
    }

    try {
      setLoading(true);

      const response = await predictCancer(numericFeatures);

      setResult(response);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.detail ||
          "Prediction failed. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFeatures(Array(30).fill(""));
    setResult(null);
    setError("");
  };

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>Breast Cancer Prediction</h1>

          <p>
            Enter the 30 medical features to generate an AI-powered prediction.
          </p>
        </div>
      </div>

      {/* PATIENT FEATURE INPUT */}

      <div className="card">

        <div className="prediction-card-header">
          <div>
            <h2>Patient Feature Input</h2>

            <p>
              Provide all 30 medical measurements for analysis.
            </p>
          </div>

          <button
            type="button"
            className="sample-data-btn"
            onClick={handleSampleData}
          >
            Fill Sample Data
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="feature-grid">

            {features.map((value, index) => (
              <div className="input-group" key={index}>

                <label>
                  Feature {index + 1}
                </label>

                <input
                  type="number"
                  step="any"
                  value={value}
                  onChange={(e) =>
                    handleChange(index, e.target.value)
                  }
                  placeholder={`Enter feature ${index + 1}`}
                />

              </div>
            ))}

          </div>

          <div className="button-group">

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading
                ? "Analyzing..."
                : "Generate Prediction"}
            </button>

            <button
              type="button"
              className="secondary-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

      </div>

      {/* ERROR */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* PREDICTION RESULT */}

      {result && (
        <div className="card prediction-result">

          <h2>Prediction Result</h2>

          <div className="prediction-result-grid">

            {/* Prediction */}

            <div className="result-card">
              <p>Prediction</p>

              <h3
                className={
                  result.prediction?.toLowerCase() === "malignant"
                    ? "malignant-text"
                    : "benign-text"
                }
              >
                {result.prediction || "N/A"}
              </h3>
            </div>

            {/* Confidence */}

            <div className="result-card">
              <p>Confidence</p>

              <h3>
                {result.confidence !== undefined &&
                result.confidence !== null
                  ? `${Number(result.confidence).toFixed(2)}%`
                  : "N/A"}
              </h3>
            </div>

            {/* Malignant Probability */}

            <div className="result-card">
              <p>Malignant Probability</p>

              <h3 className="malignant-text">
                {result.probabilities?.malignant !== undefined &&
                result.probabilities?.malignant !== null
                  ? `${(
                      Number(result.probabilities.malignant) * 100
                    ).toFixed(2)}%`
                  : "N/A"}
              </h3>
            </div>

            {/* Benign Probability */}

            <div className="result-card">
              <p>Benign Probability</p>

              <h3 className="benign-text">
                {result.probabilities?.benign !== undefined &&
                result.probabilities?.benign !== null
                  ? `${(
                      Number(result.probabilities.benign) * 100
                    ).toFixed(2)}%`
                  : "N/A"}
              </h3>
            </div>

          </div>

          {/* MODEL USED */}

          <div className="result-model">

            <span>Model Used</span>

            <strong>
              {result.model_used ||
                result.model ||
                "Logistic Regression"}
            </strong>

          </div>

        </div>
      )}

    </div>
  );
}

export default Prediction;