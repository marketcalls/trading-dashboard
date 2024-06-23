import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Menu, TrendingUp, TrendingDown } from 'lucide-react';

const data = [
  { time: '19:00', value: 5458 },
  { time: '20:00', value: 5462 },
  { time: '21:00', value: 5470 },
  { time: '22:00', value: 5460 },
  { time: '23:00', value: 5468 },
];

const indices = [
  { name: 'S&P 500', value: 5464.61, change: -0.16, color: 'red', flag: '🇺🇸' },
  { name: 'Nasdaq 100', value: 19700.43, change: -0.26, color: 'red', flag: '🇺🇸' },
  { name: 'Dow 30', value: 39150.34, change: 0.04, color: 'green', flag: '🇺🇸' },
  { name: 'Nikkei 225', value: 38596.40, change: -0.09, color: 'red', flag: '🇯🇵' },
];

const watchlistItems = [
  { symbol: 'NIFTY', price: 23467, change: -0.53, color: 'red' },
  { symbol: 'BANKNIFTY', price: 51613.35, change: -0.27, color: 'red' },
  { symbol: 'SPX', price: 5464.61, change: -0.16, color: 'red' },
  { symbol: 'BTCUSD', price: 64444, change: 0.33, color: 'green' },
  { symbol: 'VIX', price: 13.2, change: -0.6, color: 'red' },
  { symbol: 'XAUUSD', price: 2321.875, change: -1.62, color: 'red' },
  { symbol: 'WTICOUS', price: 80.952, change: -0.83, color: 'red' },
  { symbol: 'USDJPY', price: 159.76, change: 0.54, color: 'green' },
];

const TradingDashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="text-2xl font-bold text-blue-500">TY</span>
          <nav className="hidden md:flex space-x-6">
            {['Products', 'Community', 'Markets', 'News', 'Brokers'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">{item}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-full py-2 px-4 pl-10 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <button className="bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors duration-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
      
      <main className="flex-grow p-6 overflow-hidden flex">
        <div className="flex-grow mr-4">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Market Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {indices.map((index) => (
              <div key={index.name} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400 flex items-center">
                    <span className="mr-2 text-lg">{index.flag}</span>
                    {index.name}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${index.color === 'green' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                    {index.change > 0 ? '+' : ''}{index.change}%
                  </span>
                </div>
                <div className="text-2xl font-bold">{index.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-64 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="time" stroke="#6B7280" />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <aside className="w-64 bg-gray-800 p-4 rounded-lg overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Watchlist</h3>
          <ul className="space-y-2">
            {watchlistItems.map((item) => (
              <li key={item.symbol} className="flex justify-between items-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                <div>
                  <span className="font-medium">{item.symbol}</span>
                  <span className="block text-sm text-gray-400">{item.price.toLocaleString()}</span>
                </div>
                <div className={`flex items-center ${item.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                  {item.color === 'green' ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                  <span>{item.change > 0 ? '+' : ''}{item.change}%</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default TradingDashboard;