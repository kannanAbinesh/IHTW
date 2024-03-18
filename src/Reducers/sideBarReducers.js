import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from "../Constant"

export function sideBarReducer (state = {}, action) {
    switch(action.type) {
        case OPEN_SIDE_MENU: 
            return {
                ...state,
                sideBar: true
            }
        case CLOSE_SIDE_MENU:
            return {
                ...state,
                sideBar: false
            }
        default: return state
    }
}