/* Plugins */
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import aboutLottie from '../../Images/LottieFiles/aboutLottie.json';

/* Components */
import Footer from '../Footer/Footer';
import CareerForm from '../CareerForm/CareerForm';

/* Helpers and Actions */
import { careerHelper } from './careerHelper';

/* Style */
import './career.css';

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
                    <div className='contact_details_main_container'>
                        <CareerForm />
                    </div>
                    <div className='contact_details_main_container'>
                        <div className='contact_details_inner_main_container'>
                            <h2 className='careerOr'>(OR)</h2>
                            <h3 className='contact_details_mail_header'>Send your resume to</h3>
                            <a href='mailto:Integratedhouse2001@gmail.com' className='email_contact_us_container'>
                                <span>Integratedhouse2001@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default Career;