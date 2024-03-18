/* Plugins */
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

/* Helpers and actions */
import { serviceHelpers } from "./serviceHelpers";

/* Styles */
import './service.css';

class Services extends React.Component {
    render() {
        return (
            <div className="services_container">
                <div className="service_main_container">
                    <div className="service_main_container">
                        <div className="services_container">
                            <div className="service_header">What type of service are you looking for?</div>
                            <div className="service_subHeader">Are you looking for internet for your Home or Business?</div>
                        </div>
                        <div className="service_content">
                            <Row>
                                {
                                    serviceHelpers?.map((i, index) => (
                                        <Col lg={6} md={6} sm={6} xs={12} className="service_image_container">
                                            <div style={{backgroundImage: `url(${i?.backGroundImage}`}} className="service_image">
                                                <div className="service_subcontent_container">
                                                    {i?.icon}
                                                    <div className="service_inner_header">{i?.headers}</div>
                                                    <div className="service_inner_data">{i?.data}</div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;