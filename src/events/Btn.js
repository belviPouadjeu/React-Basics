import React from 'react'

// const Btn = () => {

//     const handleClick = () =>{
//         console.log("Clicked");
        
//     }
//     return (
//         <button onClick={handleClick}>
//             Click Me
//         </button>
//     )
// }

// export default Btn

const Btn = () => {

    const handleClick = () =>{
        console.log("On Mouse Over");
        
    }
    return (
        <button onMouseOver={handleClick}>
            Click Me
        </button>
    )
}

export default Btn