import api from './api';

export const getStock = async (params = {}) => {
  try {
    const response = await api.get('/stock', { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const addStockTransaction = async (data) => {
  try {
    const response = await api.post('/stock', data);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getStockSummary = async () => {
  return { totalValue: 5000, items: [{ name: 'Product A', value: 1000 }] };
};
