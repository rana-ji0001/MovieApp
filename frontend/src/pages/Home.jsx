import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: 2016 },
    { id: 2, title: "John Wick 2", release_date: 2018 },
    { id: 3, title: "John Wick 3", release_date: 2020 },
  ];
  const handleSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search_bar">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search_input"
        />
        <button type="submit" className="search_button">
          &#128269;
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
