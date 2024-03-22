/* Plugins */
import { Offcanvas } from "react-bootstrap"
import { connect } from "react-redux";

/* Actions and Helpers */
import { closeSideBar } from "../../Actions/SideBarAction";

/* Style */
import './sideBar.css';
import { Link } from "react-router-dom";

const SideBar = ({ closeSideBar, isOpen }) => {
    return (
        <div>
            <Offcanvas show={isOpen} onHide={closeSideBar} placement="end" className="side_bar_main_container">
                <Offcanvas.Header closeButton />
                <Offcanvas.Body className="side_bar_body">
                    <ul className="side_bar_container">
                        <li  className="side_bar_content">
                            <Link to="/" className="side_bar_navigator" onClick={() => closeSideBar()}>Home</Link>
                        </li>
                        <li  className="side_bar_content">
                            <Link to={"/about"} className="side_bar_navigator" onClick={() => closeSideBar()}>About</Link>
                        </li>
                        <li  className="side_bar_content">
                            <Link to="/contact" className="side_bar_navigator" onClick={() => closeSideBar()}>Contact us</Link>
                        </li>
                        <li  className="side_bar_content">
                            <Link to="/project" className="side_bar_navigator" onClick={() => closeSideBar()}>Projects</Link>
                        </li>
                        <li  className="side_bar_content">
                            <Link to="/career" className="side_bar_navigator" onClick={() => closeSideBar()}>Careers</Link>
                        </li>
                        <li  className="side_bar_content">
                            <span className="side_bar_navigator">Light mode</span>
                        </li>
                        <li  className="side_bar_content">
                            <span className="side_bar_navigator">Dark mode</span>
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