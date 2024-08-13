'use client';
import { useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/backtesting/CodeEditor';
import BacktestChart from '../components/backtesting/BacktestChart';
import CustomButton from '../components/common/CustomButton';

const Backtesting = () => {
    const [ticker, setTicker] = useState('GOOG');
    const [startDate, setStartDate] = useState('2019-01-01');
    const [endDate, setEndDate] = useState('2020-05-01');
    const [capital, setCapital] = useState(10000);
    const [strategyCode, setStrategyCode] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const runBacktest = async () => {
        setLoading(true);
        setError('');
        try {
            const fetchDataResponse = await axios.post('https://spe2442ewf.execute-api.us-east-1.amazonaws.com/prod/fetch_data', {
                ticker: ticker,
                period: `${startDate}:${endDate}`
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Data fetched:', fetchDataResponse.data);

            const cacheKey = fetchDataResponse.data.cache_key;

            const runBacktestResponse = await axios.post('https://spe2442ewf.execute-api.us-east-1.amazonaws.com/prod/run_backtest', {
                strategy_code: strategyCode,
                ticker: ticker,
                period: `${startDate}:${endDate}`,
                capital: capital,
                cache_key: cacheKey
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Backtest run:', runBacktestResponse.data);

            const storeResultsResponse = await axios.post('https://spe2442ewf.execute-api.us-east-1.amazonaws.com/prod/store_results', {
                ticker: ticker,
                period: `${startDate}:${endDate}`,
                capital: capital,
                results: runBacktestResponse.data.results
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Results stored:', storeResultsResponse.data);

            const displayResultsResponse = await axios.post('https://spe2442ewf.execute-api.us-east-1.amazonaws.com/prod/display_results', {
                ticker: ticker,
                period: `${startDate}:${endDate}`
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Results displayed:', displayResultsResponse.data);

            const parsedResults = JSON.parse(displayResultsResponse.data.Results);

            setResults({
                returns: parsedResults.returns,
                beta: parsedResults.beta,
                sharpe: parsedResults.sharpe,
                drawdown: parsedResults.drawdown,
                portfolioValue: parsedResults.portfolioValue,
                benchmark: parsedResults.benchmark
            });

        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 font-sans">
            <div className="flex space-x-6">
                <div className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col" style={{ height: '500px' }}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Strategy Code</h2>
                    <div className="flex-1 overflow-hidden">
                        <CodeEditor value={strategyCode} onChange={setStrategyCode} />
                    </div>
                </div>
                <div className="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col" style={{ height: '500px' }}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Backtesting Parameters</h2>

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticker">
                        Ticker
                    </label>
                    <input
                        type="text"
                        id="ticker"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capital">
                        Capital
                    </label>
                    <input
                        type="number"
                        id="capital"
                        value={capital}
                        onChange={(e) => setCapital(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />

                    <CustomButton text="Run Backtest" onClick={runBacktest} />
                </div>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}

            {results && (
                <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div className="flex justify-between mb-6">
                        <CustomButton text="Save Strategy" onClick={() => { /* Add your save strategy logic here */ }} />
                        <CustomButton text="New Backtest" onClick={() => { setResults(null); }} />
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>Returns: {results.returns}</div>
                        <div>Beta: {results.beta}</div>
                        <div>Sharpe Ratio: {results.sharpe}</div>
                        <div>Drawdown: {results.drawdown}</div>
                    </div>

                    <div className="mb-6">
                        <BacktestChart portfolioData={results.portfolioValue} benchmarkData={results.benchmark} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Backtesting;
