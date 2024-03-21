/* Packages */
import React from 'react';
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';

/* Image */
import lottieBannerImage from '../../Images/lottieBannerImage.webp';

/* Animation and Styles */
import homePageLottie from '../../Images/LottieFiles/homePageLottie.json';
import './homeBannerLottie.css';

class HomeBannerLottie extends React.Component {
    render() {

        /* Lottie settings */
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: homePageLottie,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
              className: 'lottie_json'
            }
        };
        return (
            <div>
                <div>
                    <Container className='lottie_container'>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12} className='lotti_containers_show'>
                                <div className='lotti_main_container'>
                                    <Lottie 
                                        speed={0.2}  
                                        options={defaultOptions}
                                    />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='lotti_containers'>
                                <div className='lotti_main_data_container'>
                                    <div><img src={lottieBannerImage} alt='power' className='lottie_data_image'/></div>
                                    <div className='lottie_header_container'><h3 className='lottie_header'>Transparent Working Process.</h3></div>
                                    <div className='lottie_data'>Get our newest, state of the art mesh technology with Rise Advanced Wi-Fi. Less buffering, no dead-zones, and up to 150 connected devices makes this whole-home Wi-Fi system a must for any size of home.</div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='hide_container'>
                                <div className='lotti_main_hide_container'>
                                    <Lottie 
                                        speed={0.2}  
                                        options={defaultOptions}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
};

export default HomeBannerLottie;