import { CHECK_FUNCTION } from "../Constant";

export function checkReducers (state = {}, action) {
    switch(action.type){
        case CHECK_FUNCTION: 
            return {
                ...state,
                userData: 'action.payload'
            }
        default: return state
    }
};