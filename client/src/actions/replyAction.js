import {
  FETCH_ALL_REPLIES,
  CREATE_REPLY,
  REPLIES_LOADING,
  GET_ERRORS
} from "./types";
import axios from "axios";

export const setReplyLoading = () => {
  return {
    type: REPLIES_LOADING
  };
};

// create new post
export const addNewReply = replyInfo => dispatch => {
  axios
    .post("/api/replies/", replyInfo)
    .then(res => {
      dispatch({
        type: CREATE_REPLY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getAllReplies = () => dispatch => {
  dispatch(setReplyLoading());
  axios
    .get("/api/replies/")
    .then(res => {
      dispatch({
        type: FETCH_ALL_REPLIES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
