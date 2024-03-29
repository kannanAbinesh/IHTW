/* Plugins */
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";

/* Component */
import SiteAdminLogin from '../SiteAdminLogin/SiteAdminLogin';

/* Style */
import './siteAdmin.css';

/* Images */
import adminLoginBanner from '../../Images/siteAdminBanner.jpg'
import logo from '../../Images/logoTwo.png';
import { Link } from 'react-router-dom';

const SiteAdmin = () => {
    return (
        <div>
            <Container className='site_admin_login_container'>
                <Row className='site_admin_login_row'>
                    <div className='site_admi_login_main_container'>
                        <Col lg={6} md={6} sm={12} xs={12} className="site_admin_login_col" >
                            <div className='site_admin_back_btn_container'>
                                <Link to={'/'}>
                                    <IoMdArrowRoundBack size={30} title='Home Page' className='site_admin_back_btn'/>
                                </Link>
                            </div>
                            <div className='site_admin_login_main_container'>
                                <div className='site_admin_login_image_container'>
                                    <img src={logo} alt='logo' className='site_admin_login_image' />
                                    <p className='site_admin_header'>Welcome Back</p>
                                </div>
                                <SiteAdminLogin />
                            </div>
                        </Col>
                        <div style={{backgroundImage: `url(${adminLoginBanner})`}}  className='side_admin_login_image'/>
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default SiteAdmin;