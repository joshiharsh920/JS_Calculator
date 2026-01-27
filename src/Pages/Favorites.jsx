import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";

function Favorites({ favorites }) {
  return (
    <div className="favorites-grid">
      {favorites.length > 0 ? (
        favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        emptyFav()
      )}
    </div>
  );
}

function emptyFav() {
  return (
    <div className="favorite-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
