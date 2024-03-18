/* Plugins */
import React from "react";
import { connect } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

/* Components */
import LanguageModal from "../LanguageModal/LanguageModal";
import SearchBar from '../SearchBar/SearchBar';
import SideBar from "../SideBar/SideBar";

/* Actions and Helpers */
import { openLanguageModal } from "../../Actions/languageModalAction";
import { navBarDetails } from "../../Helpers/navBarHelpers";
import { openSideBar } from "../../Actions/SideBarAction";

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
            <div className="navBar_container">
                <LanguageModal />
                <SideBar />
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
            </div>
        )
    }
};

const mapState = () => ({});

const mapDispatch = {
    openLanguageModal,
    openSideBar
};

export default (connect(mapState, mapDispatch)(NavBar));