import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchquery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovie = await getPopularMovies();
        setMovies(popularMovie);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovie();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch the movie...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search_bar">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search_input"
          value={searchQuery}
          onChange={(e) => setSearchquery(e.target.value)}
        />
        <button type="submit" className="search_button">
          &#128269;
        </button>
      </form>
      {error && <div className="error-message">{Error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              ),
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
