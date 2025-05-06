import React from 'react'

const LoginButton = ({login}) => {
    return (
        <button onClick={login}>
            Login
        </button>
    )
}

export default LoginButton