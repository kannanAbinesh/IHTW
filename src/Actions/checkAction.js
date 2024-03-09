import { CHECK_FUNCTION } from "../Constant";

const checkFunction = (checkData) => {
    return async (dispatch, {getState}) => {
        console.log('checking function', checkData);

        dispatch({
            type: CHECK_FUNCTION
        })
    }
};

export default checkFunction;