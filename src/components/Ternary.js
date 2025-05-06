import React from 'react'

const Ternary = () => {
    let name = "Bob";
    // Log something before rendering
    console.log(name === "Bob" ? "Hello Bob" : "Hello Friend");

    return (
        <div>
            {name === "Bob" ? "Hello Bob" : "Hello Friend"} 
            <div>
            <h1>Here's a random number from 0 to 10: {Math.floor(Math.random() * 10) + 1}</h1>

            </div>
        </div>
        
    )
}

export default Ternary