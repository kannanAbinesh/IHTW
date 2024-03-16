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
            <div id="serviceContainer" className="service_container">
                <h2 className="service_header">What type of service are you looking for?</h2>
                <p className="service_container_subheader">Are you looking for internet for your Home or Business?</p>
                <Row className="service_data_container">
                    {
                        serviceHelpers?.map((i) => {
                            return (
                                <Col className="service_subContainer" lg={6}>
                                    <div className="background_container" style={{backgroundImage: `url(${i?.backGroundImage})`}}>
                                        <div className="service_subdata_container">
                                            {i?.icon}
                                            <h3 className="service_container_header">{i?.headers}</h3>
                                            <p className="service_container_data">{i?.data}</p>
                                            <Button className="service_btn">{i?.buttonData}</Button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
};

export default Services;