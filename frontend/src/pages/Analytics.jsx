import {
  Activity,
  BarChart3,
  Brain,
  Database,
  RefreshCw,
  Trophy,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  getAnalyticsOverview,
  getDatasetAnalytics,
  getModelPerformance,
  getPredictionHistory,
} from "../services/api";

function Analytics() {
  const [overview, setOverview] = useState(null);
  const [dataset, setDataset] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [totalPredictions, setTotalPredictions] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const [
        overviewData,
        datasetData,
        performanceData,
        historyData,
      ] = await Promise.all([
        getAnalyticsOverview(),
        getDatasetAnalytics(),
        getModelPerformance(),
        getPredictionHistory(),
      ]);

      console.log("Overview:", overviewData);
      console.log("Dataset:", datasetData);
      console.log("Performance:", performanceData);
      console.log("History:", historyData);

      setOverview(overviewData);
      setDataset(datasetData);
      setPerformance(performanceData);

      // Get actual prediction count from History API
      if (historyData?.total_predictions !== undefined) {
        setTotalPredictions(historyData.total_predictions);
      } else if (Array.isArray(historyData?.predictions)) {
        setTotalPredictions(historyData.predictions.length);
      } else {
        setTotalPredictions(0);
      }
    } catch (error) {
      console.error("Analytics loading error:", error);

      setError(
        error.response?.data?.detail ||
          "Failed to load analytics. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <div className="page-header">
          <div>
            <h1>Analytics</h1>
            <p>Loading analytics data...</p>
          </div>
        </div>
      </div>
    );
  }

  // ===============================
  // GET BEST MODEL
  // ===============================

  const bestModel = overview?.best_model;

  // ===============================
  // GET MODEL NAME
  // ===============================

  const bestModelName =
    bestModel?.name ||
    bestModel?.model_name ||
    "Logistic Regression";

  // ===============================
  // FIND PERFORMANCE DATA
  // ===============================

  const modelKey = bestModelName
    .toLowerCase()
    .replaceAll(" ", "_");

  const bestModelPerformance =
    performance?.[modelKey] ||
    performance?.logistic_regression ||
    bestModel ||
    {};

  // ===============================
  // FORMAT PERCENTAGE
  // ===============================

  const formatPercentage = (value) => {
    if (value === undefined || value === null) {
      return "N/A";
    }

    return `${(Number(value) * 100).toFixed(2)}%`;
  };

  // ===============================
  // GET VALUES
  // ===============================

  const accuracy =
    bestModelPerformance?.accuracy ??
    bestModel?.accuracy;

  const precision =
    bestModelPerformance?.precision ??
    bestModel?.precision;

  const recall =
    bestModelPerformance?.recall ??
    bestModel?.recall;

  const f1Score =
    bestModelPerformance?.f1_score ??
    bestModelPerformance?.f1 ??
    bestModel?.f1_score;

  const aucScore =
    bestModelPerformance?.auc_score ??
    bestModelPerformance?.auc ??
    bestModel?.auc_score;

  return (
    <div className="page">

      {/* ================= PAGE HEADER ================= */}

      <div className="page-header">
        <div>
          <h1>Analytics</h1>

          <p>
            Monitor dataset insights and machine learning model performance.
          </p>
        </div>

        <button
          className="secondary-btn"
          onClick={loadAnalytics}
        >
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>

      {/* ================= ERROR MESSAGE ================= */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* ================= TOP STATISTICS ================= */}

      <div className="stats-grid">

        {/* TOTAL PREDICTIONS */}

        <div className="stat-card">
          <div className="stat-icon">
            <BarChart3 size={24} />
          </div>

          <div>
            <p>Total Predictions</p>

            <h3>
              {totalPredictions}
            </h3>
          </div>
        </div>

        {/* DATASET SAMPLES */}

        <div className="stat-card">
          <div className="stat-icon">
            <Database size={24} />
          </div>

          <div>
            <p>Dataset Samples</p>

            <h3>
              {dataset?.total_records ?? "N/A"}
            </h3>
          </div>
        </div>

        {/* MODEL ACCURACY */}

        <div className="stat-card">
          <div className="stat-icon">
            <Activity size={24} />
          </div>

          <div>
            <p>Model Accuracy</p>

            <h3>
              {formatPercentage(accuracy)}
            </h3>
          </div>
        </div>

        {/* BEST MODEL */}

        <div className="stat-card">
          <div className="stat-icon">
            <Brain size={24} />
          </div>

          <div>
            <p>Best Model</p>

            <h3>
              {bestModelName}
            </h3>
          </div>
        </div>

      </div>

      {/* ================= DATASET INFORMATION ================= */}

      <div className="analytics-grid">

        <div className="card">

          <h2>
            <Database size={22} />
            Dataset Information
          </h2>

          <div className="analytics-list">

            <div>
              <span>Total Samples</span>

              <strong>
                {dataset?.total_records ?? "N/A"}
              </strong>
            </div>

            <div>
              <span>Malignant Cases</span>

              <strong>
                {dataset?.target_distribution?.malignant ??
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>Benign Cases</span>

              <strong>
                {dataset?.target_distribution?.benign ??
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>Total Features</span>

              <strong>
                {dataset?.total_features ?? "N/A"}
              </strong>
            </div>

          </div>
        </div>

        {/* ================= MODEL PERFORMANCE ================= */}

        <div className="card">

          <h2>
            <Activity size={22} />
            Model Performance
          </h2>

          <div className="analytics-list">

            <div>
              <span>Accuracy</span>

              <strong>
                {formatPercentage(accuracy)}
              </strong>
            </div>

            <div>
              <span>Precision</span>

              <strong>
                {formatPercentage(precision)}
              </strong>
            </div>

            <div>
              <span>Recall</span>

              <strong>
                {formatPercentage(recall)}
              </strong>
            </div>

            <div>
              <span>F1 Score</span>

              <strong>
                {formatPercentage(f1Score)}
              </strong>
            </div>

            <div>
              <span>AUC Score</span>

              <strong>
                {formatPercentage(aucScore)}
              </strong>
            </div>

          </div>
        </div>

      </div>

      {/* ================= BEST MODEL DETAILS ================= */}

      <div className="card">

        <h2>
          <Trophy size={24} />
          Best Model Details
        </h2>

        <div className="stats-grid">

          {/* MODEL NAME */}

          <div className="stat-card">
            <p>Model Name</p>

            <h3>
              {bestModelName}
            </h3>
          </div>

          {/* ACCURACY */}

          <div className="stat-card">
            <p>Accuracy</p>

            <h3>
              {formatPercentage(accuracy)}
            </h3>
          </div>

          {/* PRECISION */}

          <div className="stat-card">
            <p>Precision</p>

            <h3>
              {formatPercentage(precision)}
            </h3>
          </div>

          {/* RECALL */}

          <div className="stat-card">
            <p>Recall</p>

            <h3>
              {formatPercentage(recall)}
            </h3>
          </div>

          {/* F1 SCORE */}

          <div className="stat-card">
            <p>F1 Score</p>

            <h3>
              {formatPercentage(f1Score)}
            </h3>
          </div>

          {/* AUC SCORE */}

          <div className="stat-card">
            <p>AUC Score</p>

            <h3>
              {formatPercentage(aucScore)}
            </h3>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Analytics;