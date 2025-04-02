import React, { useState, useEffect } from 'react';
import { 
  Tabs, Tab, Box, Typography, Paper, TextField, Button, 
  Select, MenuItem, FormControl, InputLabel, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Fade, Grow, Zoom
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { 
  getIncomeCategories, addIncomeCategory, getIncome, addIncome,
  getExpenseCategories, addExpenseCategory, getExpenses, addExpense,
  getFinancialSummary 
} from '../services/financeService';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  },
  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(255, 255, 255, 0.2)'
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
      fontWeight: 'bold',
    }
  },
  '& .MuiTableRow-root': {
    transition: 'background-color 0.2s ease',
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    }
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  fontWeight: 'bold',
  padding: '10px 24px',
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
  },
  '&:disabled': {
    background: theme.palette.action.disabledBackground
  }
}));

const SummaryCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.8)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  flex: 1,
  minWidth: '200px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)'
  }
}));

const AnimatedTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    height: '4px',
    borderRadius: '2px',
    background: 'linear-gradient(45deg, #1976d2, #4dabf5)'
  }
});

const FinanceManager = () => {
  const [tabValue, setTabValue] = useState('income');
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState(null);
  const [newCategory, setNewCategory] = useState({ type: '', name: '' });
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    description: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [incCats, expCats, inc, exp, summ] = await Promise.all([
        getIncomeCategories(),
        getExpenseCategories(),
        getIncome(),
        getExpenses(),
        getFinancialSummary()
      ]);
      setIncomeCategories(incCats);
      setExpenseCategories(expCats);
      setIncome(inc);
      setExpenses(exp);
      setSummary(summ);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({ ...prev, [name]: value }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCategory = async () => {
    try {
      if (newCategory.type === 'income') {
        await addIncomeCategory({ name: newCategory.name });
      } else {
        await addExpenseCategory({ name: newCategory.name });
      }
      fetchData();
      setNewCategory({ type: '', name: '' });
      setShowNewCategory(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (tabValue === 'income') {
        await addIncome(formData);
      } else {
        await addExpense(formData);
      }
      fetchData();
      setFormData({
        category: '',
        amount: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <Box sx={{ 
      padding: { xs: 2, md: 4 },
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'linear-gradient(to bottom right, #f9fafb, #f0f4f8)',
      minHeight: '100vh'
    }}>
      <Fade in timeout={500}>
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            '&:before, &:after': {
              content: '""',
              flex: 1,
              borderBottom: '2px solid rgba(0, 0, 0, 0.1)',
              margin: '0 10px'
            }
          }}>
            Financial Summary
          </Typography>
          {summary ? (
            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <Grow in timeout={600}>
                <SummaryCard>
                  <Typography variant="subtitle1">Total Income</Typography>
                  <Typography variant="h4" color="success.main" sx={{ fontWeight: 'bold', mt: 1 }}>
                    ${summary.totalIncome.toFixed(2)}
                  </Typography>
                </SummaryCard>
              </Grow>
              <Grow in timeout={800}>
                <SummaryCard>
                  <Typography variant="subtitle1">Total Expenses</Typography>
                  <Typography variant="h4" color="error.main" sx={{ fontWeight: 'bold', mt: 1 }}>
                    ${summary.totalExpenses.toFixed(2)}
                  </Typography>
                </SummaryCard>
              </Grow>
              <Grow in timeout={1000}>
                <SummaryCard>
                  <Typography variant="subtitle1">Net Profit/Loss</Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mt: 1,
                      background: summary.netProfit >= 0 
                        ? 'linear-gradient(45deg, #2e7d32, #4caf50)'
                        : 'linear-gradient(45deg, #c62828, #ef5350)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    ${summary.netProfit.toFixed(2)}
                  </Typography>
                </SummaryCard>
              </Grow>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <Typography>Loading financial data...</Typography>
            </Box>
          )}
        </StyledPaper>
      </Fade>

      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider', 
        mb: 4,
        position: 'relative'
      }}>
        <AnimatedTabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              minWidth: '120px',
              '&.Mui-selected': {
                color: 'primary.main'
              }
            }
          }}
        >
          <Tab label="Income" value="income" />
          <Tab label="Expense" value="expense" />
        </AnimatedTabs>
      </Box>

      {tabValue === 'income' ? (
        <>
          <Zoom in timeout={500}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <AddIcon color="primary" /> Add Income
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
                  <InputLabel sx={{ color: 'text.primary' }}>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                        borderRadius: '8px'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    {incomeCategories.map(cat => (
                      <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <GradientButton 
                  onClick={() => {
                    setNewCategory(prev => ({ ...prev, type: 'income' }));
                    setShowNewCategory(true);
                  }}
                  startIcon={<AddIcon />}
                  sx={{ mb: 3 }}
                >
                  Add New Category
                </GradientButton>
                
                {showNewCategory && (
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 3,
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <TextField
                      label="New Category Name"
                      name="name"
                      value={newCategory.name}
                      onChange={handleCategoryChange}
                      fullWidth
                      sx={{ flex: 1, minWidth: '200px' }}
                      variant="outlined"
                      size="small"
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <GradientButton 
                        onClick={handleAddCategory}
                        disabled={!newCategory.name}
                      >
                        Save
                      </GradientButton>
                      <Button 
                        onClick={() => setShowNewCategory(false)}
                        variant="outlined"
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 'bold'
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                )}
                
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: (
                      <Typography sx={{ mr: 1, color: 'text.secondary' }}>$</Typography>
                    )
                  }}
                />
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  sx={{ mb: 2 }}
                />
                <GradientButton 
                  type="submit" 
                  startIcon={<AddIcon />}
                  sx={{ mt: 2 }}
                >
                  Add Income
                </GradientButton>
              </form>
            </StyledPaper>
          </Zoom>

          <Zoom in timeout={700}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Income Transactions
              </Typography>
              <StyledTableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {income.map((item, index) => (
                      <Grow in key={item._id} timeout={(index + 1) * 100}>
                        <TableRow>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.category.name}</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>
                            ${item.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{item.description}</TableCell>
                        </TableRow>
                      </Grow>
                    ))}
                  </TableBody>
                </Table>
              </StyledTableContainer>
            </StyledPaper>
          </Zoom>
        </>
      ) : (
        <>
          <Zoom in timeout={500}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <AddIcon color="primary" /> Add Expense
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
                  <InputLabel sx={{ color: 'text.primary' }}>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                        borderRadius: '8px'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    {expenseCategories.map(cat => (
                      <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <GradientButton 
                  onClick={() => {
                    setNewCategory(prev => ({ ...prev, type: 'expense' }));
                    setShowNewCategory(true);
                  }}
                  startIcon={<AddIcon />}
                  sx={{ mb: 3 }}
                >
                  Add New Category
                </GradientButton>
                
                {showNewCategory && (
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 3,
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <TextField
                      label="New Category Name"
                      name="name"
                      value={newCategory.name}
                      onChange={handleCategoryChange}
                      fullWidth
                      sx={{ flex: 1, minWidth: '200px' }}
                      variant="outlined"
                      size="small"
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <GradientButton 
                        onClick={handleAddCategory}
                        disabled={!newCategory.name}
                      >
                        Save
                      </GradientButton>
                      <Button 
                        onClick={() => setShowNewCategory(false)}
                        variant="outlined"
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 'bold'
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                )}
                
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: (
                      <Typography sx={{ mr: 1, color: 'text.secondary' }}>$</Typography>
                    )
                  }}
                />
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  sx={{ mb: 2 }}
                />
                <GradientButton 
                  type="submit" 
                  startIcon={<AddIcon />}
                  sx={{ mt: 2 }}
                >
                  Add Expense
                </GradientButton>
              </form>
            </StyledPaper>
          </Zoom>

          <Zoom in timeout={700}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Expense Transactions
              </Typography>
              <StyledTableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expenses.map((item, index) => (
                      <Grow in key={item._id} timeout={(index + 1) * 100}>
                        <TableRow>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell>{item.category.name}</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', color: 'error.main' }}>
                            ${item.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{item.description}</TableCell>
                        </TableRow>
                      </Grow>
                    ))}
                  </TableBody>
                </Table>
              </StyledTableContainer>
            </StyledPaper>
          </Zoom>
        </>
      )}
    </Box>
  );
};

export default FinanceManager;