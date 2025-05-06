import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);
    return (
        <>
            {loggedIn ? (
                <div>
                    <Welcome />
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                
                <LoginButton login={login} /> 
            )}
        </>
    )
}

export default Login