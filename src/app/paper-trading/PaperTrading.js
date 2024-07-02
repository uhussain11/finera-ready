'use client';
import React, { useState } from 'react';
import CustomButton from '../components/common/CustomButton';
import PaperTradingChart from '../components/paperTrading/PaperTradingChart';
import TradeHistory from '../components/paperTrading/TradeHistory';
import PortfolioHoldings from '../components/paperTrading/PortfolioHoldings';

const PaperTrading = () => {
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [tradeAmount, setTradeAmount] = useState(10);
  const [initialCapital, setInitialCapital] = useState(10000);
  const [strategyCode, setStrategyCode] = useState('');
  const [results, setResults] = useState(null);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [portfolioHoldings, setPortfolioHoldings] = useState({});
  const [portfolioValue, setPortfolioValue] = useState(initialCapital);

  const runPaperTrading = () => {
    // Mock data for results
    const mockResults = {
      returns: '15.34%',
      alpha: '0.45',
      beta: '1.12',
      sharpe: '1.02',
      drawdown: '-12.30%',
      portfolioValue: [
        { x: new Date(2023, 0, 1), y: 10000 },
        { x: new Date(2023, 3, 1), y: 11000 },
        { x: new Date(2023, 6, 1), y: 10500 },
        { x: new Date(2023, 9, 1), y: 11500 },
        { x: new Date(2023, 11, 31), y: 12000 }
      ]
    };
    setResults(mockResults);
  };

  const handleBuy = () => {
    const price = 150; // Mock price
    const cost = tradeAmount * price;
    if (portfolioValue >= cost) {
      setPortfolioValue(portfolioValue - cost);
      setTradeHistory([...tradeHistory, { type: 'buy', symbol: stockSymbol, amount: tradeAmount, price, date: new Date() }]);
      setPortfolioHoldings({
        ...portfolioHoldings,
        [stockSymbol]: (portfolioHoldings[stockSymbol] || 0) + tradeAmount
      });
    }
  };

  const handleSell = () => {
    const price = 150; // Mock price
    const holdings = portfolioHoldings[stockSymbol] || 0;
    if (holdings >= tradeAmount) {
      setPortfolioValue(portfolioValue + (tradeAmount * price));
      setTradeHistory([...tradeHistory, { type: 'sell', symbol: stockSymbol, amount: tradeAmount, price, date: new Date() }]);
      setPortfolioHoldings({
        ...portfolioHoldings,
        [stockSymbol]: holdings - tradeAmount
      });
    }
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
          <CustomButton text="Run Custom Strategy" onClick={runPaperTrading} />
        </div>
        <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Paper Trading Parameters</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockSymbol">
            Stock Symbol
          </label>
          <input
            type="text"
            id="stockSymbol"
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tradeAmount">
            Trade Amount
          </label>
          <input
            type="number"
            id="tradeAmount"
            value={tradeAmount}
            onChange={(e) => setTradeAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="initialCapital">
            Initial Capital
          </label>
          <input
            type="number"
            id="initialCapital"
            value={initialCapital}
            onChange={(e) => setInitialCapital(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <div className="flex space-x-4">
            <CustomButton text="Buy" onClick={handleBuy} />
            <CustomButton text="Sell" onClick={handleSell} />
          </div>
        </div>
      </div>

      {results && (
        <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>Returns: {results.returns}</div>
            <div>Alpha: {results.alpha}</div>
            <div>Beta: {results.beta}</div>
            <div>Sharpe Ratio: {results.sharpe}</div>
            <div>Drawdown: {results.drawdown}</div>
          </div>

          <div className="mb-6">
            <PaperTradingChart portfolioData={results.portfolioValue} />
          </div>
        </div>
      )}

      <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Trade History</h2>
        <TradeHistory trades={tradeHistory} />
      </div>

      <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Portfolio Holdings</h2>
        <PortfolioHoldings holdings={portfolioHoldings} />
      </div>
    </div>
  );
};

export default PaperTrading;
