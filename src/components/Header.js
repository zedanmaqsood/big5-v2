import React from "react";

const Header = ({ step }) => {
    return (
        <div className='header grouping'>
            <h1 className="hero-text">

                { step===0 ? "Take the Test now." 
                    : step===1 ? "Test completed!" 
                        : step===2 && "Result."
                    }

                </h1>
        </div>
    );
}

export default Header;