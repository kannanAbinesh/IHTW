/* Plugins */
import React from "react";
import { connect } from "react-redux";

/* Components */
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import HomeBannerLottie from "../HomeBannerLottie/HomeBannerLottie";
import Projects from "../Projects/Projects";
import { Link } from "react-router-dom";

/* Helpers and Actions */


class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeBanner />
                <Services />
                <Projects />
                <HomeBannerLottie />
                <Footer />
                <Link to={'/siteAdmin/about'} >hi</Link>
            </div>
        )
    }
};

const mapState = state => ({
    check: state
});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(Home));