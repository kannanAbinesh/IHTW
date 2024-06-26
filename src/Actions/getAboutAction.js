/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* Helpers and Actions */
import { GET_ADMIN_ABOUT_DATA_ERROR, GET_ADMIN_ABOUT_DATA_SUCCESS, GET_ADMIN_ABOUT_DATA_START } from '../Constant';

export const getAbout = () => {
    return async (dispatch, { getState }) => {
        try {
            dispatch({ type: GET_ADMIN_ABOUT_DATA_START });
            let { data } = await axios.get('http://localhost:3000/api/v1/getAbout');
            let aboutData = data?.results?.aboutData[0];
            let images = data?.results?.aboutImages;

            if(Number(data?.status) === 200) {
                return {
                    data: aboutData,
                    image: images
                }
            } else {
                return {
                    data: aboutData,
                    image: []
                }
            }
            
        } catch (error) {
            console.log(error, 'llllllll')
            dispatch({ type: GET_ADMIN_ABOUT_DATA_ERROR });
            toast.error('Something went wrong, Will get back to you later');
            return '';
        }
    }
};