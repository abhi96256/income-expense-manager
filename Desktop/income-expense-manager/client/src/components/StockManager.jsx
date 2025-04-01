import React, { useState, useEffect } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel,
  CircularProgress, IconButton, Snackbar, Alert
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { getStock, addStockTransaction } from '../services/stockService';
import Typography from "@mui/material/Typography";

// Custom animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(63, 81, 181, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(63, 81, 181, 0); }
  100% { box-shadow: 0 0 0 0 rgba(63, 81, 181, 0); }
`;

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: '12px',
  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(5px)',
  animation: `${fadeIn} 0.6s ease-out`,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  '& .MuiTable-root': {
    minWidth: 650,
  },
  '& .MuiTableHead-root': {
    background: theme.palette.primary.main,
    '& .MuiTableCell-root': {
      color: theme.palette.common.white,
      fontWeight: 600,
      fontSize: '0.9rem'
    }
  },
  '& .MuiTableBody-root': {
    '& .MuiTableRow-root': {
      transition: 'all 0.2s ease',
      '&:nth-of-type(even)': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
      },
      '&:hover': {
        backgroundColor: 'rgba(63, 81, 181, 0.04)',
        transform: 'translateX(4px)'
      }
    }
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3f51b5, #2196f3)',
  color: 'white',
  borderRadius: '8px',
  padding: '10px 24px',
  fontWeight: 600,
  textTransform: 'none',
  letterSpacing: '0.5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(33, 150, 243, 0.3)',
    background: 'linear-gradient(135deg, #3949ab, #1e88e5)'
  },
  '&:active': {
    transform: 'translateY(0)'
  }
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#e0e0e0',
      transition: 'all 0.3s ease'
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.light
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.2)'
    }
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '8px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e0e0e0',
    transition: 'all 0.3s ease'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.light
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 0 0 3px rgba(63, 81, 181, 0.2)'
  }
}));

const StockManager = () => {
  const [stock, setStock] = useState([]);
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    price: '',
    type: 'purchase',
    vendorName: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    itemName: false,
    quantity: false,
    price: false,
    vendorName: false
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' // 'success', 'error', 'warning', 'info'
  });

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        const data = await getStock();
        setStock(data);
      } catch (error) {
        console.error('Error fetching stock:', error);
        setSnackbar({
          open: true,
          message: 'Failed to load stock data',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchStockData();
  }, []);

  const validateForm = () => {
    const newErrors = {
      itemName: !formData.itemName.trim(),
      quantity: !formData.quantity || isNaN(formData.quantity),
      price: !formData.price || isNaN(formData.price),
      vendorName: !formData.vendorName.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: 'Please fill all required fields correctly',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);
    
    try {
      // Optimistic UI update
      const tempId = Date.now().toString();
      const newTransaction = {
        ...formData,
        _id: tempId,
        date: new Date().toISOString(),
        quantity: Number(formData.quantity),
        price: Number(formData.price)
      };
      
      setStock(prev => [newTransaction, ...prev]);
      
      // API call
      const savedTransaction = await addStockTransaction(formData);
      
      // Replace optimistic update with actual data from server
      setStock(prev => [
        { ...savedTransaction, date: new Date(savedTransaction.date).toISOString() },
        ...prev.filter(item => item._id !== tempId)
      ]);
      
      // Reset form
      setFormData({
        itemName: '',
        quantity: '',
        price: '',
        type: 'purchase',
        vendorName: ''
      });
      
      setSnackbar({
        open: true,
        message: 'Transaction added successfully!',
        severity: 'success'
      });
      
    } catch (error) {
      console.error('Error adding stock:', error);
      // Revert optimistic update
      setStock(prev => prev.filter(item => item._id !== Date.now().toString()));
      setSnackbar({
        open: true,
        message: 'Failed to add transaction',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ 
          fontWeight: 700,
          color: 'primary.main',
          mb: 3,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
            borderRadius: '2px'
          }
        }}>
          Add Stock Transaction
        </Typography>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <StyledTextField
              label="Item Name"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={errors.itemName}
              helperText={errors.itemName ? "Item name is required" : ""}
            />
            <StyledTextField
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={errors.quantity}
              helperText={errors.quantity ? "Valid quantity is required" : ""}
            />
            <StyledTextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={errors.price}
              helperText={errors.price ? "Valid price is required" : ""}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Transaction Type</InputLabel>
              <StyledSelect
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <MenuItem value="purchase">Purchase</MenuItem>
                <MenuItem value="sale">Sale</MenuItem>
              </StyledSelect>
            </FormControl>
            <StyledTextField
              label="Vendor/Customer Name"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              sx={{ gridColumn: 'span 2' }}
              error={errors.vendorName}
              helperText={errors.vendorName ? "Vendor/Customer name is required" : ""}
            />
          </div>
          <StyledButton 
            type="submit" 
            variant="contained" 
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AddIcon />}
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Add Transaction'}
          </StyledButton>
        </form>
      </StyledPaper>

      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ 
          fontWeight: 700,
          color: 'primary.main',
          mb: 3,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
            borderRadius: '2px'
          }
        }}>
          Stock Transactions
        </Typography>
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Vendor/Customer</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && stock.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <CircularProgress />
                    </div>
                  </TableCell>
                </TableRow>
              ) : stock.length > 0 ? (
                stock.map((item) => (
                  <TableRow key={item._id} hover>
                    <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{item.itemName}</TableCell>
                    <TableCell>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: item.type === 'purchase' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                        color: item.type === 'purchase' ? '#4caf50' : '#f44336',
                        fontWeight: 600
                      }}>
                        {item.type}
                      </span>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>
                      ${(item.quantity * item.price).toFixed(2)}
                    </TableCell>
                    <TableCell>{item.vendorName}</TableCell>
                    <TableCell>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                    No transactions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledPaper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StockManager;