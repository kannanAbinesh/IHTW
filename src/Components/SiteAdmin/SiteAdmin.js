/* Plugins */
import { Col, Container, Row } from 'react-bootstrap';

/* Component */
import SiteAdminLogin from '../SiteAdminLogin/SiteAdminLogin';

/* Style */
import './siteAdmin.css';

/* Images */
import siteAdminLogin from '../../Images/siteAdminLogin.svg';
import logo from '../../Images/logoTwo.png';

const SiteAdmin = () => {
    return (
        <div>
            <Container className='site_admin_login_container'>
                <Row className="site_admin_login_row">
                    <div className='site_admi_login_main_container'>
                        {/* <div className='side_admin_login_image'/> */}
                        <div style={{backgroundImage: `url(${siteAdminLogin})`}} className='side_admin_login_image'/>
                        <Col lg={6} md={6} sm={12} xs={12} className="site_admin_login_col" >
                            <div className='site_admin_login_main_container'>
                                <div className='site_admin_login_image_container'>
                                    <img src={logo} alt='logo' className='site_admin_login_image' />
                                    <p className='site_admin_header'>Welcome Admin !!!</p>
                                </div>
                                <SiteAdminLogin />
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
};

export default SiteAdmin;