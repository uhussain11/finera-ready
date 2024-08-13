import PropTypes from 'prop-types';

const AIInsightsResults = ({ insights }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Earnings Call Insights</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Earnings Summary</h3>
        <p className="text-lg">{insights.summary}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Key Financial Figures</h3>
        <ul>
          {insights.financialFigures.map((figure, index) => (
            <li key={index} className="mb-1">{figure.name}: <span className="font-bold">{figure.value}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Add PropTypes validation here
AIInsightsResults.propTypes = {
  insights: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    financialFigures: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default AIInsightsResults;
