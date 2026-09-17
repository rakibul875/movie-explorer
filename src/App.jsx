import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'movies'
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  // Initial Data Fetch (All Shows)
  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      setShows(data.slice(0, 20)); // Limit to initial 20 items
    } catch (error) {
      console.error('Error fetching shows:', error);
    } finally {
      setLoading(false);
    }
  };

  // Search API Call
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      fetchShows();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      // TVMaze search response map
      setShows(data.map(item => item.show));
    } catch (error) {
      console.error('Error searching shows:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between font-sans">
      <div>
        {/* Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Section Routing */}
        {activeTab === 'home' ? (
          <div>
            <Hero onExploreClick={() => setActiveTab('movies')} />
          </div>
        ) : (
          <main className="max-w-7xl mx-auto px-4 py-8">
            {/* Search Bar */}
            <div className="mb-8 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="🔍 Search for a movie..."
                  className="w-full bg-slate-800 text-white placeholder-gray-400 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                />
              </div>
            </div>

            {/* Movies Grid / Loader */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : shows.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shows.map((show) => (
                  <MovieCard
                    key={show.id}
                    show={show}
                    onSeeDetails={(selected) => setSelectedShow(selected)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 py-20 text-lg">
                No movies found. Try searching for something else!
              </p>
            )}
          </main>
        )}
      </div>

      {/* Details Modal */}
      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;