import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  POSTS_LOADING,
  GET_ERRORS
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const setPostLoading = () => {
  return {
    type: POSTS_LOADING
  };
};

// create new post
export const createNewPost = postInfo => dispatch => {
  axios
    .post("/api/posts/", postInfo)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      });
      if (res.status === 200) toast("New Post Created!");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getAllPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts/")
    .then(res => {
      dispatch({
        type: FETCH_ALL_POSTS,
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
