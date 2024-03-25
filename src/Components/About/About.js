/* Plugins */
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';

/* Styles and Animations */
import './about.css';
import aboutLottie from '../../Images/LottieFiles/aboutLottie.json';
import Footer from '../Footer/Footer';

const About = () => {

    /* Lottie settings */
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: 'about_lottie_json'
        }
    };
    return (
        <div>
            <div>
                <Container className='about_lottie_container'>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className='about_lottie_first'>
                            
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='about_lottie_second'>
                            <div className='about_lottie_content'>
                                <Lottie options={defaultOptions} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='about_lottie_container'>
                    <div className='about_text'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi fugiat ratione, itaque blanditiis rerum pariatur quia facere, nemo sapiente, vero vel unde nostrum et non enim cumque consequatur recusandae!</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;

{/* <Lottie options={defaultOptions} /> */}