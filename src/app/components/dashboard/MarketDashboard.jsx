import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const MarketDashboard = ({ view }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dh6nnof2d3.execute-api.us-east-1.amazonaws.com/dev/news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newsData = await response.json();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    // Call getData when the component mounts or when the view changes
    getData();
  }, [view]);

  if (loading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-black p-4">Error: {error}</div>;
  }

  return (
    <div className="market-dashboard h-[600px] overflow-y-auto p-4">
      {view === 'news' && (
        <div className="market-news mb-8">
          <div className="grid grid-cols-1 gap-4">
            {news.map((item, index) => (
              <div key={index} className="news-item p-2 border border-slate-600 bg-slate-700 rounded">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-white text-sm">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.summary}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

MarketDashboard.propTypes = {
  view: PropTypes.string.isRequired,
};

export default MarketDashboard;
