/* Plugins */
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';
import aboutLottie from '../../Images/LottieFiles/aboutLottie.json';

/* Components */
import Footer from '../Footer/Footer';

/* Images */
import subBannerImageOne from '../../Images/aboutSubImage.avif';

import img1 from '../../Images/HomeBanner.jpg';
import img2 from '../../Images/bannerImage.avif';
import img3 from '../../Images/homeBannerOne.jpg';
import img4 from '../../Images/serviceBannerTwo.jpg';
import img5 from '../../Images/serviceBannerOne.jpg';
import img6 from '../../Images/mainBannerImage.jpg';
import img7 from '../../Images/mainBannerImage.avif';
import img8 from '../../Images/homeBannerOne.jpg';
import img9 from '../../Images/aboutSubImage.avif';

/* Styles and Animations */
import './about.css';

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

    let imageData = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
        {
            id: 7,
            image: img7
        },
        {
            id: 8,
            image: img8
        },
        {
            id: 9,
            image: img9
        },
        {
            id: 10,
            image: 'https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08='
        }
    ]
    return (
        <div>
            <div className='about_container'>
                <Container>
                    <Row className='about_row_container'>
                        <Col lg={6} md={6} sm={12} xs={12} className='about_col'>
                            <div className='about_header_text'>
                                <div className='about_main_header'>
                                    <h4 className='about_headers_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        In sit distinctio dolore reprehenderit.
                                    </h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className='about_col'>
                            <div>
                                <Lottie options={defaultOptions} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className='main_about_container'>
                    <div className='main_about_header_container'>
                        <h2 className='main_about_header_content'>About Us</h2>
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

                <div>
                    <Container className='about_sub_container'>
                        <Row className='about_sub_row'>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container'>
                                <div className='about_sub_image_container'>
                                    <img src={subBannerImageOne} className='sub_about_image' alt='about images' />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container'>
                                <div className='about_sub_header_container'>
                                    <div className='about_text_header'>
                                        <h2 className='about_sub_header'>Our Mission</h2>
                                    </div>
                                </div>
                                <div className='about_sub_text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Qui laudantium, ad delectus eum veritatis minima?
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container'>
                                <div className='about_sub_image_container'>
                                    <img src={subBannerImageOne} className='sub_about_image' alt='about images' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <Container className='about_sub_container'>
                        <Row className='about_sub_row'>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container_second'>
                                <div className='about_sub_header_container'>
                                    <div className='about_text_header'>
                                        <h2 className='about_sub_header'>Lorem ipsum</h2>
                                    </div>
                                </div>
                                <div className='about_sub_text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Qui laudantium, ad delectus eum veritatis minima?
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container_second'>
                                <div className='about_sub_image_container'>
                                    <img src={subBannerImageOne} className='sub_about_image' alt='about images' />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className='about_col_container_second'>
                                <div className='about_sub_image_container'>
                                    <img src={subBannerImageOne} className='sub_about_image' alt='about images' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <div className='main_about_container'>
                    <div className='gallery_container'>
                        {
                            imageData?.map((i, index) => {
                                return (
                                    <div className='gallery_single_imahe_container' key={index}>
                                        <img src={i?.image} className='gallery_image'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;