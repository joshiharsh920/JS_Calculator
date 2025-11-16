import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {
const [searchQuery, setSearchQuery]=useState("");

    const movies=[
        {id: 1, title: "John Wick",release_date: "2020"},
        {id: 2, title: "Interstellar",release_date: "2010"},
        {id: 3, title: "Mandolarian",release_date: "2050"},
        {id: 4, title: "Star Wars",release_date: "2030"},
    ]

    const handleSearch=(e)=>{
    e.preventDefault();
      alert(searchQuery);
      setSearchQuery("---");
    }

    return <div className="home">
        <div className="home">
       <form onSubmit={handleSearch} className="search-form">
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder="Search for movies..." className="search-input"></input>
        <button type="submit" className="search-button">Search</button>
       </form>
        </div>
        <div className="moves-grid">
            {movies.map((movie)=>movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home;