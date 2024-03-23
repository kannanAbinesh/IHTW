/* Plugins */
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { useSwiper } from "swiper/react"; 

/* Actions and Helpers */
import { projectData } from './projectHelpers';

/* Styles */
import './project.css';

const Projects = () => {
    const swiper = useSwiper();
    return(
        <div className="project_main_container">
            <div className='project_container'>
                <Container className='project_style_container'>
                    <Row className="project_row">
                        <Col lg={12} md={12} sm={12} xs={12}  className="project_col">
                            <h3>Projects</h3>
                            <div className='viewAll_container'>
                                <Link to='/products' className='view_all_content'>View all</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='slider_main_container'>
                    <div className='slider_inner_main_container'>
                        <div className='slider_container'>
                            <Swiper
                                pagination={{
                                    clickable: true
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1025: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    }
                                }}
                                slidesPerView={2}
                                modules={[Autoplay]}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false
                                }}
                                loop={true}
                                className='project_swiper'
                            >
                                {
                                    projectData?.map((i, index) => {
                                        return (
                                            <SwiperSlide key={index} className='card_swiper'>
                                                <div className='project_slider_card'>
                                                    <div className='slider_card'>
                                                        <Link to={'/'}>
                                                            <div className='swiper_image' style={{backgroundImage: `url(${i?.image})`}}></div>
                                                        </Link>
                                                    </div>
                                                    <div className='slider_content'>
                                                        <Link to={'/'} className='project_title_link'>
                                                            <div className='project_card_header'>{i?.name}</div>
                                                            <div>{i?.location}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className='navigation_container'>
                                <div className='project_navigator_container' onClick={() => alert('move left')}>
                                    <MdOutlineChevronLeft className='project_navigator'/>
                                </div>
                                <div className='project_navigator_container' onClick={() => alert('move right')}>
                                    <MdOutlineChevronRight className='project_navigator'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;