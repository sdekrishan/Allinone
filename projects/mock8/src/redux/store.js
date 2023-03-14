import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import cartReducer from './CartReducer/CartReducer';
import orderReducer from './OrderReducer/OrderReducer';
import ProductReducer from './ProductReducer/ProductReducer';
const rootReducers = combineReducers({
product:ProductReducer,
cart:cartReducer,
order:orderReducer
})

const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

export default store;