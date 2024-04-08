/* Plugins */
import Cookies from 'universal-cookie';

export const setCookies = async ({ authenticationToken }) => {
    const cookies = new Cookies()
    let expiresIn = 3600 * 1000 * 24 * 365 * 10; // 10 years

    /* set cookie for authentication */
    cookies.set('id_token', authenticationToken, { expiresIn: expiresIn, path: '/' });
    return true;
};

export const getCookie = () => {

};