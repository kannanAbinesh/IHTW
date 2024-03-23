/* Plugins */
import React from "react";

/* Actions and Helpers */

/* Style */
import './footer.css';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer_container_outer">
                <div className="footer_main_container">
                    <div className="footer_inner_container">
                        <div className="footer_content_container">
                            <Container className="footer_container">
                                <Row className="footer_row">
                                    <Col className="footer_col"  xs={12} sm={6} lg={6} md={6}>
                                        <label className="footer_content_header">Integrated House Technical Works.</label>
                                        <ul className="footer_list">
                                            <li><Link className="footer_content_list" to={'/about'}>About</Link></li>
                                            <li><Link className="footer_content_list" to={'/contact'}>Contact us</Link></li>
                                            <li><Link className="footer_content_list" to={'/projects'}>Projects</Link></li>
                                        </ul>
                                    </Col>
                                    <Col className="footer_col">

                                    </Col>
                                </Row>
                                <div className="sub_footer_container">
                                    <div className="footer_content_header">Integrated House Technical Works.</div>
                                    <div>

                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Footer;