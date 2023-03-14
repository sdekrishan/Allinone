import axios from "axios";
import {
  GET_QUS_ERROR,
  GET_QUS_REQUEST,
  GET_QUS_SUCCESS,
  POST_SCORE_ERROR,
  POST_SCORE_REQUST,
  POST_SCORE_SUCCESS,
 
} from "./QuizActionTypes";

export const getQus = (params) => (dispatch) => {
  dispatch({ type: GET_QUS_REQUEST });
  return axios
    .get(
      `https://opentdb.com/api.php?amount=${params.qus}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`
    )
    .then((res) => dispatch({ type: GET_QUS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_QUS_ERROR }));
};

export const postScore = (id, data) => (dispatch) => {
  dispatch({ type: POST_SCORE_REQUST });
  return axios
    .patch(`https://mock8server.vercel.app/users/${id}`, data)
    .then((res) => dispatch({ type: POST_SCORE_SUCCESS }))
    .catch((err) => dispatch({ type: POST_SCORE_ERROR }));
};
