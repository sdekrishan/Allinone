import { GET_USER_DETAILS_ERROR, GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, POST_USER_DETAILS_ERROR, POST_USER_DETAILS_REQUEST, POST_USER_DETAILS_SUCCESS } from "./UserActionTypes"

const initialState = {
    users:[],
    isLoading:false,
    isError:false,
}

const UserReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case(POST_USER_DETAILS_REQUEST):{
            return {
                ...state,
                isLoading :true
            }
        }
        case(POST_USER_DETAILS_SUCCESS):{
            return {
                ...state,
                isLoading:false,
                users:[...state.users,payload]
            }
        }
        case(POST_USER_DETAILS_ERROR):{
            return {
                ...state,
                isError:true
            }
        }
        case(GET_USER_DETAILS_REQUEST):{
            return {
                ...state,
                isLoading :true
            }
        }
        case(GET_USER_DETAILS_SUCCESS):{
            return {
                ...state,
                isLoading:false,
                users:payload
            }
        }
        case(GET_USER_DETAILS_ERROR):{
            return {
                ...state,
                isError:true
            }
        }
        default : return state
    }
}

export default UserReducer;