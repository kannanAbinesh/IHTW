/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* Constant data */
import { 
    UPLOAD_ABOUT_IMAGE_ERROR, 
    UPLOAD_ABOUT_IMAGE_SUCCESS, 
    UPLOAD_ABOUT_IMAGE_START ,
    DELETE_ABOUT_IMAGE_ERROR,
    DELETE_ABOUT_IMAGE_SUCCESS,
    DELETE_ABOUT_IMAGE_START 
} from '../Constant/index';

export const uploadAboutImage = (files) => {
    return async (dispatch, { getState }) => {
        dispatch({ type: UPLOAD_ABOUT_IMAGE_START });

        let aboutImages = new FormData();
        files.map((i) => {
            aboutImages.append('files', i);
        });

        // let { data } = await axios.post('http://localhost:3000/api/v1/uploadAboutImage', aboutImages);
        // if(Number(data?.status) === 200) {
        //     dispatch({ type: UPLOAD_ABOUT_IMAGE_SUCCESS });
        //     toast.success(data?.message);
        //     return '';
        // } else {
        //     dispatch({ type: UPLOAD_ABOUT_IMAGE_ERROR });
        // }
    }
};

export const delteAboutImage = () => {
    return async (dispatch, {getState}) => {
        dispatch({ type: DELETE_ABOUT_IMAGE_START });
    }
};