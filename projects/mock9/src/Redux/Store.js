import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import QuizReducer from './Quiz/QuizReducer';
import ResultReducer from './Results/ResultReducer';
import UserReducer from './User/UserReducer';

const rootReducer = combineReducers({
 user:UserReducer,
 quiz:QuizReducer,
 result:ResultReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;