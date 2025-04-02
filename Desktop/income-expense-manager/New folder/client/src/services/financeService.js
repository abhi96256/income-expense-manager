import api from './api';

// Income Categories
export const getIncomeCategories = async () => {
  try {
    const response = await api.get('/finance/income-categories');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addIncomeCategory = async (data) => {
  try {
    const response = await api.post('/finance/income-categories', data);
    return response;
  } catch (error) {
    throw error;
  }
};

// Expense Categories
export const getExpenseCategories = async () => {
  try {
    const response = await api.get('/finance/expense-categories');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addExpenseCategory = async (data) => {
  try {
    const response = await api.post('/finance/expense-categories', data);
    return response;
  } catch (error) {
    throw error;
  }
};

// Income Transactions
export const getIncome = async (params = {}) => {
  try {
    const response = await api.get('/finance/income', { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const addIncome = async (data) => {
  try {
    const response = await api.post('/finance/income', data);
    return response;
  } catch (error) {
    throw error;
  }
};

// Expense Transactions
export const getExpenses = async (params = {}) => {
  try {
    const response = await api.get('/finance/expenses', { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const addExpense = async (data) => {
  try {
    const response = await api.post('/finance/expenses', data);
    return response;
  } catch (error) {
    throw error;
  }
};

// Financial Summary
export const getFinancialSummary = async () => {
  try {
    const response = await api.get('/finance/summary');
    return response;
  } catch (error) {
    throw error;
  }
};
export const getRecentTransactions = async () => {
  return [
    { category: 'Food', amount: 50, type: 'expense', date: '2025-03-31' },
    { category: 'Salary', amount: 2000, type: 'income', date: '2025-03-30' }
  ];
};
