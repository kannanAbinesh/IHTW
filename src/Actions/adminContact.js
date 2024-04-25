/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* Helpers and Actions */
import store from '../Reducers';


export const adminContact = ({ id, header, contactUs, details }) => {
    return async (dispatch, { getState }) => {
        try {
            let aboutData = await axios.post('http://localhost:3000/api/v1/manageContact', {
                id,
                header,
                contactUs,
                details
            });

            
            
        } catch (error) {
            toast.error('Something went wrong, Will get back to you later');
            return '';
        }
    }
};