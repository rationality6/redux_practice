import * as types from '../actions/ActionTypes'

const initialState = {
    text:''
}

export default function typeCopy(state = initialState, action){
    if (action.type === types.TYPE_COPY){
        return {text: action.text}
    }else{
        return state
    }
}
