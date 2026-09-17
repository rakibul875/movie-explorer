import React from 'react';
import { Film } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white px-6 py-4 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Film className="w-8 h-8 text-indigo-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            MovieExplorer
          </span>
        </div>

        
        <button
          onClick={() => setActiveTab(activeTab === 'home' ? 'movies' : 'home')}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-semibold transition duration-300"
        >
          {activeTab === 'home' ? 'Movies' : 'Home'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;