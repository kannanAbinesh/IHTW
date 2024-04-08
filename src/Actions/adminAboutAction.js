/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* Helpers and Actions */
import store from '../Reducers';
import { getAbout } from './getAboutAction';
import { 
    ADMIN_ABOUT_ERROR, 
    ADMIN_ABOUT_START, 
    ADMIN_ABOUT_SUCCESS 
} from '../Constant';

export const adminAbout = ({ id, header, aboutus, projects, clients, destination, storyHeader, year, story }) => {
    return async (dispatch, { getState }) => {
        try {
            dispatch({ type: ADMIN_ABOUT_START });

            let aboutData = await axios.put('http://localhost:3000/api/v1/manageAbout', {
                id,
                header,
                aboutus, 
                projects, 
                clients, 
                destination, 
                year, 
                storyHeader,
                story
            });

            if(Number(aboutData?.data?.status) === 200) {
                dispatch({ type: ADMIN_ABOUT_SUCCESS });
                await store.dispatch(getAbout());
                toast.success(`success ${aboutData?.data?.message}`);
                return '';
            }
            
        } catch (error) {
            dispatch({ type: ADMIN_ABOUT_ERROR });
            toast.error('Something went wrong, Will get back to you later');
            return '';
        }
    }
};