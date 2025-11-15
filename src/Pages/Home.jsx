import MovieCard from "../components/MovieCard"

function Home() {
    const movies=[
        {id: 1, title: "John Wick",release_date: "2020"},
        {id: 2, title: "Interstellar",release_date: "2010"},
        {id: 3, title: "Mandolarian",release_date: "2050"},
        {id: 4, title: "Star Wars",release_date: "2030"},
    ]
    return <div className="home">
        <div className="moves-grid">
            {movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home;