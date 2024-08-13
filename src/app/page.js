'use client';

import { useState } from 'react';
import { FiCpu, FiBarChart2 } from 'react-icons/fi'; 
// Removed the unused Header import
import ShuffleHero from './components/dashboard/ShuffleHero';
import Card from './components/dashboard/Card';
import MarketDashboard from './components/dashboard/MarketDashboard';
import ShiftingDropDown from './components/dashboard/ShiftingDropDown';
import TradingViewWidget from './components/dashboard/TradingViewWidget';

const Home = () => {
    const [view, setView] = useState('news');

    return (
        <div>
            {/* Hero Section */}
            <ShuffleHero shuffleInterval={3000} />

            {/* Main Dashboard Content */}
            <section className="dashboard-content">
                {/* Shifting Drop Down */}
                <div className="w-full flex justify-center -mb-1">
                    <ShiftingDropDown setView={setView} />
                </div>
                
                {/* Dashboard Header */}
                <div className="w-full flex flex-col items-center mt-2">
                    <h1 className="text-3xl text-black">Ecommerce Dashboard</h1>
                    <p className="text-sm text-gray-700">
                        Here&#39;s what&#39;s going on at your business right now
                    </p>
                </div>

                {/* TradingView Widget */}
                <div className="flex-1 w-full max-w-8xl p-1 px-12 relative mt-20">
                    <div className="m-4 rounded-xl bg-white text-gray-700 shadow-lg p-3">
                        <div className="h-[450px] relative">
                            <TradingViewWidget />
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <Card
                            icon={<FiCpu className="w-8 h-8 text-white" />}
                            title="AI Insights"
                            amount="+5.8%"
                            percentage="+5.8"
                            description="than last week"
                            color="from-blue-600 to-blue-400"
                            className="h-[350px]"
                            link="/ai-insights"
                        />
                        <Card
                            icon={<FiBarChart2 className="w-8 h-8 text-white" />}
                            title="Backtesting"
                            amount="+3.2%"
                            percentage="+3.2"
                            description="than last month"
                            color="from-pink-600 to-pink-400"
                            className="h-[350px]"
                            link="/backtesting"
                        />
                    </div>

                    {/* Market Dashboard */}
                    <div className="h-[600px] m-4 rounded-xl bg-white text-gray-700 shadow-lg p-6 mt-8 overflow-y-auto">
                        <MarketDashboard view={view} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
