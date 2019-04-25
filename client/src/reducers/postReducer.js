import { FETCH_ALL_POSTS, CREATE_POST, POSTS_LOADING } from "../actions/types";

const initialState = {
  allPosts: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
        loading: false
      };
    default:
      return state;
  }
};
