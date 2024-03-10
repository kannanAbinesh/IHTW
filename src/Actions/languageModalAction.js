import { OPEN_LANGUAGE_MODAL, CLOSE_LANGUAGE_MODAL } from "../Constant";

export const openLanguageModal = () => {
    return async (dispatch, {getState}) => {
        dispatch({ type: OPEN_LANGUAGE_MODAL });
    }
};

export const closeLanguageModal = () => {
    return async (dispatch, { getState }) => {
        dispatch({ type: CLOSE_LANGUAGE_MODAL });
    }
};