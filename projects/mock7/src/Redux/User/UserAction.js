import axios from "axios";
import {
  BUY_ERROR,
  BUY_REQUEST,
  BUY_SUCCESS,
  GET_USERDATA_ERROR,
  GET_USERDATA_REQUEST,
  GET_USERDATA_SUCCESS,
  USER_SEARCH_REQUEST,
} from "./UserActionTypes";

export const getUserData = (page) => (dispatch) => {
  dispatch({ type: GET_USERDATA_REQUEST });

  return axios
    .get(`https://mockdeploy.vercel.app/company?_page=${page}&_limit=4`)
    .then((res) => dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_USERDATA_ERROR }));
};
export const getFilteredData = (value) => (dispatch) => {
  dispatch({ type: USER_SEARCH_REQUEST });

  return axios
    .get(`https://mockdeploy.vercel.app/company?company_type=${value}`)
    .then((res) => dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_USERDATA_ERROR }));
};

export const getSortedData = (value) => (dispatch) => {
  dispatch({ type: USER_SEARCH_REQUEST });

  return axios
    .get(
      `https://mockdeploy.vercel.app/company?_sort=cost_per_share&_order=${value}`
    )
    .then((res) => dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_USERDATA_ERROR }));
};

