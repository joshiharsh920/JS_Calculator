import './css/App.css';
import Favorites from './Pages/Favorites';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyAccount from './Pages/MyAccount';
import Signup from './Pages/SignUp';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
function App() {
 const [favorites, setFavorites] = useState([]);
 const [user, setUser] = useState(null);
 const [page, setPage] = useState("login")


  return (
    <div className='app-background'>
      <NavBar user={user} setPage={setPage} setUser={setUser}/>
   <main className='main-content'>
    <Routes>
      <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}/>}></Route>
      <Route path="/favorites" element={<Favorites favorites={favorites}/>} ></Route>
      <Route path="/account" element={page === "account" && <MyAccount setUser={setUser} />} ></Route>
      <Route path="/login" element={page === "login" && <Login setUser={setUser} />} ></Route>
      <Route path="/signup" element={page === "signup" && <Signup setUser={setUser} />}></Route>
    </Routes>
   </main>
   </div>
  );
}

export default App;
