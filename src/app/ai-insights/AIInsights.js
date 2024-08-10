'use client';
import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, CardHeader, Typography, Box, Container, Grid } from '@mui/material';

const AIInsights = () => {
  const [dataSymbol, setDataSymbol] = useState('');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [insights, setInsights] = useState(null);
  const [analysisType, setAnalysisType] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const runStockAnalysis = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockInsights = {
        sentiment: 'The sentiment is generally positive, indicating strong investor confidence.',
        fundamental: 'The company has a PE ratio of 15, a market cap of 1.5T, and an EPS of 5, indicating solid financial health.',
      };
      setInsights(mockInsights);
      setLoading(false);
    }, 2000);
  };

  const handleAnalysisType = (type) => {
    setAnalysisType(type);
    setShowForm(true);
  };

  return (
    <Container sx={{ minHeight: '100vh', bgcolor: 'grey.100', p: 6, fontFamily: 'Arial, sans-serif' }}>
      {!showForm ? (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 4, color: 'grey.800', fontWeight: 'bold' }}>
            Discover Market Insights
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, color: 'grey.600' }}>
            Choose the type of analysis to begin:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAnalysisType('fundamental')}
                sx={{ p: 2, fontSize: '1.2rem', transition: '0.3s', '&:hover': { backgroundColor: '#1E88E5', transform: 'scale(1.05)' } }}
              >
                Analyze Fundamentals
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAnalysisType('sentiment')}
                sx={{ p: 2, fontSize: '1.2rem', transition: '0.3s', '&:hover': { backgroundColor: '#D32F2F', transform: 'scale(1.05)' } }}
              >
                Analyze Sentiment
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>
          <Typography variant="h4" component="h2" sx={{ mb: 4, color: 'grey.800', fontWeight: 'bold' }}>
            {analysisType === 'fundamental' ? 'Fundamental Analysis' : 'Sentiment Analysis'}
          </Typography>
          <Card sx={{ mb: 4, p: 3, boxShadow: 3 }}>
            <CardHeader title="Enter Stock Details" />
            <CardContent>
              <TextField
                label="Stock Symbol"
                value={dataSymbol}
                onChange={(e) => setDataSymbol(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <Button variant="contained" color="primary" onClick={runStockAnalysis}>
                Get Insights
              </Button>
            </CardContent>
          </Card>
          {loading ? (
            <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 4 }}>
              Loading...
            </Typography>
          ) : (
            insights && (
              <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
                <CardHeader title={analysisType === 'fundamental' ? 'Fundamental Analysis' : 'Sentiment Analysis'} />
                <CardContent>
                  <Typography variant="body1">{analysisType === 'fundamental' ? insights.fundamental : insights.sentiment}</Typography>
                </CardContent>
              </Card>
            )
          )}
        </>
      )}
    </Container>
  );
};

export default AIInsights;
