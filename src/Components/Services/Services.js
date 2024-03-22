/* Plugins */
import React from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

/* Helpers and actions */
import { serviceHelpers } from "./serviceHelpers";

/* Styles */
import './service.css';

class Services extends React.Component {
    render() {
        return (
            <div id="services_container" className="services_container">
                <div className="service_main_container">
                    <div className="service_main_container_two">
                        <div className="services_header_container">
                            <div className="service_header">What type of service are you looking for?</div>
                            <div className="service_subHeader">Are you looking for internet for your Home or Business?</div>
                        </div>
                        <div className="service_content">
                            <div className="service_swiper">
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
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
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
                                >
                                    {
                                        serviceHelpers?.map((i, index) => (
                                            <SwiperSlide key={index}>
                                                <div style={{backgroundImage: `url(${i?.backGroundImage}`}} className="service_image">
                                                    <div className="service_subcontent_container">
                                                        {i?.icon}
                                                        <div className="service_inner_header">{i?.headers}</div>
                                                        <div className="service_inner_data">{i?.data}</div>
                                                        <Button variant="danger" className="service_btn">{i?.buttonData}</Button>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;