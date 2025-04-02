import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';
import FinancePage from './pages/FinancePage';
import InvoicePage from './pages/InvoicePage';
import DashboardPage from './components/Dashboard';
import { GlobalProvider } from "./context/GlobalState";

import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const theme = createTheme({
  palette: {
    primary: { main: '#2c3e50' },
    secondary: { main: '#3498db' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/finance" element={
            <div className="container">
            
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          } />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;