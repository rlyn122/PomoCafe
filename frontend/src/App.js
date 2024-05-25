import NavBar from "./components/Navbar/NavBar.js"
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'
import { useEffect, useState } from 'react'



function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
