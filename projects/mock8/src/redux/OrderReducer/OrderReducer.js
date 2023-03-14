import { ADD_ORDER } from "./OrderActionTypes";

const initialState = {
  order: [],
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER: {
      return {
        ...state,
        order: [...state.order, payload],
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
