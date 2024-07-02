import React from 'react';

const StrategyInput = ({ strategyCode, setStrategyCode, runBacktest }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Strategy Code</h2>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        rows="10"
        value={strategyCode}
        onChange={(e) => setStrategyCode(e.target.value)}
        placeholder="Paste your strategy code here..."
      ></textarea>
    </div>
  );
};

export default StrategyInput;
