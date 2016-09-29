import * as types from './ActionTypes'

export function increment(){
    return{
        type: types.INCREMENT
    };
}

export function decrement(){
    return {
        type: types.DECREMENT
    }
}

export function setColor(color){
    return {
        type:types.SET_COLOR,
        color
    }
}

export function incre(){
    return{
        type: types.INCRE
    }
}

export function decre(){
    return{
        type: types.DECRE
    }
}

export function typing(text){
  return{type:types.TYPING, text: text}
}
