import React from 'react';

const Hero = ({ onExploreClick }) => {
  return (
    <div className="relative bg-slate-900 text-white py-24 px-6 text-center overflow-hidden">
      {/* Background Gradient / Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-slate-900/80 to-purple-900/50 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          DISCOVER MOVIES
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the world with real-time updates and full details.
        </p>
        <button
          onClick={onExploreClick}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/50 transition duration-300 transform hover:-translate-y-1"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;