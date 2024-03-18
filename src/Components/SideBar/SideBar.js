/* Plugins */
import { Offcanvas } from "react-bootstrap"
import { connect } from "react-redux";

/* Actions and Helpers */
import { sideBarData } from "./sideBarHelper";
import { closeSideBar } from "../../Actions/SideBarAction";

/* Style */
import './sideBar.css';

const SideBar = ({ closeSideBar, isOpen }) => {
    console.log(isOpen, 'jiiii')
    return (
        <div>
            <Offcanvas show={isOpen} onHide={closeSideBar} className="sideBar_container">
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>Welcome to IHTW</Offcanvas.Title>    
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {
                            sideBarData?.map(i => (
                                <p className="sideBar_data">{i?.name}</p>
                            ))
                        }
                    </div>
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