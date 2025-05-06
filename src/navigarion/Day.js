import React from 'react'

const Day = () => {
    // Get the current date and time
    const time = new Date();
    
    // Extract the current day of the week
    const day = time.toLocaleString("en-us", { weekday: "long"});
    
    // Check if the current time falls within morning hours (6 AM - 12 PM)
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    
    // Variable to store the message based on the day of the week
    let dayMessage;

    // Determine the appropriate message for the day
    if(day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    } else if(day.toLowerCase() === "tuesday") {
        dayMessage = `${day}, four days to go`;
    } else if(day.toLowerCase() === "wednesday") {
        dayMessage = `${day}, half way there`;
    } else if(day.toLowerCase() === "thursday") {
        dayMessage = `${day}, start planning the weekend`;
    } else if(day.toLowerCase() === "friday") {
        dayMessage = `Woo-hoo, the weekend is coming!`;
    } else {
        dayMessage = "Stay calm and keep having fun";
    }

    return (
        <div className='day'>
            {/* Display the day-related message */}
            <h1>
                {dayMessage}
            </h1>
            
            {/* Display a breakfast reminder if it's morning */}
            {morning ? <h2>Have you had breakfast yet?</h2> : ' '}
        </div>
    )
}

export default Day
