/* Plugins */
import React from "react";
import { connect } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";

/* Components */
import SideBar from "../SideBar/SideBar";

/* Actions and Helpers */
import { openSideBar } from "../../Actions/SideBarAction";

/* Images */
import logo from '../../Images/logo.png';

/* Style */
import './navBar.css';

class NavBar extends React.Component {

    constructor() {
        super();
        
    };

    render() {
        const { openSideBar } = this.props;
        return (
            <div>
                <SideBar />
                <div className="navBar_container_main_container">
                    <a href="/" className="logo_container">
                        <img src={logo} alt="logo" className="logo"/>
                    </a>
                    <ul className="nav_content_container">
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Career</a></li>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Contant</a></li>
                    </ul>
                    <div className="nav_bar_container">
                        <div className="theme_main_container">
                            <MdOutlineLightMode size={30} className="theme_container" />
                        </div>
                        <div className="menu_main_container">
                            <CgMenuRightAlt size={30} className="theme_container" onClick={() => openSideBar()}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapState = () => ({});

const mapDispatch = {
    openSideBar
};

export default (connect(mapState, mapDispatch)(NavBar));