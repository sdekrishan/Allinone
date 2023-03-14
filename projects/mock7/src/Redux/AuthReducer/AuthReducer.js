import { ADMIN_LOGIN, LOGIN_ERROR, LOGIN_RQUEST, LOGIN_SUCCESS } from "./AuthActionTypes"

const initialState = {
    userAuth :false,
    AdminAuth:false,
    isLoading:false,
    isError:false,
    userId:""
}

const AuthReducer =(state = initialState,{type,payload})=>{
    switch(type){
        case(LOGIN_RQUEST):{
            return{
                ...state,
                isLoading:true
            }
        }
        case(LOGIN_SUCCESS):{
            return{
                ...state,
                isLoading:false,
                userAuth:true,
                userId:payload.id
            }
        }
        case(LOGIN_ERROR):{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case(ADMIN_LOGIN):{
            return {
                ...state,
                userAuth:false,
                AdminAuth:true,
                isLoading:false,
                isError:false
            }
        }
        default : return state
    }
}

export default AuthReducer