import { GET_COMMENT_LIST, SET_COMMET_LIST } from "../actions/actionTypes";

const initialState = {
  commentList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT_LIST: {
      return {
        ...state,
        commentList: action.payload,
      };
    }
    case SET_COMMET_LIST: {
      return {
        ...state,
        commentList: action.payload,
      }
    }
    default:
      return state;
  }
}
