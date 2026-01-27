import './css/App.css';
import Favorites from './Pages/Favorites';
import Home from "./Pages/Home"
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
function App() {
 const [favorites, setFavorites] = useState([]);

  return (
    <div className='app-background'>
      <NavBar/>
   <main className='main-content'>
    <Routes>
      <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}/>}></Route>
      <Route path="/favorites" element={<Favorites favorites={favorites}/>} ></Route>
    </Routes>
   </main>
   </div>
  );
}

export default App;
