/* Plugins */
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

/* Components */
import Footer from '../Footer/Footer';
import CareerForm from '../CareerForm/CareerForm';

/* Helpers and Actions */
import { careerHelper } from './careerHelper';

/* Style */
import './career.css';
import aboutLottie from '../../Images/LottieFiles/aboutLottie.json';

const Career = () => {

    /* Lottie settings */
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: 'career_lottie_json'
        }
    };

    return (
        <div>
            <div className="career_container">
                <Container>
                    <Row className='career_row_container'>
                        <Col  lg={6} md={6} sm={12} xs={12} className='career_col'>
                            <div className='career_header_text'>
                                <div className='career_main_header'>
                                    <h4 className='career_headers_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        In sit distinctio dolore reprehenderit.
                                    </h4>
                                </div>
                            </div>
                        </Col>
                        <Col  lg={6} md={6} sm={12} xs={12} className='career_col'>
                            <div>
                                <Lottie options={defaultOptions} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className='main_career_container'>
                    <div className='main_career_header_container'>
                        <h2 className='main_career_header_content'>Open jobs</h2>
                    </div>
                    <div className='main_career_para_container'>
                        <label>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta 
                            fugiat obcaecati maiores, nesciunt nihil vitae, mollitia debitis libero 
                            repellat voluptate excepturi, illum aspernatur dignissimos earum aliquam repudiandae blanditiis. Quidem.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta 
                        </label>
                    </div>
                </div>
                
                <Container className='career-jobs-container'>
                    <Accordion>
                        {
                            careerHelper?.map((i, index) => {
                                return (
                                    <Accordion.Item eventKey={index} key={index} className='accordina_items'>
                                        <Accordion.Header className='accordian_header'>{i?.role}</Accordion.Header>
                                        <Accordion.Body>
                                            <label className='accordian_body_header'>Expereince: {i?.experience}</label>
                                            <ul className='accordian_main_list'>
                                                {i?.descriptions?.map((j, index) => {
                                                    return <li key={index} className='accordian_list'>{j}</li>
                                                })}
                                            </ul>
                                            <label className='accordian_footer' onClick={() => window.location.href='#career_form'}>Apply here</label>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </Container>

                <div id='career_form' className='career_form_container'>
                    <CareerForm />
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default Career;