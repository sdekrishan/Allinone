import { DELETE_CART, POST_PRODUCT, REMOVE_ITEM } from "./CartActionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PRODUCT: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    
    case DELETE_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case(REMOVE_ITEM):{
      state.cart.splice(state.cart.indexOf(payload),1)
      return {
        ...state,
        cart:state.cart
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
