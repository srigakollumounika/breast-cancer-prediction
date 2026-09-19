import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===============================
// SYSTEM APIs
// ===============================

export const getHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};

export const getSystemStatus = async () => {
  const response = await api.get("/api/v1/analytics/system");
  return response.data;
};

// ===============================
// PREDICTION API
// ===============================

export const predictCancer = async (features) => {
  const response = await api.post("/api/v1/predict", {
    features,
  });

  return response.data;
};

// ===============================
// MODELS APIs
// ===============================

export const getModels = async () => {
  const response = await api.get("/api/v1/models/");
  return response.data;
};

export const getBestModel = async () => {
  const response = await api.get("/api/v1/models/best");
  return response.data;
};

export const compareModels = async () => {
  const response = await api.get("/api/v1/models/comparison");
  return response.data;
};

// ===============================
// ANALYTICS APIs
// ===============================

export const getAnalyticsOverview = async () => {
  const response = await api.get("/api/v1/analytics/overview");
  return response.data;
};

export const getDatasetAnalytics = async () => {
  const response = await api.get("/api/v1/analytics/dataset");
  return response.data;
};

export const getModelPerformance = async () => {
  const response = await api.get("/api/v1/analytics/performance");
  return response.data;
};

// ===============================
// HISTORY APIs
// ===============================

export const getPredictionHistory = async () => {
  const response = await api.get("/api/v1/history/");
  return response.data;
};

export const getPredictionById = async (id) => {
  const response = await api.get(`/api/v1/history/${id}`);
  return response.data;
};

export const deletePrediction = async (id) => {
  const response = await api.delete(`/api/v1/history/${id}`);
  return response.data;
};

// ===============================
// DEFAULT API
// ===============================

export default api;