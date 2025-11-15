import './App.css';
import MovieCard from "./components/MovieCard.jsx"

function App() {


  return (
    <>
    <MovieCard movie={{title:"Tim's Film",release_date:"2027"}}/>
     <MovieCard movie={{title:"Mandar's Film",release_date:"2089"}}/>
    </>
  );
}

export default App;
