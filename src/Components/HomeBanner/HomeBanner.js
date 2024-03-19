/* Plugins */
import React from "react";

/* Images */
import homeBanner from '../../Images/HomeBanner.jpg';

/* Style */
import './homeBanner.css';

class HomeBanner extends React.Component {
    render() {
        return(
            <div className="home_banner_container">
                <div className="home_banner_inner_container" style={{backgroundImage: `url(${homeBanner})`}}>

                </div>
            </div>
        )
    }
};

export default HomeBanner;

/* 
<div className="homeBanner-container" style={{backgroundImage: `url(${homeBannerOne})`}}>
                <div>
                    <h1 className="banner-header">Rise Above the Rest</h1>
                    <p className="banner-subheader">Experience Faster Internet</p>
                    <div className="home-banner-icon-container" onClick={() => window.location.href = '#serviceContainer'}>
                        <MdKeyboardArrowDown size={50} className="home-banner-icon"/>
                    </div>
                </div>
            </div>
*/