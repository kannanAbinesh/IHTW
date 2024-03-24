/* Plugins */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

/* Actions and Helpers */

/* Images */
import logoTwo from '../../Images/logoTwo.png';

/* Style */
import './footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer_container_outer">
                <div className="footer_main_container">
                    <div className="footer_inner_container">
                        <div className="footer_content_container">
                            <Container className="footer_container">
                                <Row className="footer_row">
                                    <Col className="footer_col">
                                        <Link to={'/'}>
                                            <img src={logoTwo} alt="logo" className="footer_logo"/>
                                        </Link>
                                        <div className="footer_container_one_content">
                                            <label>Integrated House Technical Works.</label>
                                            <label>2004</label>
                                        </div>
                                    </Col>
                                    <Col className="footer_col"  xs={12} sm={6} lg={6} md={6}>
                                        <label className="footer_content_header">Company</label>
                                        <ul className="footer_list">
                                            <li><Link className="footer_content_list" to={'/about'}>About</Link></li>
                                            <li><Link className="footer_content_list" to={'/contact'}>Contact us</Link></li>
                                        </ul>
                                    </Col>
                                    <Col className="footer_col">
                                        <label className="footer_content_header">Projects</label>
                                        <ul className="footer_list">
                                            <li><Link className="footer_content_list" to={'/about'}>Global village</Link></li>
                                            <li><Link className="footer_content_list" to={'/contact'}>Global village</Link></li>
                                            <li><Link className="footer_content_list" to={'/projects'}>Global village</Link></li>
                                            <li><Link className="footer_content_list" to={'/projects'}>Global village</Link></li>
                                            <li><Link className="footer_content_list" to={'/projects'}>Global village</Link></li>
                                        </ul>
                                    </Col>
                                    <Col className="footer_col">
                                        <div className="footer_summary_content">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                            Numquam inventore accusantium repellendus assumenda cum natus 
                                            molestiae nemo aliquid corporis provident animi minus mollitia a 
                                            blanditiis, dolore maxime corrupti sint recusandae?
                                        </div>
                                        <div className="footer_icon_container">
                                            <a href="mailto:abineshkannan98@gmail.com" >
                                                <IoIosMail size={30} className="footer_icons"/>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="sub_footer_container">
                                    <div className="logo_footer">
                                        
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