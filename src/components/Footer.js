import React from "react";


const Footer = ({ children }) => {
    return (
        <div className="footer">
		    <p>{ children}</p>
	    </div>
    );
}

export default Footer;