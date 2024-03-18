import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../Constant/index';

export const openSideBar = () => {
    return async (dispatch, {getState}) => {
        dispatch({ type: OPEN_SIDE_MENU });
    }
};

export const closeSideBar = () => {
    return async (dispatch, {getState}) => {
        dispatch({ type: CLOSE_SIDE_MENU });
    }
};