import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg"

// c1a55a56
// http://www.omdbapi.com/?i=tt3896198&apikey=c1a55a56
const apiurl="https://www.omdbapi.com/?i=tt3896198&apikey=c1a55a56"
// console.log(process.env.API_URL2);
function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${apiurl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Naruto");
  }, []);


  return (
    <>
      <div className="app">
        <h1>Searchify</h1>

        <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
          {/* <i className="bi bi-search"  onClick={() => searchMovies(serachTerm)}></i> */}
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
              

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  );
}

export default App;
