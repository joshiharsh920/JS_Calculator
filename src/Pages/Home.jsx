import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

const sampleMovies = [
  {
    "id": 1,
    "title": "Inception",
    "release_date": "2010-07-16"
  },
  {
    "id": 2,
    "title": "Interstellar",
    "release_date": "2014-11-07"
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "release_date": "2008-07-18"
  },
  {
    "id": 4,
    "title": "Dune",
    "release_date": "2021-10-22"
  },
  {
    "id": 5,
    "title": "Avatar: The Way of Water",
    "release_date": "2022-12-16"
  }
];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        var popularMovies = await getPopularMovies();
        if(popularMovies.length===0){
             popularMovies = sampleMovies;
        }
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

     const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };


    return <div className="home">
        <div className="home">
       <form onSubmit={handleSearch} className="search-form">
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder="Search for movies..." className="search-input"></input>
        <button type="submit" className="search-button">Search</button>
       </form>
        </div>
        <div className="movies-grid">
            {movies.map((movie)=>(movie.title.toLowerCase().startsWith(searchQuery)) && <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home;