import axios from "axios";
import {
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./ProductActionTypes";

export const getProducts = (page) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`
    )
    .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_DATA_ERROR }));
};

export const getFilteredProducts = (page, filter, sort) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  if (filter !== "" && sort !== "") {
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filter}&page=${page}&limit=12&sort=price&order=${sort}`
      )
      .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_DATA_ERROR }));
  } else if (filter !== "") {
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filter}&page=${page}&limit=12`
      )
      .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_DATA_ERROR }));
  } else if (sort !== "") {
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?&page=${page}&limit=12&sort=price&order=${sort}`
      )
      .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_DATA_ERROR }));
  } else {
    return axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`
      )
      .then((res) => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_DATA_ERROR }));
  }
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
    )
    .then((res) =>
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: GET_DATA_ERROR }));
};
