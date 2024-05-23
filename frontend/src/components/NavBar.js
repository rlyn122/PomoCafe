import React, { useState, useEffect } from 'react';
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import SignUp from '../pages/SignUp.js'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function NavBar() {

    const [isLoggedIn, setLoggedIn] = useState(False);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {isLoggedIn == true ? <Logout /> : ''}

            </Routes>
        </ BrowserRouter>
    );
}
export default NavBar;