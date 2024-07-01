import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fetchNews, fetchTopGainersLosers } from './apiService';

const MarketDashboard = ({ view }) => {
  const [news, setNews] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (view === 'news') {
          const newsData = await fetchNews();
          setNews(newsData);
        } else if (view === 'gainers_losers') {
          const { gainers, losers } = await fetchTopGainersLosers();
          setGainers(gainers);
          setLosers(losers);
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
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
                  <p className="text-slate-400 text-xs">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'gainers_losers' && (
        <div className="top-gainers-losers">
          <h2 className="text-black text-lg p-4">Top Gainers</h2>
          <div className="grid grid-cols-1 gap-4">
            {gainers.map((item, index) => (
              <div key={index} className="gainer-item p-2 border border-slate-600 bg-slate-700 rounded">
                <h3 className="text-black text-sm">{item.name} ({item.ticker})</h3>
                <p className="text-slate-400 text-xs">Price: {item.price} Change: {item.change}%</p>
              </div>
            ))}
          </div>

          <h2 className="text-black text-lg p-4 mt-8">Top Losers</h2>
          <div className="grid grid-cols-1 gap-4">
            {losers.map((item, index) => (
              <div key={index} className="loser-item p-2 border border-slate-600 bg-slate-700 rounded">
                <h3 className="text-black text-sm">{item.name} ({item.ticker})</h3>
                <p className="text-slate-400 text-xs">Price: {item.price} Change: {item.change}%</p>
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
