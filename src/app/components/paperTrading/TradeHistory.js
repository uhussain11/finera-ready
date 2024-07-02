import React from 'react';

const TradeHistory = ({ trades }) => {
  return (
    <div className="overflow-auto max-h-60">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Type</th>
            <th className="py-2">Symbol</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Price</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index} className="text-center border-t">
              <td className="py-2">{trade.type}</td>
              <td className="py-2">{trade.symbol}</td>
              <td className="py-2">{trade.amount}</td>
              <td className="py-2">${trade.price}</td>
              <td className="py-2">{trade.date.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
