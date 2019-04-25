import { combineReducers } from "redux";
import postReducer from "./postReducer";
import replyReducer from "./replyReducer";

export default combineReducers({
  posts: postReducer,
  replies: replyReducer
});
