import React from 'react';
import { Star, Calendar } from 'lucide-react';

const MovieCard = ({ show, onSeeDetails }) => {
  const { name, image, rating, premiered } = show;
  const year = premiered ? premiered.split('-')[0] : 'N/A';
  const ratingValue = rating?.average ? rating.average : 'N/A';
  const imageUrl = image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition duration-300 flex flex-col h-full">
      <div className="h-72 overflow-hidden bg-slate-900">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{name}</h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current mr-1" />
              {ratingValue}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {year}
            </span>
          </div>
        </div>

        <button
          onClick={() => onSeeDetails(show)}
          className="w-full bg-slate-700 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;