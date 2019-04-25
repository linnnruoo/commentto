import {
  FETCH_ALL_REPLIES,
  CREATE_REPLY,
  REPLIES_LOADING
} from "../actions/types";

const initialState = {
  allReplies: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPLIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALL_REPLIES: {
      return {
        ...state,
        allReplies: action.payload,
        loading: false
      };
    }
    case CREATE_REPLY:
      return {
        ...state,
        allReplies: [...state.allReplies, action.payload],
        loading: false
      };
    default:
      return state;
  }
};
