/* Plugins */
import { useSwiper } from "swiper/react"; 
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

/* Styles */
import './projectSlider.css';

const SwiperComponent = () => {
    const swiper = useSwiper();
    return(
        <div className="project-slider-navigation-container">
            <div className="project-slider-navigator">
                <SlArrowLeft onClick={() => swiper.slidePrev()} className="project-navigator" size={25}/>
            </div>
            <div className="project-slider-navigator">
                <SlArrowRight onClick={() => swiper.slideNext()} className="project-navigator" size={25}/>
            </div>
        </div>
    )
};

export default SwiperComponent;