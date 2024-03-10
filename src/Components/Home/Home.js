/* Plugins */
import React from "react";
import { connect } from "react-redux";

/* Components */
import NavBar from "../NavBar/NavBar";

/* Helpers and Actions */


class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
};

const mapState = state => ({
    check: state
});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(Home));