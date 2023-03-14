import {
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./ProductActionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  single: {},
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        single: payload,
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
