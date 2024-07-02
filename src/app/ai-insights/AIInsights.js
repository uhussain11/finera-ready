'use client';
import React, { useState } from 'react';
import CustomButton from '../components/common/CustomButton';
import AIInsightsResults from '../components/aiInsights/AIInsightsResults';

const AIInsights = () => {
  const [dataSymbol, setDataSymbol] = useState('');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');
  const [insights, setInsights] = useState(null);

  const runStockAnalysis = () => {
    // Mock data for stock insights
    const mockInsights = {
      sentimentScore: 0.75,
      pricePrediction: [
        { x: new Date(2023, 0, 1), y: 150 },
        { x: new Date(2023, 3, 1), y: 160 },
        { x: new Date(2023, 6, 1), y: 155 },
        { x: new Date(2023, 9, 1), y: 165 },
        { x: new Date(2023, 11, 31), y: 170 }
      ],
      keyMetrics: [
        { name: 'PE Ratio', value: 15 },
        { name: 'Market Cap', value: '1.5T' },
        { name: 'EPS', value: 5 }
      ]
    };
    setInsights(mockInsights);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Stock Insights</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            value={dataSymbol}
            onChange={(e) => setDataSymbol(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Stock Symbol"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex space-x-4">
          <CustomButton text="Get Insights" onClick={runStockAnalysis} />
        </div>
      </div>
      {insights && <AIInsightsResults insights={insights} />}
    </div>
  );
};

export default AIInsights;
