/* Plugins */
import React from "react";
import { connect } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

/* Components */
import SideBar from "../SideBar/SideBar";

/* Actions and Helpers */
import { openSideBar } from "../../Actions/SideBarAction";

/* Images */
import logo from '../../Images/logo.png';
import logoTwo from '../../Images/logoTwo.png';

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
                    <Link to={"/"} className="logo_container">
                        <img src={logoTwo} alt="logo" className="logo"/>
                    </Link>
                    <ul className="nav_content_container">
                        <li><Link to={"/project"}>Projects</Link></li>
                        <li><Link to={"/career"}>Career</Link></li>
                        <li><Link to={"/about"}>About us</Link></li>
                        <li><Link to={"/contact"}>Contant</Link></li>
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