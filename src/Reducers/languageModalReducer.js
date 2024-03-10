import { OPEN_LANGUAGE_MODAL, CLOSE_LANGUAGE_MODAL } from "../Constant"

export function languageModalReducer (state = {}, action) {
    switch(action.type) {
        case OPEN_LANGUAGE_MODAL: 
            return {
                ...state,
                languageModal: true
            }
        case CLOSE_LANGUAGE_MODAL:
            return {
                ...state,
                languageModal: false
            }
        default: return state
    }
}