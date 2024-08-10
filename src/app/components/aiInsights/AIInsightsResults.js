import AIInsightsChart from './AIInsightsChart';

const AIInsightsResults = ({ insights }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI-Generated Insights</h2>
      <div className="mb-4">
        <p className="text-lg">Sentiment Score: <span className="font-bold">{insights.sentimentScore}</span></p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Price Prediction</h3>
        <AIInsightsChart pricePrediction={insights.pricePrediction} />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Key Metrics</h3>
        <ul>
          {insights.keyMetrics.map((metric, index) => (
            <li key={index} className="mb-1">{metric.name}: <span className="font-bold">{metric.value}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIInsightsResults;
