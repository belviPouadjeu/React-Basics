import React from 'react'

// Skill 1: Functional Component Creation
// Demonstrates ability to create a React functional component
const ModeToggler = () => {
    // Skill 2: State Management (basic)
    // Shows understanding of component-level state (though not using useState hook)
    let darModeOn = true;
    
    // Skill 3: Conditional Rendering Preparation
    // Demonstrates JSX variables for conditional rendering
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    // Skill 4: Event Handling
    // Shows ability to create and handle click events
    const handleClick = () => {
        // Skill 5: State Toggling
        // Demonstrates ability to toggle a boolean state
        darModeOn = !darModeOn;
        
        // Skill 6: Conditional Logic
        // Shows use of conditional statements for different outcomes
        if(darModeOn == true){
            console.log("Dark Mode is On");
        } else {
            console.log("Light Mode is On");
        }
    }

    // Skill 7: JSX Return with Conditional Rendering
    // Demonstrates ternary operator for conditional rendering in JSX
    return (
        <div>
            {/* Skill 8: Conditional Rendering in Practice */}
            {darModeOn ? darkMode : lightMode}
            
            {/* Skill 9: Event Handler Assignment */}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

// Skill 10: Component Export
// Shows understanding of module exports in React
export default ModeToggler