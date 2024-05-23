import React, { useState, useEffect } from 'react';
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import SignUp from '../pages/SignUp.js'


function NavBar() {

    const [isLoggedIn, setLoggedIn] = useState(False);

    return (
        <>
            <div>
                <Home />
            </div>
            <div>
                <Login />
            </div>
            <div>
                <SignUp />
            </div>
            <div>
                {isLoggedIn == true ? <Logout /> : ''}
            </div>
        </>
    );
}
export default NavBar;