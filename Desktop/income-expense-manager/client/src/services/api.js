import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error("API Error:", error.request);
      return Promise.reject({ error: "No response from server" });
    } else {
      console.error("API Error:", error.message);
      return Promise.reject({ error: error.message });
    }
  }
);

// ✅ API Functions for Data Fetching
export const getFinancialSummary = async () => api.get("/financial-summary");
export const getStock = async () => api.get("/stock");
export const getIncome = async () => api.get("/income");
export const getExpenses = async () => api.get("/expenses");

export default api;
