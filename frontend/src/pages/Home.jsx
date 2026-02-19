import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchquery] = useState("");

  const movies = [
    { id: 1, title: "Jjk", release_date: 2016 },
    { id: 2, title: "Demon slayer", release_date: 2018 },
    { id: 3, title: "Ne Zha", release_date: 2020 },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchquery("????");
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
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
