import React from "react";


const NavButtonsDiv = ({ theWatcher }) => {
    return (
        <div className="flex justify-between">
            {/* <div className="flex pa3 mr2">
                <button type="button">Previous</button>
            </div> */}
            <div className="flex pa3 mr2">
                <button 
                    type="submit" 
                    value="submit"
                    onClick={theWatcher}
                    >Submit</button>
            </div>
		</div>
    );
}

export default NavButtonsDiv;