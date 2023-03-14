import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import AdminReducer from './Admin/AdminReducer';
import AuthReducer from './AuthReducer/AuthReducer';
import UserReducer from './User/UserReducer';

const rootReducer = combineReducers({
    auth:AuthReducer,
    admin:AdminReducer,
    user:UserReducer
})



const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store