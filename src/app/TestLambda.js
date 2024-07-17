const axios = require('axios');

const testLambdaFunction = async () => {
  const endpoint = 'https://4klc5v1sxg.execute-api.us-east-1.amazonaws.com/dev/fetchData'; // Corrected endpoint

  const payload = {
    strategy_code: `
from backtesting import Strategy
from backtesting.lib import crossover
from backtesting.test import SMA

class UserStrategy(Strategy):
    short_window = 10
    long_window = 20

    def init(self):
        self.short_sma = self.I(SMA, self.data.Close, self.short_window)
        self.long_sma = self.I(SMA, self.data.Close, self.long_window)

    def next(self):
        if crossover(self.short_sma, self.long_sma):
            self.buy()
        elif crossover(self.long_sma, self.short_sma):
            self.sell()
    `,
    ticker: 'GOOG',
    period: '2019-01-01:2020-05-01',
    capital: 10000
  };

  try {
    const response = await axios.post(endpoint, payload);
    console.log('Lambda function response:', response.data);
  } catch (error) {
    console.error('Error invoking Lambda function:', error);
  }
};

// Call the test function when the file is executed
testLambdaFunction();
