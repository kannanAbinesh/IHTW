/* Plugins */
import { Offcanvas } from "react-bootstrap"
import { connect } from "react-redux";

/* Actions and Helpers */
import { closeSideBar } from "../../Actions/SideBarAction";

/* Style */
import './sideBar.css';

const SideBar = ({ closeSideBar, isOpen }) => {
    return (
        <div>
            <Offcanvas show={isOpen} onHide={closeSideBar} placement="end" className="side_bar_main_container">
                <Offcanvas.Header closeButton />
                <Offcanvas.Body className="side_bar_body">
                    <ul className="side_bar_container">
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Home</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">About</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Contact us</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Projects</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Careers</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Light mode</a>
                        </li>
                        <li  className="side_bar_content">
                            <a href="/"  className="side_bar_navigator">Dark mode</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
};

const mapState = state => ({
    isOpen: state?.sideBarReducer?.sideBar
});

const mapDispatch = {
    closeSideBar
};

export default (connect(mapState, mapDispatch)(SideBar));