import React from 'react';

const PortfolioHoldings = ({ holdings }) => {
  return (
    <div className="overflow-auto max-h-60">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Symbol</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(holdings).map(([symbol, amount], index) => (
            <tr key={index} className="text-center border-t">
              <td className="py-2">{symbol}</td>
              <td className="py-2">{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioHoldings;
