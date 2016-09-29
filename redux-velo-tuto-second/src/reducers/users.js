import * as types from '../actions/ActionTypes'

const initialState = {
    data: []
}
export default function users(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER_DATA: {
            return { ...state, data: action.data}
        }

        default:
            console.log("default")
            return state;
    }
}
