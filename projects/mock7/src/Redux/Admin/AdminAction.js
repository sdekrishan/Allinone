import axios from "axios";
import {
  DELETE_ADMIN_DATA_ERROR,
  DELETE_ADMIN_DATA_REQUEST,
  DELETE_ADMIN_DATA_SUCCESS,
  EDIT_ADMIN_DATA_ERROR,
  EDIT_ADMIN_DATA_REQUEST,
  EDIT_ADMIN_DATA_SUCCESS,
  GET_ADMINDATA_ERROR,
  GET_ADMINDATA_REQUEST,
  GET_ADMINDATA_SUCCESS,
  POST_ADMIN_DATA_ERROR,
  POST_ADMIN_DATA_REQUEST,
  POST_ADMIN_DATA_SUCCESS,
} from "./AdminActionTypes";

export const getAdminData = () => (dispatch) => {
  dispatch({ type: GET_ADMINDATA_REQUEST });

  return axios
    .get(`https://mockdeploy.vercel.app/company`)
    .then((res) => dispatch({ type: GET_ADMINDATA_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ADMINDATA_ERROR }));
};

export const deleteAdminData = (id) => (dispatch) => {
  dispatch({ type: DELETE_ADMIN_DATA_REQUEST });

  return axios
    .delete(`https://mockdeploy.vercel.app/company/${id}`)
    .then((res) => dispatch({ type: DELETE_ADMIN_DATA_SUCCESS }))
    .catch((err) => dispatch({ type: DELETE_ADMIN_DATA_ERROR }));
};

export const postAdminData = (data) => (dispatch) => {
  dispatch({ type: POST_ADMIN_DATA_REQUEST });

  return axios
    .post(`https://mockdeploy.vercel.app/company/`, data)
    .then((res) => dispatch({ type: POST_ADMIN_DATA_SUCCESS }))
    .catch((err) => dispatch({ type: POST_ADMIN_DATA_ERROR }));
};

export const EditAdminData = (id, data) => (dispatch) => {
  dispatch({ type: EDIT_ADMIN_DATA_REQUEST });

  return axios
    .patch(`https://mockdeploy.vercel.app/company/${id}`, data)
    .then((res) => dispatch({ type: EDIT_ADMIN_DATA_SUCCESS }))
    .catch((err) => dispatch({ type: EDIT_ADMIN_DATA_ERROR }));
};
