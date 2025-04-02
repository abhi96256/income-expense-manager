import React, { useState, useEffect } from 'react';
import { 
  Paper, Typography, TextField, Button, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Box,
  Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, Tooltip, Divider, Snackbar, Alert, CircularProgress
} from '@mui/material';
import { 
  Add as AddIcon, 
  Print as PrintIcon, 
  Save as SaveIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';
import { getInvoices, createInvoice } from '../services/invoiceService';
import InvoicePreview from './InvoicePreview';

// Custom animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(98, 0, 238, 0); }
  100% { box-shadow: 0 0 0 0 rgba(98, 0, 238, 0); }
`;

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: '16px',
  background: 'linear-gradient(145deg, #ffffff, #f8f8f8)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  animation: `${fadeIn} 0.6s ease-out`,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
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
        backgroundColor: 'rgba(98, 0, 238, 0.04)',
        transform: 'translateX(4px)'
      }
    }
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6200ee, #3700b3)',
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
    boxShadow: '0 6px 12px rgba(98, 0, 238, 0.3)',
    background: 'linear-gradient(135deg, #3700b3, #6200ee)'
  },
  '&:active': {
    transform: 'translateY(0)'
  }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  borderRadius: '8px',
  padding: '8px 20px',
  fontWeight: 600,
  textTransform: 'none',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(98, 0, 238, 0.08)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(98, 0, 238, 0.1)'
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
      boxShadow: '0 0 0 3px rgba(98, 0, 238, 0.2)'
    }
  }
}));

const InvoiceManager = () => {
  const [invoices, setInvoices] = useState([]);
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    items: [{ description: '', quantity: 1, price: 0 }],
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
    notes: '',
    date: new Date().toISOString()
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loading, setLoading] = useState({
    form: false,
    table: false
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setLoading(prev => ({ ...prev, table: true }));
    try {
      const data = await getInvoices();
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      showSnackbar('Failed to load invoices', 'error');
    } finally {
      setLoading(prev => ({ ...prev, table: false }));
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index][name] = name === 'quantity' || name === 'price' ? parseFloat(value) || 0 : value;
    
    const subtotal = newItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const taxAmount = subtotal * (formData.tax / 100);
    const total = subtotal + taxAmount - formData.discount;
    
    setFormData(prev => ({
      ...prev,
      items: newItems,
      subtotal,
      total
    }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, price: 0 }]
    }));
  };

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    const subtotal = newItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const taxAmount = subtotal * (formData.tax / 100);
    const total = subtotal + taxAmount - formData.discount;
    
    setFormData(prev => ({
      ...prev,
      items: newItems,
      subtotal,
      total
    }));
  };

  const validateForm = () => {
    if (!formData.invoiceNumber.trim()) {
      showSnackbar('Invoice number is required', 'error');
      return false;
    }

    if (!formData.customerName.trim()) {
      showSnackbar('Customer name is required', 'error');
      return false;
    }

    for (const item of formData.items) {
      if (!item.description.trim()) {
        showSnackbar('All items must have a description', 'error');
        return false;
      }
      if (item.price <= 0) {
        showSnackbar('All items must have a positive price', 'error');
        return false;
      }
      if (item.quantity <= 0) {
        showSnackbar('All items must have a positive quantity', 'error');
        return false;
      }
    }

    return true;
  };

  const handlePreview = () => {
    if (validateForm()) {
      setPreviewOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(prev => ({ ...prev, form: true }));
    
    try {
      const invoiceData = {
        ...formData,
        date: new Date().toISOString(),
        items: formData.items.map(item => ({
          ...item,
          quantity: parseFloat(item.quantity),
          price: parseFloat(item.price)
        }))
      };
      
      const createdInvoice = await createInvoice(invoiceData);
      
      setInvoices(prev => [createdInvoice, ...prev]);
      
      setFormData({
        invoiceNumber: '',
        customerName: '',
        customerAddress: '',
        customerPhone: '',
        items: [{ description: '', quantity: 1, price: 0 }],
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
        notes: '',
        date: new Date().toISOString()
      });
      
      showSnackbar('Invoice created successfully!', 'success');
    } catch (error) {
      console.error('Error creating invoice:', error);
      let errorMessage = 'Failed to create invoice';
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = 'No response from server';
      }
      
      showSnackbar(errorMessage, 'error');
    } finally {
      setLoading(prev => ({ ...prev, form: false }));
    }
  };

  return (
    <Box sx={{ p: 4 }}>
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
            background: 'linear-gradient(90deg, #6200ee, #3700b3)',
            borderRadius: '2px'
          }
        }}>
          Create New Invoice
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            <StyledTextField
              label="Invoice Number *"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            
            <StyledTextField
              label="Customer Name *"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            
            <StyledTextField
              label="Customer Address"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={3}
              sx={{ gridColumn: 'span 2' }}
            />
            
            <StyledTextField
              label="Customer Phone"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>Invoice Items</Typography>
          {formData.items.map((item, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 2,
              alignItems: 'center',
              p: 2,
              borderRadius: '8px',
              background: 'rgba(0, 0, 0, 0.02)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(98, 0, 238, 0.03)'
              }
            }}>
              <StyledTextField
                label="Description *"
                name="description"
                value={item.description}
                onChange={(e) => handleItemChange(index, e)}
                sx={{ flex: 2 }}
                required
              />
              <StyledTextField
                label="Quantity *"
                name="quantity"
                type="number"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                sx={{ flex: 1 }}
                inputProps={{ min: 1, step: 1 }}
                required
              />
              <StyledTextField
                label="Price *"
                name="price"
                type="number"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                sx={{ flex: 1 }}
                inputProps={{ min: 0.01, step: 0.01 }}
                required
              />
              <Tooltip title="Remove item">
                <IconButton 
                  onClick={() => removeItem(index)}
                  color="error"
                  sx={{ 
                    flex: 0.5,
                    '&:hover': {
                      background: 'rgba(244, 67, 54, 0.08)'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ))}
          
          <SecondaryButton 
            onClick={addItem}
            startIcon={<AddIcon />}
            sx={{ mb: 3 }}
          >
            Add Item
          </SecondaryButton>
          
          <Divider sx={{ my: 3 }} />
          
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            <StyledTextField
              label="Tax (%)"
              name="tax"
              type="number"
              value={formData.tax}
              onChange={handleChange}
              fullWidth
              margin="normal"
              inputProps={{ min: 0, max: 100, step: 0.01 }}
            />
            
            <StyledTextField
              label="Discount"
              name="discount"
              type="number"
              value={formData.discount}
              onChange={handleChange}
              fullWidth
              margin="normal"
              inputProps={{ min: 0, step: 0.01 }}
            />
          </Box>
          
          <StyledTextField
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            sx={{ mt: 2 }}
          />
          
          <Box sx={{ 
            mt: 3, 
            mb: 3,
            p: 3,
            borderRadius: '8px',
            background: 'rgba(98, 0, 238, 0.03)',
            borderLeft: '4px solid #6200ee'
          }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Subtotal: <strong>${formData.subtotal.toFixed(2)}</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Tax: <strong>${(formData.subtotal * (formData.tax / 100)).toFixed(2)}</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Discount: <strong>${formData.discount.toFixed(2)}</strong>
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Total: <strong>${formData.total.toFixed(2)}</strong>
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <PrimaryButton 
              type="submit" 
              startIcon={loading.form ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
              disabled={loading.form}
            >
              {loading.form ? 'Saving...' : 'Save Invoice'}
            </PrimaryButton>
            <SecondaryButton 
              onClick={handlePreview}
              startIcon={<VisibilityIcon />}
              disabled={!formData.invoiceNumber || !formData.customerName || formData.items.some(item => !item.description || item.price <= 0 || item.quantity <= 0)}
            >
              Preview
            </SecondaryButton>
          </Box>
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
            background: 'linear-gradient(90deg, #6200ee, #3700b3)',
            borderRadius: '2px'
          }
        }}>
          Recent Invoices
        </Typography>
        
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice #</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading.table && invoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <CircularProgress size={24} sx={{ color: '#6200ee' }} />
                  </TableCell>
                </TableRow>
              ) : invoices.length > 0 ? (
                invoices.map(invoice => (
                  <TableRow key={invoice._id} hover>
                    <TableCell sx={{ fontWeight: 600 }}>{invoice.invoiceNumber}</TableCell>
                    <TableCell>{invoice.customerName}</TableCell>
                    <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>${invoice.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Box sx={{
                        display: 'inline-block',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px',
                        background: '#4caf50',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        Paid
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="View Invoice">
                        <IconButton
                          onClick={() => {
                            setFormData({
                              ...invoice,
                              items: invoice.items.map(item => ({
                                ...item,
                                quantity: parseFloat(item.quantity),
                                price: parseFloat(item.price)
                              }))
                            });
                            setPreviewOpen(true);
                          }}
                          color="primary"
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    No invoices found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledPaper>

      <Dialog 
        open={previewOpen} 
        onClose={() => setPreviewOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            overflow: 'hidden'
          }
        }}
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(135deg, #6200ee, #3700b3)',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          Invoice Preview
          <IconButton 
            onClick={() => setPreviewOpen(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <InvoicePreview invoice={formData} />
        </DialogContent>
        <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <SecondaryButton onClick={() => setPreviewOpen(false)}>
            Close
          </SecondaryButton>
          <PrimaryButton 
            onClick={() => window.print()}
            startIcon={<PrintIcon />}
          >
            Print Invoice
          </PrimaryButton>
        </DialogActions>
      </Dialog>

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
    </Box>
  );
};

export default InvoiceManager;