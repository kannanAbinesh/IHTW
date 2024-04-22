/* Plugins */
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

/* Actions and Helpers */
import { projectData } from './projectHelpers';

/* Styles */
import './project.css';
import SwiperComponent from '../ProjectSlider/ProjectSlider';

const Projects = () => {
    return(
        <div className='home-page-project-container'>
            <div className='home-page-project-main-container'>
                <Container>
                    <div className="home-page-project-header-container">
                        <h3>Projects</h3>
                        <div>
                            <Link to='/products' className='home-banner-project-link'>View all</Link>
                        </div>
                    </div>
                </Container>
                <div className='home-page-project-display-container'>
                    <Swiper
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1025: {
                                slidesPerView: 4,
                                spaceBetween: 20,
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
                        className='home-page-project-slider-main-container'
                    >
                        {
                            projectData?.map((i, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='home-page-project-card-container'>
                                            <Link to={'/'}>
                                                <div className='home-page-project-card-image' style={{backgroundImage: `url(${i?.image})`}}></div>
                                            </Link>
                                            <Link to={'/'}>
                                                <div className='home-page-container-content-wrapper'>
                                                    <div className='project_card_header'>{i?.name}</div>
                                                    <div>{i?.location}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className='home-page-project-swiper-navigator'>
                            <SwiperComponent />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
};

export default Projects;