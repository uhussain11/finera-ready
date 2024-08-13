'use client';
import { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Box, Container } from '@mui/material';
import AIInsightsResults from '../components/aiInsights/AIInsightsResults.js';  

const AIInsights = () => {
  const [dataSymbol, setDataSymbol] = useState('');
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEarningsAnalysis = () => {
    setLoading(true);
    // Simulate API call to fetch earnings analysis based on dataSymbol
    setTimeout(() => {
      const mockInsights = {
        summary: 'The earnings report highlighted strong growth in revenue and profitability, with a significant increase in EPS compared to last year.',
        financialFigures: [
          { name: 'Revenue', value: '$10M' },
          { name: 'EPS', value: '$1.50' },
        ],
      };
      setInsights(mockInsights);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container sx={{ minHeight: '100vh', bgcolor: 'grey.100', p: 6, fontFamily: 'Arial, sans-serif' }}>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, color: 'grey.800', fontWeight: 'bold' }}>
          Earnings Call Analysis
        </Typography>
        <Card sx={{ mb: 4, p: 3, boxShadow: 3 }}>
          <CardContent>
            <TextField
              label="Ticker Symbol"
              value={dataSymbol}
              onChange={(e) => setDataSymbol(e.target.value)}
              fullWidth
              placeholder="Enter stock ticker (e.g., AAPL)"
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="primary" onClick={fetchEarningsAnalysis} fullWidth>
              Get Insights
            </Button>
          </CardContent>
        </Card>
        {loading ? (
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 4 }}>
            Loading...
          </Typography>
        ) : (
          insights && <AIInsightsResults insights={insights} />  // Render the results
        )}
      </Box>
    </Container>
  );
};

export default AIInsights;
