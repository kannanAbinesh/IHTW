/* Plugins */
import React from "react";
import { connect } from "react-redux";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

/* Components */
import SearchBar from "../SearchBar/SearchBar";
import LanguageModal from "../LanguageModal/LanguageModal";

/* Actions and Helpers */
import { openLanguageModal } from "../../Actions/languageModalAction";

/* Images */
import logo from '../../Images/logo.png';

/* Style */
import './navBar.css';

class NavBar extends React.Component {
    render() {
        const { openLanguageModal } = this.props;
        return (
            <div>
                <LanguageModal />
                <div className="navBar-container">
                    <img src={logo} className="logo" alt="logo" />
                    <SearchBar />
                    <div className="navBar-content">
                        <AiOutlineGlobal size={30} onClick={() => openLanguageModal()}/>
                        <CiShoppingCart size={30} />
                        <CgProfile size={30} />
                    </div>
                </div>
                <div className="category-container">

                </div>
            </div>
        )
    }
};

const mapState = () => ({});

const mapDispatch = {
    openLanguageModal
};

export default (connect(mapState, mapDispatch)(NavBar));