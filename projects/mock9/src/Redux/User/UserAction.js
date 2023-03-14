import axios from "axios";
import {
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  POST_USER_DETAILS_ERROR,
  POST_USER_DETAILS_REQUEST,
  POST_USER_DETAILS_SUCCESS,
} from "./UserActionTypes";

export const getUsers = () => (dispatch) => {
  dispatch({ type: GET_USER_DETAILS_REQUEST });
  return axios
    .get(`https://mock8server.vercel.app/users`)
    .then((res) =>
      dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_USER_DETAILS_ERROR }));
};

export const postUser = (data) => (dispatch) => {
  dispatch({ type: POST_USER_DETAILS_REQUEST });
  return axios
    .post(`https://mock8server.vercel.app/users`, data)
    .then((res) =>
      dispatch({ type: POST_USER_DETAILS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: POST_USER_DETAILS_ERROR }));
};
