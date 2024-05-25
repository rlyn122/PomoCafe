import React, { useState } from 'react'

function Login(props) {

    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [emailError, setEmailError] = useState(' ')
    const [passError, setPassError] = useState(' ')

    const onButtonClick = {}

    return (
        <>
            <div>Login</div>
            <br />
            <div className='inputContainer'>
                <input value={email} placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} />
                <label>{emailError}</label>
            </div>
            <br />
            <div className='inputContainer'>
                <input value={password} placeholder="Password" onChange={(ev) => setPassword(ev.target.value)} />
                <label>{passError}</label>
            </div>
            <input type="button" value="Log In" onClick={onButtonClick} />
        </>
    );

} export default Login;