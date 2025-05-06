import React from 'react';

const Bag = ({ children }) => {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    };
    

    return <div style={bag}>{children}</div>;
};

export default Bag;
