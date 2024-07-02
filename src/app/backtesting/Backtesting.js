'use client';
import React, { useState } from 'react';
import BacktestChart from '../components/backtesting/BacktestChart';
import CustomButton from '../components/common/CustomButton';

const Backtesting = () => {
  const [dataset, setDataset] = useState('NYSE Daily');
  const [startDate, setStartDate] = useState('2019-01-01');
  const [endDate, setEndDate] = useState('2020-05-01');
  const [capital, setCapital] = useState(10000);
  const [strategyCode, setStrategyCode] = useState('');
  const [results, setResults] = useState(null);

  const runBacktest = () => {
    // Mock data for results
    const mockResults = {
      returns: '12.94%',
      alpha: '-0.00',
      beta: '0.78',
      sharpe: '0.52',
      drawdown: '-28.55%',
      portfolioValue: [
        { x: new Date(2019, 0, 1), y: 10000 },
        { x: new Date(2019, 4, 1), y: 10500 },
        { x: new Date(2019, 8, 1), y: 11000 },
        { x: new Date(2020, 0, 1), y: 9500 },
        { x: new Date(2020, 4, 1), y: 13000 }
      ],
      benchmark: [
        { x: new Date(2019, 0, 1), y: 10000 },
        { x: new Date(2019, 4, 1), y: 10300 },
        { x: new Date(2019, 8, 1), y: 10800 },
        { x: new Date(2020, 0, 1), y: 10000 },
        { x: new Date(2020, 4, 1), y: 12500 }
      ]
    };
    setResults(mockResults);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <div className="flex space-x-6">
        <div className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Strategy Code</h2>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            rows="10"
            value={strategyCode}
            onChange={(e) => setStrategyCode(e.target.value)}
            placeholder="Paste your strategy code here..."
          ></textarea>
        </div>
        <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Backtesting Parameters</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataset">
            Dataset
          </label>
          <select
            id="dataset"
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          >
            <option value="NYSE Daily">NYSE Daily</option>
            <option value="NASDAQ Daily">NASDAQ Daily</option>
          </select>

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capital">
            Capital
          </label>
          <input
            type="number"
            id="capital"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <CustomButton text="Run Backtest" onClick={runBacktest} />
        </div>
      </div>

      {results && (
        <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="flex justify-between mb-6">
            <CustomButton text="Save Strategy" onClick={() => { /* Add your save strategy logic here */ }} />
            <CustomButton text="New Backtest" onClick={() => { /* Add your new backtest logic here */ }} />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>Returns: {results.returns}</div>
            <div>Alpha: {results.alpha}</div>
            <div>Beta: {results.beta}</div>
            <div>Sharpe Ratio: {results.sharpe}</div>
            <div>Drawdown: {results.drawdown}</div>
          </div>

          <div className="mb-6">
            <BacktestChart portfolioData={results.portfolioValue} benchmarkData={results.benchmark} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Backtesting;
