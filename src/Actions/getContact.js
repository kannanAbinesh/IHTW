/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* Helpers and Actions */
import { GET_ADMIN_ABOUT_DATA_ERROR, GET_ADMIN_ABOUT_DATA_SUCCESS, GET_ADMIN_ABOUT_DATA_START } from '../Constant';

export const getContact = () => {
    return async (dispatch, { getState }) => {
        try {
            dispatch({ type: GET_ADMIN_ABOUT_DATA_START });
            let { data } = await axios.get('http://localhost:3000/api/v1/getContact');
            let contactData = data?.results?.contactData[0];
            let contactDetails = data?.results?.contactDetails;

            if(Number(data?.status) === 200) {
                return {
                    data: contactData,
                    contactDetails: contactDetails
                }
            } else {
                return {
                    data: contactData,
                    contactDetails: []
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