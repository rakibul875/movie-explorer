import React from 'react';
import { X, Star, Calendar, Film } from 'lucide-react';

const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  const { name, image, rating, premiered, summary, genres } = show;
  const year = premiered ? premiered.split('-')[0] : 'N/A';
  const ratingValue = rating?.average ? rating.average : 'N/A';
  const imageUrl = image?.original || image?.medium || 'https://via.placeholder.com/400x600?text=No+Image';

  // HTML Tag সরানোর জন্য Regex (TVMaze Summary তে HTML থাকে)
  const cleanSummary = summary
    ? summary.replace(/<[^>]*>?/gm, '')
    : 'No overview available for this show.';

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full text-white overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Backdrop এ ক্লিক করলে যেন কন্টেন্ট ক্লিকের সাথে মডাল বন্ধ না হয়ে যায়
      >
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-gray-300 rounded-full p-2 z-10 transition duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header Image */}
        <div className="h-64 sm:h-80 w-full overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-3">{name}</h2>

          {/* Rating, Year & Genres */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
            <span className="flex items-center text-yellow-400 font-semibold">
              <Star className="w-4 h-4 fill-current mr-1" /> Rating: {ratingValue}
            </span>
            <span className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-1" /> Release: {year}
            </span>
            {genres && genres.length > 0 && (
              <span className="flex items-center text-indigo-400">
                <Film className="w-4 h-4 mr-1" /> {genres.join(', ')}
              </span>
            )}
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-300 mb-2">Overview:</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {cleanSummary}
            </p>
          </div>

          {/* Bottom Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;