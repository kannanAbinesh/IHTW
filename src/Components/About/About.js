/* Plugins */
import { Col, Container, Row } from 'react-bootstrap';

/* Components */
import Footer from '../Footer/Footer';

/* Helpers and Actions */
import aboutData from './aboutHelper';
import { SlPeople } from "react-icons/sl";

/* Styles and Animations */
import './about.css';

const About = () => {
    
    return (
        <div>
            <div className='about_container'>

                <div className='main_about_container'>
                    <div className='main_about_header_container'>
                        <h2 className='main_about_header_content'>Who we are</h2>
                    </div>
                    <div className='main_about_para_container'>
                        <label>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta 
                            fugiat obcaecati maiores, nesciunt nihil vitae, mollitia debitis libero 
                            repellat voluptate excepturi, illum aspernatur dignissimos earum aliquam repudiandae blanditiis. Quidem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta 
                        </label>
                    </div>
                </div>

                <div className='main_about_container'>
                    <Container>
                        <Row className='about_us_summary_container'>
                            <Col className='about_us_summary_images'>
                                <SlPeople className='summery_icons' />
                                <div className='summary_content'>
                                    <div className='about_inner_count'>500</div>
                                    <div className='about_inner_content'>Projects</div>
                                </div>
                            </Col>
                            <Col className='about_us_summary_images'>
                                <SlPeople className='summery_icons' />
                                <div className='summary_content'>
                                    <div className='about_inner_count'>453,586</div>
                                    <div className='about_inner_content'>Clients</div>
                                </div>
                            </Col>
                            <Col className='about_us_summary_images'>
                                <SlPeople className='summery_icons' />
                                <div className='summary_content'>
                                    <div className='about_inner_count'>500,514</div>
                                    <div className='about_inner_content'>Projects</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row className='about_row_container'>
                        <div className='story_main_container'>
                            <label className='Story_header'>Our Story</label>
                            <label className='story_year'>2004</label>
                            <div className='story_content'>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Minus, obcaecati. Ad velit, ex nulla sit rerum magni ut 
                                debitis dignissimos labore repudiandae doloribus possimus, nam quisquam vel 
                                cupiditate molestiae eligendi?
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Minus, obcaecati. Ad velit, ex nulla sit rerum magni ut 
                                debitis dignissimos labore repudiandae doloribus possimus, nam quisquam vel 
                                cupiditate molestiae eligendi?
                            </div>
                        </div>
                    </Row>
                </Container>

                <div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;