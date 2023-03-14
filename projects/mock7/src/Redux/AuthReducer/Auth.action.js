import axios from "axios";
import {
  LOGIN_RQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  ADMIN_LOGIN,
} from "./AuthActionTypes";

export const LoginFun = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_RQUEST });
  return axios
    .get(
      `https://mockdeploy.vercel.app/users?email=${payload.email}&password=${payload.password}`
    )
    .then((res) => {
      if (
        payload.email === "admin@stockbroker.com" &&
        payload.password === "admin123"
      ) {
        return dispatch({ type: ADMIN_LOGIN, payload: res.data[0] });
      } else if (res.data.length > 0) {
        return dispatch({ type: LOGIN_SUCCESS, payload: res.data[0] });
      } else {
        alert("Login Failed");
      }
    })
    .catch((err) => dispatch({ type: LOGIN_ERROR }));
};
