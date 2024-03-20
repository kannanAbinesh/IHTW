/* Plugins */
import React from "react";
import { connect } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";

/* Components */
import SideBar from "../SideBar/SideBar";

/* Actions and Helpers */

/* Images */
import logo from '../../Images/logo.png';

/* Style */
import './navBar.css';

class NavBar extends React.Component {

    constructor() {
        super();
        
    };

    handleChange = () => {
        const { openSideBar } = this.props;
        openSideBar();
    }

    render() {
        const { openLanguageModal } = this.props;
        return (
            <div className="navBar_container_main_container">
                <a href="/" className="logo_container">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
                <div className="nav_bar_container">
                    <div className="theme_main_container">
                        <MdOutlineLightMode size={30} className="theme_container" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
};

const mapState = () => ({});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(NavBar));


/*
<div className="navBar_main_container">
                    <a href="/" className="navBar_logo_container">
                        <img src={logo} alt="logo" className="navBar_logo"/>
                    </a>
                    <div className="nav_container_data">
                        {
                            navBarDetails?.map((i) => (
                                <label onClick={() => window.location.replace('/')}>{i?.name}</label>
                            ))
                        }
                    </div>
                    <div className="navBar_account_container">
                        <AiOutlineGlobal size={30} className="language_icons"/>
                        <SearchBar />
                    </div>
                    <GiHamburgerMenu size={30} className="mobileView" onClick={() => this.handleChange()}/>
                </div>
*/