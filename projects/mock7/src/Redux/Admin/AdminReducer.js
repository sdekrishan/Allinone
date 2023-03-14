import { DELETE_ADMIN_DATA_ERROR, DELETE_ADMIN_DATA_REQUEST, DELETE_ADMIN_DATA_SUCCESS, EDIT_ADMIN_DATA_ERROR, EDIT_ADMIN_DATA_REQUEST, EDIT_ADMIN_DATA_SUCCESS, GET_ADMINDATA_ERROR, GET_ADMINDATA_REQUEST, GET_ADMINDATA_SUCCESS, POST_ADMIN_DATA_ERROR, POST_ADMIN_DATA_REQUEST, POST_ADMIN_DATA_SUCCESS } from "./AdminActionTypes"

const initialState = {
    data :[],
    isLoading:false,
    isError:false
}

const AdminReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case(GET_ADMINDATA_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(GET_ADMINDATA_SUCCESS):{
            return {
                ...state,
                data:payload,
                isLoading:false
                
            }
        }
        case(GET_ADMINDATA_ERROR):{
            return {
                ...state,
                isError:true
            }
        }

        case(DELETE_ADMIN_DATA_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(DELETE_ADMIN_DATA_SUCCESS):{
            return{
                ...state,
                data:[...state.data],
                isLoading:false,
            }
        }
        case(DELETE_ADMIN_DATA_ERROR):{
            return{
                ...state,
                isError:true
            }
        }
        
        case(POST_ADMIN_DATA_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(POST_ADMIN_DATA_SUCCESS):{
            return{
                ...state,
                data:[...state.data],
                isLoading:false,
            }
        }
        case(POST_ADMIN_DATA_ERROR):{
            return{
                ...state,
                isError:true
            }
        }
        case(EDIT_ADMIN_DATA_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(EDIT_ADMIN_DATA_SUCCESS):{
            return{
                ...state,
                data:[...state.data],
                isLoading:false,
            }
        }
        case(EDIT_ADMIN_DATA_ERROR):{
            return{
                ...state,
                isError:true
            }
        }
        default: return state

    }
}

export default AdminReducer