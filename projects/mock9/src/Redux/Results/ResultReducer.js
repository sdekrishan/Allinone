import {  POST_RESULT } from "./ResultActionTypes"

const initialState = {
    result:{}
}

const ResultReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case(POST_RESULT):{
            return {
                ...state,
                result:payload
            }
        }  
        default: return state
    }
}

export default ResultReducer