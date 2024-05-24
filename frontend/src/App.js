import NavBar from "./components/Navbar/NavBar.js"
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
