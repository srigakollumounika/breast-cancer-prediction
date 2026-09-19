import {
  Activity,
  BrainCircuit,
  Database,
  HeartPulse,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import StatCard from "../components/StatCard";

import {
  getAnalyticsOverview,
  getBestModel,
  getHealth,
  getModels,
  getPredictionHistory,
} from "../services/api";

function Dashboard() {
  const [overview, setOverview] = useState(null);
  const [bestModel, setBestModel] = useState(null);
  const [health, setHealth] = useState(null);
  const [models, setModels] = useState([]);
  const [totalPredictions, setTotalPredictions] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const [
        overviewData,
        bestModelData,
        healthData,
        modelsData,
        historyData,
      ] = await Promise.all([
        getAnalyticsOverview(),
        getBestModel(),
        getHealth(),
        getModels(),
        getPredictionHistory(),
      ]);

      console.log("Dashboard Overview:", overviewData);
      console.log("Best Model:", bestModelData);
      console.log("Health:", healthData);
      console.log("Models:", modelsData);
      console.log("History:", historyData);

      setOverview(overviewData);
      setBestModel(bestModelData);
      setHealth(healthData);

      if (Array.isArray(modelsData)) {
        setModels(modelsData);
      } else if (Array.isArray(modelsData?.models)) {
        setModels(modelsData.models);
      } else {
        setModels([]);
      }

      // Get actual prediction count from History API
      if (historyData?.total_predictions !== undefined) {
        setTotalPredictions(historyData.total_predictions);
      } else if (Array.isArray(historyData?.predictions)) {
        setTotalPredictions(historyData.predictions.length);
      } else {
        setTotalPredictions(0);
      }
    } catch (error) {
      console.error("Dashboard data loading failed:", error);

      setError(
        error.response?.data?.detail ||
          "Failed to load dashboard data. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const formatPercentage = (value) => {
    if (value === undefined || value === null) {
      return "N/A";
    }

    return `${(Number(value) * 100).toFixed(2)}%`;
  };

  // GET BEST MODEL NAME
  const bestModelName =
    bestModel?.name ||
    bestModel?.model ||
    bestModel?.model_name ||
    overview?.best_model?.name ||
    overview?.best_model?.model ||
    "N/A";

  // GET BEST MODEL ACCURACY
  const bestModelAccuracy =
    bestModel?.accuracy ??
    overview?.best_model?.accuracy ??
    null;

  // GET TOTAL DATASET RECORDS
  const totalRecords =
    overview?.total_records ??
    overview?.dataset?.total_records ??
    overview?.dataset_samples ??
    569;

  // GET MODEL COUNT
  const modelCount =
    models.length > 0
      ? models.length
      : overview?.total_models ?? 0;

  // SYSTEM STATUS
  const isSystemOnline =
    health?.status === "healthy" ||
    health?.status === "running";

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">
        <div>
          <h1 className="page-title">
            Welcome to BreastAI
          </h1>

          <p className="page-subtitle">
            AI-powered breast cancer prediction and healthcare intelligence platform.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <button
            className="refresh-btn"
            onClick={loadDashboardData}
          >
            <RefreshCw size={18} />
            Refresh
          </button>

          <div className="dashboard-status">
            <span
              className={
                isSystemOnline
                  ? "status-indicator online"
                  : "status-indicator offline"
              }
            />

            {isSystemOnline
              ? "AI System Online"
              : "AI System Offline"}
          </div>
        </div>
      </div>

      {/* ================= ERROR ================= */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* ================= STAT CARDS ================= */}

      <div className="dashboard-stats">

        <StatCard
          title="Dataset Records"
          value={totalRecords}
          description="Breast cancer samples"
          trend="Medical Dataset"
          icon={<Database size={22} />}
        />

        <StatCard
          title="Best Model Accuracy"
          value={formatPercentage(bestModelAccuracy)}
          description="Model performance"
          trend="High Accuracy"
          icon={<TrendingUp size={22} />}
        />

        <StatCard
          title="AI Models"
          value={modelCount || "N/A"}
          description="ML models available"
          trend="Active"
          icon={<BrainCircuit size={22} />}
        />

        <StatCard
          title="System Status"
          value={
            isSystemOnline
              ? "Online"
              : "Offline"
          }
          description="Backend services"
          trend={
            isSystemOnline
              ? "Operational"
              : "Unavailable"
          }
          icon={<ShieldCheck size={22} />}
        />

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="dashboard-grid">

        {/* AI PLATFORM CARD */}

        <div className="dashboard-main-card">

          <div className="card-header">
            <div>
              <h2>
                AI Healthcare Intelligence
              </h2>

              <p>
                Advanced machine learning models for breast cancer classification.
              </p>
            </div>

            <HeartPulse size={32} />
          </div>

          <div className="feature-grid">

            <div className="feature-item">
              <Activity size={22} />

              <div>
                <h3>
                  Smart Prediction
                </h3>

                <p>
                  Predict breast cancer using advanced AI models
                  with confidence scores and probabilities.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <BrainCircuit size={22} />

              <div>
                <h3>
                  Multiple Models
                </h3>

                <p>
                  Compare multiple machine learning and
                  deep learning algorithms.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <TrendingUp size={22} />

              <div>
                <h3>
                  Analytics
                </h3>

                <p>
                  Explore dataset insights and detailed
                  model performance metrics.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= BEST MODEL ================= */}

        <div className="best-model-card">

          <div className="best-model-icon">
            <BrainCircuit size={30} />
          </div>

          <p className="best-model-label">
            BEST PERFORMING MODEL
          </p>

          <h2>
            {bestModelName}
          </h2>

          <div className="model-score">
            <span>
              Accuracy
            </span>

            <strong>
              {formatPercentage(bestModelAccuracy)}
            </strong>
          </div>

          <div className="model-progress">
            <div
              className="model-progress-fill"
              style={{
                width:
                  bestModelAccuracy !== null
                    ? `${Math.min(
                        Number(bestModelAccuracy) * 100,
                        100
                      )}%`
                    : "0%",
              }}
            />
          </div>

        </div>
      </div>

      {/* ================= QUICK INSIGHTS ================= */}

      <div className="quick-insights">

        <div className="insight-card">

          <div className="insight-icon">
            <Database size={22} />
          </div>

          <div>
            <p>
              Total Dataset
            </p>

            <h3>
              {totalRecords} Records
            </h3>
          </div>

        </div>

        <div className="insight-card">

          <div className="insight-icon">
            <HeartPulse size={22} />
          </div>

          <div>
            <p>
              Classification
            </p>

            <h3>
              Benign / Malignant
            </h3>
          </div>

        </div>

        <div className="insight-card">

          <div className="insight-icon">
            <Activity size={22} />
          </div>

          <div>
            <p>
              Total Predictions
            </p>

            <h3>
              {totalPredictions}
            </h3>
          </div>

        </div>

        <div className="insight-card">

          <div className="insight-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <p>
              AI Confidence
            </p>

            <h3>
              High Performance
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;