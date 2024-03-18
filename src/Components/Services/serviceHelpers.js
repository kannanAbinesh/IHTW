/* Plugins */
import { PiHouseLineBold } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";

/* Images */
import serviceBannerOne from '../../Images/serviceBannerOne.jpg';
import serviceBannerTwo from '../../Images/serviceBannerTwo.jpg';
import mainBannerImage from '../../Images/mainBannerImage.jpg';

export const serviceHelpers = [
    {
        id: 1,
        headers: 'residential service',
        backGroundImage: serviceBannerOne,
        icon: <PiHouseLineBold size={40} color="red"/>,
        data: `We offer flexible packages designed to meet your budget 
               so you can stream all your favorite music, movies and shows with fast, 
               reliable in-home WiFi.`,
        buttonData: 'plans & pricing'
    },
    {
        id: 2,
        headers: 'business services',
        backGroundImage: serviceBannerTwo,
        icon: <PiBuildings size={40} color="red"/>,
        data: `Business-class service and support.
               Rise Broadband provides products and services to meet 
               the needs of both Enterprise and Small Business.`,
        buttonData: 'get a quote'
    }
];