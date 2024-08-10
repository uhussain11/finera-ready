const API_BASE_URL = 'https://61hjf7zb52.execute-api.us-east-1.amazonaws.com/dev'; // Replace with your API Gateway endpoint

export const fetchNews = async () => {
  const response = await fetch(`${API_BASE_URL}/market-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: 'get_news' })
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data || [];
};
