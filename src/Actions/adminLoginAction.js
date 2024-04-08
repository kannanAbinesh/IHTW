/* Plugins */
import axios from 'axios';
import { toast } from 'react-toastify';

/* constant data */
import { ADMIN_LOGIN_START, ADMIN_LOGIN_ERROR, ADMIN_LOGIN_SUCCESS } from '../Constant';

/* Helpers and Actions */
import { setCookies } from '../Helpers/cookies-helper';

export const adminLogin = ({ email, password }) => {
    return async (dispatch, { getState }) => {
        try {
            dispatch({ type: ADMIN_LOGIN_START });

            await axios
            .post('http://localhost:3000/api/v1/adminLogin', {
                email,
                password
            })
            .then(async ({ data }) => {
                if(Number(data?.status) === 200) {
                    toast.success('Welcome back admin');
                    await setCookies({authenticationToken: data?.result?.token}); // set cookie
                } else {
                    toast.error('Incorrect credentials, Please try again');
                }
            })
            .catch (() => {
                toast.error('Something went wrong, Will get back to you later');
                dispatch({ type: ADMIN_LOGIN_ERROR });
                return '';
            });
            
        } catch (error) {
            toast.error('Something went wrong, Will get back to you later');
            dispatch({ type: ADMIN_LOGIN_ERROR });
            return '';
        }
    }
};