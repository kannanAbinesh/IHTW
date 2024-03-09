/* Plugins */
import React from "react";
import { connect } from "react-redux";

/* Components */
import NavBar from "../NavBar/NavBar";

/* Helpers and Actions */
import checkFunction from "../../Actions/checkAction";

class Home extends React.Component {
    render() {
        const { checkFunction, check } = this.props;
        console.log(check, "checkcheckcheckcheck")
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

const mapDispatch = {
    checkFunction
};

export default (connect(mapState, mapDispatch)(Home));