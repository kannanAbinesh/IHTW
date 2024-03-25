/* Plugins */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";

/* Actions and Helpers */

/* Images */
import logoTwo from '../../Images/logoTwo.png';

/* Style */
import './footer.css';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer_container">
                <Row className="footer_row">
                    <Col className="footer_col">
                        <img src={logoTwo} className="footer_logo" about="logo"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odio qui, fugiat quas ducimus voluptas molestiae consequatur eius cupiditate? 
                        </p>
                    </Col>
                    <Col className="footer_col">
                        <label>Address <div className="underline_header"><span></span></div> </label>
                        <label>Po Box 17054 Jebel Ali Free Zone</label>
                        <label>Dubai</label>
                        <label>17054</label>
                        <label>Emirates.</label>
                        <div className="email_container">
                            <label>E-mail <div className="underline_header"><span></span></div> </label>
                            <a href="mailto:Integratedhouse2001@gmail.com">
                                <span>Integratedhouse2001@gmail.com</span>
                            </a>
                        </div>
                    </Col>
                    <Col className="footer_col">
                        <label className="footer_list_header">Company <div className="underline_header"><span></span></div> </label>
                        <ul className="footer_list">
                            <Link to={'/'} className="footer_list_link">Home</Link>
                            <Link to={'/about'}  className="footer_list_link" >About</Link>
                            <Link to={'/product'}  className="footer_list_link">Products</Link>
                            <Link to={'/contactUs'}  className="footer_list_link">Contact us</Link>
                            <Link to={'/career'}  className="footer_list_link">Careers</Link>
                        </ul>
                    </Col>
                    <Col className="footer_col">
                        <label className="follow_container_header">Contanct us <div className="underline_header"><span></span></div> </label>
                        <div className="footer_icons_container">
                            <div className="footer_icons">
                                <a href="mailto:Integratedhouse2001@gmail.com">
                                    <IoIosMail className="footer_icon_main" />
                                </a>
                            </div>
                            <div className="footer_icons">
                                <a href="https://wa.me/+91971557824977/?text=hello all">
                                    <AiOutlineWhatsApp className="footer_icon_main" />
                                </a>
                            </div>
                            <div className="footer_icons">
                                <a href="tel:+971557824977">
                                    <FaPhone className="footer_icon_main"/>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="copy_rights_container">
                    <label>IHTW-Integrated House Technical Work</label>
                </div>
            </div>
        )
    }
};

export default Footer;