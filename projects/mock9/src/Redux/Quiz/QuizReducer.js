import { GET_QUS_ERROR, GET_QUS_REQUEST, GET_QUS_SUCCESS, POST_SCORE_ERROR, POST_SCORE_REQUST, POST_SCORE_SUCCESS, QUIZ_DETAILS_ERROR, QUIZ_DETAILS_REQUEST, QUIZ_DETAILS_SUCCESS } from "./QuizActionTypes"

const initialState = {
    loading:false,
    error:false,
    details:[],
    qus:[]
}

const QuizReducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case(QUIZ_DETAILS_REQUEST):{
            return{
                ...state,
                loading:true
            }
        }
        case(QUIZ_DETAILS_SUCCESS):{
            return{
                ...state,
                details:payload
            }
        }
        case(QUIZ_DETAILS_ERROR):{
            return{
                ...state,
                error:true
            }
        }
        case(GET_QUS_REQUEST):{
            return {
                ...state,
                loading:true
            }
        }
        case(GET_QUS_SUCCESS):{
            return{
                ...state,
                qus:payload
            }
        }
        case(GET_QUS_ERROR):{
            return{
                ...state,
                error:true
            }
        }
        case(POST_SCORE_REQUST):{
            return {
                ...state,
                loading:true
            }
        }
        case(POST_SCORE_SUCCESS):{
            return{
                ...state,
                users:[...state.users]
            }
        }
        case(POST_SCORE_ERROR):{
            return{
                ...state,
                error:true
            }
        }
        default:return state
    }
}

export default QuizReducer;