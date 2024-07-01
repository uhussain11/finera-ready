const API_KEY = '16BY224VYA40QNG9'; // Replace with your actual API key
const NEWS_CACHE_KEY = 'news_cache';
const NEWS_CACHE_TTL = 7200000; // Cache for 1 hour (in milliseconds)

export const fetchNews = async () => {
  const cachedData = localStorage.getItem(NEWS_CACHE_KEY);
  const cacheTime = localStorage.getItem(`${NEWS_CACHE_KEY}_time`);
  const now = new Date().getTime();

  if (cachedData && cacheTime && now - cacheTime < NEWS_CACHE_TTL) {
    return JSON.parse(cachedData);
  }

  const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(data.articles));
  localStorage.setItem(`${NEWS_CACHE_KEY}_time`, now);

  return data.articles || [];
};

export const fetchTopGainersLosers = async () => {
  const GAINERS_CACHE_KEY = 'gainers_cache';
  const LOSERS_CACHE_KEY = 'losers_cache';
  const cacheTime = localStorage.getItem(`${GAINERS_CACHE_KEY}_time`);
  const now = new Date().getTime();

  if (localStorage.getItem(GAINERS_CACHE_KEY) && localStorage.getItem(LOSERS_CACHE_KEY) && now - cacheTime < NEWS_CACHE_TTL) {
    return {
      gainers: JSON.parse(localStorage.getItem(GAINERS_CACHE_KEY)),
      losers: JSON.parse(localStorage.getItem(LOSERS_CACHE_KEY)),
    };
  }

  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  localStorage.setItem(GAINERS_CACHE_KEY, JSON.stringify(data.gainers || []));
  localStorage.setItem(LOSERS_CACHE_KEY, JSON.stringify(data.losers || []));
  localStorage.setItem(`${GAINERS_CACHE_KEY}_time`, now);

  return {
    gainers: data.gainers || [],
    losers: data.losers || [],
  };
};