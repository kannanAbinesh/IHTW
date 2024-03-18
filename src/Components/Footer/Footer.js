/* Plugins */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Actions and Helpers */
import { footerData } from './footerData';

/* Style */
import './footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer_main_container">
                <Row className="footer_grid">
                    {
                        footerData?.map((i) => (
                            <Col lg={12} md={12} sm={12} xs={12} className="footer_col">
                                <label className="footer_header">{i?.header}</label>
                                <ul className="footer_data">
                                {
                                    i?.data?.map((j) => {
                                        return (
                                                <li>
                                                    <Link className="footer_link" to={j?.url}>{j?.name}</Link>
                                                </li>
                                            )
                                        })
                                }
                                </ul>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
};

export default Footer;