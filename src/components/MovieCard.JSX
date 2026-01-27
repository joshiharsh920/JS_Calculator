import "../css/MovieCard.css"
function MovieCard({movie,setFavorites}){
 
    function onFavoriteClick(movieDetails){
           setFavorites(prev => {
    if (prev.some(m => m.id === movie.id)) {
      return prev; // already favorited
    }
    return [...prev, movie];
  });
    }
        
return <div className="movie-card">
<div className="movie-poster">
 <img src={movie.url || "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={movie.title || "Movie Poster"}></img>
<div className="movie-overlay">
    <button className="favorite-btn" onClick={() => onFavoriteClick(movie)}>❤️</button>
</div>
</div>
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
</div>
</div>
}

export default MovieCard;