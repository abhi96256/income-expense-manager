import api from './api';  // Import your Axios instance

// Get all invoices
export const getInvoices = async (params = {}) => {
  try {
    const response = await api.get('/invoice', { params });  // Make GET request to fetch invoices
    return response.data;  // Return the data part of the response
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;  // Throw error for further handling in component
  }
};

// Get a specific invoice by ID
export const getInvoice = async (id) => {
  try {
    const response = await api.get(`/invoice/${id}`);  // Make GET request to fetch a specific invoice
    return response.data;  // Return the data part of the response
  } catch (error) {
    console.error("Error fetching the invoice:", error);
    throw error;  // Throw error for further handling in component
  }
};

// Create a new invoice
export const createInvoice = async (data) => {
  try {
    const response = await api.post('/invoice', data);  // Make POST request to create an invoice
    return response.data;  // Return the data part of the response
  } catch (error) {
    console.error("Error creating invoice:", error);
    throw error;  // Throw error for further handling in component
  }
};
