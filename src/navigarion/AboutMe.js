import React from 'react'
import Day from './Day'

const ba = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center'
};

const AboutMe = () => {
    return (
        <div style={ba}>
            <h1>About Me</h1>
            <Day />
        </div>
    )
}

export default AboutMe