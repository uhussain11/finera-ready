'use client';

import { useState } from 'react';
import { FiBarChart2, FiCpu, FiPieChart } from 'react-icons/fi';
import ShiftingDropDown from '../components/dashboard/ShiftingDropDown';
import PortfolioGrowthChart from '../components/dashboard/PortfolioGrowthChart';
import TradingViewWidget from '../components/dashboard/TradingViewWidget';
import MarketDashboard from '../components/dashboard/MarketDashboard';
import StaggeredDropDown from '../components/dashboard/StaggeredDropDown';
import Card from '../components/dashboard/Card';

const DashboardPage = () => {
  const [isPortfolioView, setIsPortfolioView] = useState(false);
  const [view, setView] = useState('news');

  const handleToggleView = () => {
    setIsPortfolioView(!isPortfolioView);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-t from-gray-50 via-gray-100 to-white font-sans">
      <div className="w-full flex justify-center -mb-1">
        <ShiftingDropDown setView={setView} />
      </div>
      <div className="w-full flex flex-col items-center mt-2">
        <h1 className="text-3xl text-black">Ecommerce Dashboard</h1>
        <p className="text-sm text-gray-700">Here&apos;s what&apos;s going on at your business right now</p>
      </div>
      <div className="flex-1 w-full max-w-8xl p-1 px-12 relative mt-20">
        <div className="flex justify-end mb-4">
          <a
            href="#_"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
            onClick={handleToggleView}
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
              {isPortfolioView ? 'View Charts' : 'View Portfolio'}
            </span>
          </a>
        </div>
        <div className="m-4 rounded-xl bg-white text-gray-700 shadow-lg p-3">
          <p className="text-gray-700 text-center mb-4">
            {isPortfolioView ? 'View any chart you desire. Choose from the wide variety of indicators available through TradingView' : 'Analyze your portfolio growth and trends over time.'}
          </p>
          {isPortfolioView ? (
            <div className="h-[450px] relative">
              <TradingViewWidget />
            </div>
          ) : (
            <div className="h-[450px]">
              <PortfolioGrowthChart />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card
            icon={<FiCpu className="w-8 h-8 text-white" />}
            title="AI Insights"
            amount="+5.8%"
            percentage="+5.8"
            description="than last week"
            color="from-blue-600 to-blue-400"
            className="h-[350px]"
          />
          <Card
            icon={<FiBarChart2 className="w-8 h-8 text-white" />}
            title="Backtesting"
            amount="+3.2%"
            percentage="+3.2"
            description="than last month"
            color="from-pink-600 to-pink-400"
            className="h-[350px]"
          />
          <Card
            icon={<FiPieChart className="w-8 h-8 text-white" />}
            title="Paper Trading"
            amount="+2.4%"
            percentage="+2.4"
            description="than yesterday"
            color="from-green-600 to-green-400"
            className="h-[350px]"
          />
        </div>
        <div className="h-[600px] m-4 rounded-xl bg-white text-gray-700 shadow-lg p-6 mt-8 overflow-y-auto">
          <div className="flex justify-center">
            <StaggeredDropDown setView={setView} />
          </div>
          <MarketDashboard view={view} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
