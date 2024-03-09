/* Plugins */
import React from "react";

/* Components */
import SearchBar from "../SearchBar/SearchBar";

/* Images */
import logo from '../../Images/logo.png';

/* Style */
import './navBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar-container">
                <img src={logo} className="logo" alt="logo" />
                <SearchBar />
                <div></div>
            </div>
        )
    }
}

export default NavBar;