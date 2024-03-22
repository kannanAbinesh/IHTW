/* Plugins */
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

/* Components */
import NavBar from "../NavBar/NavBar";

/* Images */
import homeBanner from '../../Images/HomeBanner.jpg';

/* Style */
import './homeBanner.css';

class HomeBanner extends React.Component {
    render() {
        return(
            <div className="home_banner_container">
                <div className="home_banner_inner_container" style={{backgroundImage: `url(${homeBanner})`}}>
                    <div className="navBar_container">
                        <NavBar />
                    </div>
                    <div className="home_banner_content_container">
                        <div className="home_Banner_main_container">
                            <h1 className="home_banner_header">Integrated House Technical Works.</h1>
                            <label className="home_banner_content">Mechanical Electrical Plumping</label>
                        </div>
                    </div>
                    <div className="arrow_container">
                        <MdKeyboardArrowDown size={50} onClick={() => window.location.href='#services_container'}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default HomeBanner;