import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { getFinancialSummary, getStock, getIncome, getExpenses } from "../services/api";
import { keyframes } from '@emotion/react';

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

const HomePage = () => {
  const [summary, setSummary] = useState(null);
  const [recentStock, setRecentStock] = useState([]);
  const [recentFinance, setRecentFinance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [summ, stock, income, expenses] = await Promise.all([
        getFinancialSummary(),
        getStock({ limit: 5 }),
        getIncome({ limit: 5 }),
        getExpenses({ limit: 5 })
      ]);

      setSummary(summ);
      setRecentStock(stock);
      setRecentFinance([...income, ...expenses].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Gradient colors
  const gradientColors = {
    income: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    expenses: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
    profit: 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
    card: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 100%)'
  };

  return (
    <Grid container spacing={3} sx={{ 
      padding: { xs: 2, md: 4 }, 
      background: 'radial-gradient(circle at top right, #f5f7fa 0%, #e4e8eb 100%)',
      minHeight: '100vh',
      animation: `${fadeIn} 0.8s ease-out`
    }}>
      {/* Financial Summary Section */}
      <Grid item xs={12}>
        <Paper elevation={0} sx={{ 
          p: 4, 
          borderRadius: 4, 
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 50%, #ff7e5f 100%)'
          }
        }}>
          <Typography variant="h5" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#2d3748',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            '&:after': {
              content: '""',
              flex: 1,
              ml: 2,
              height: '1px',
              background: 'linear-gradient(90deg, rgba(45,55,72,0.3) 0%, rgba(45,55,72,0) 100%)'
            }
          }}>
            Financial Summary
          </Typography>
          
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
              <Box sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: '3px solid rgba(63, 81, 181, 0.2)',
                borderTopColor: '#3f51b5',
                animation: `${keyframes`to { transform: rotate(360deg); }`} 1s linear infinite`
              }} />
            </Box>
          ) : summary ? (
            <Grid container spacing={3}>
              {[
                { label: 'Total Income', value: summary.totalIncome, color: gradientColors.income },
                { label: 'Total Expenses', value: summary.totalExpenses, color: gradientColors.expenses },
                { label: 'Net Profit/Loss', value: summary.netProfit, color: gradientColors.profit }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    borderRadius: 3,
                    background: item.color,
                    color: 'white',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { 
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0))',
                      transform: 'rotate(30deg)',
                      transition: 'all 0.4s ease'
                    },
                    '&:hover:before': {
                      left: '100%'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 600,
                      mb: 1,
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}>
                      {item.label}
                    </Typography>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 'bold',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      animation: `${pulse} 2s infinite`
                    }}>
                      ${item.value.toFixed(2)}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>No data available</Typography>
          )}
        </Paper>
      </Grid>

      {/* Recent Transactions Sections */}
      {[
        { 
          title: 'Recent Stock Transactions', 
          data: recentStock, 
          headers: ['Item', 'Type', 'Qty', 'Amount'],
          icon: '📦'
        },
        { 
          title: 'Recent Financial Transactions', 
          data: recentFinance, 
          headers: ['Type', 'Category', 'Amount'],
          icon: '💰'
        }
      ].map((section, index) => (
        <Grid item xs={12} md={6} key={index} sx={{ animation: `${fadeIn} 0.8s ease-out ${index * 0.2}s both` }}>
          <Paper elevation={0} sx={{ 
            p: 4, 
            height: '30%', 
            borderRadius: 4,
            background: gradientColors.card,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
            }
          }}>
            <Typography variant="h5" gutterBottom sx={{ 
              fontWeight: 'bold', 
              color: '#2d3748',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}>
              <Box sx={{
                width: 36,
                height: 42,
                borderRadius: '50%',
                background: 'rgba(63, 81, 181, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                {section.icon}
              </Box>
              {section.title}
            </Typography>
            
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '3px solid rgba(63, 81, 181, 0.2)',
                  borderTopColor: '#3f51b5',
                  animation: `${keyframes`to { transform: rotate(360deg); }`} 1s linear infinite`
                }} />
              </Box>
            ) : section.data.length > 0 ? (
              <Box sx={{ 
                overflowX: 'auto',
                borderRadius: 2,
                '&::-webkit-scrollbar': {
                  height: '6px'
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(0,0,0,0.05)'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(0,0,0,0.1)',
                  borderRadius: '3px',
                  '&:hover': {
                    background: 'rgba(0,0,0,0.2)'
                  }
                }
              }}>
                <Box 
                  component="table" 
                  sx={{ 
                    width: '100%', 
                    borderCollapse: 'separate',
                    borderSpacing: 0,
                    '& th, & td': {
                      p: '12px 16px',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(0,0,0,0.05)'
                    },
                    '& th': {
                      position: 'sticky',
                      top: 0,
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(12px)',
                      fontWeight: '600',
                      color: '#4a5568',
                      zIndex: 1,
                      '&:first-of-type': {
                        borderTopLeftRadius: '8px'
                      },
                      '&:last-of-type': {
                        borderTopRightRadius: '8px'
                      }
                    },
                    '& tr:last-child td': {
                      borderBottom: 'none'
                    },
                    '& tr:hover td': {
                      background: 'rgba(63, 81, 181, 0.03)'
                    }
                  }}
                >
                  <thead>
                    <tr>
                      {section.headers.map((head) => (
                        <th key={head}>{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.data.map((item, i) => (
                      <tr key={item._id}>
                        {index === 0 ? (
                          <>
                            <td sx={{ fontWeight: '500' }}>{item.itemName}</td>
                            <td>
                              <Box sx={{
                                display: 'inline-block',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                background: item.type === 'purchase' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                color: item.type === 'purchase' ? '#ef4444' : '#10b981',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}>
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </Box>
                            </td>
                            <td sx={{ textAlign: 'right', fontFamily: 'monospace' }}>{item.quantity}</td>
                            <td sx={{ 
                              textAlign: 'right',
                              fontWeight: '600',
                              color: item.type === 'purchase' ? '#ef4444' : '#10b981'
                            }}>
                              ${(item.quantity * item.price).toFixed(2)}
                            </td>
                          </>
                        ) : (
                          <>
                            <td>
                              <Box sx={{
                                display: 'inline-block',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                background: item.amount ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                color: item.amount ? '#10b981' : '#ef4444',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                              }}>
                                {item.amount ? 'Income' : 'Expense'}
                              </Box>
                            </td>
                            <td sx={{ fontWeight: '500' }}>{item.category?.name || 'N/A'}</td>
                            <td sx={{ 
                              textAlign: 'right',
                              fontWeight: '600',
                              color: item.amount ? '#10b981' : '#ef4444',
                              fontFamily: 'monospace'
                            }}>
                              ${item.amount?.toFixed(2) || item.expenseAmount?.toFixed(2)}
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Box>
              </Box>
            ) : (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                py: 4,
                color: 'text.secondary'
              }}>
                <Box sx={{ fontSize: '2.5rem', mb: 1 }}>📭</Box>
                <Typography>No recent transactions</Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;