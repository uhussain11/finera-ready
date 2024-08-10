'use client';

import { useState } from 'react';
import { FiBarChart2, FiCpu, FiPieChart } from 'react-icons/fi';
import ShiftingDropDown from '../components/dashboard/ShiftingDropDown';
import TradingViewWidget from '../components/dashboard/TradingViewWidget';
import MarketDashboard from '../components/dashboard/MarketDashboard';
import Card from '../components/dashboard/Card';

const DashboardPage = () => {
  const [view, setView] = useState('news');

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
        <div className="m-4 rounded-xl bg-white text-gray-700 shadow-lg p-3">
          <div className="h-[450px] relative">
            <TradingViewWidget />
          </div>
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
          <Card
            icon={<FiPieChart className="w-8 h-8 text-white" />}
            title="Paper Trading"
            amount="+2.4%"
            percentage="+2.4"
            description="than yesterday"
            color="from-green-600 to-green-400"
            className="h-[350px]"
            link="/paper-trading"
          />
        </div>
        <div className="h-[600px] m-4 rounded-xl bg-white text-gray-700 shadow-lg p-6 mt-8 overflow-y-auto">
          <MarketDashboard view={view} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
