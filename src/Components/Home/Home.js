/* Plugins */
import React from "react";
import { connect } from "react-redux";

/* Components */
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import SubMainBanner from "../SubMainBanner/SubMainBanner";
import HomeBannerLottie from "../HomeBannerLottie/HomeBannerLottie";
import Projects from "../Projects/Projects";

/* Helpers and Actions */


class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeBanner />
                <Services />
                <Projects />
                <HomeBannerLottie />
                {/* <SubMainBanner /> */}
                <Footer />
            </div>
        )
    }
};

const mapState = state => ({
    check: state
});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(Home));