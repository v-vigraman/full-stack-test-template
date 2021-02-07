import { GET_COMMENT_LIST, SET_COMMET_LIST, API } from "./actionTypes";

export const getComments = list => {
    return apiAction({
        url: "/comments",
        method: "GET",
        onSuccess: setComments,
        label: GET_COMMENT_LIST,
    });
};

export const setComments = (data) => {
    return {
      type: SET_COMMET_LIST,
      payload: data
    };
}


const apiAction = ({
    url = "",
    method = "GET",
    data = null,
    onSuccess = () => {},
    label = "",
  }) => {
    return {
      type: API,
      payload: {
        url,
        method,
        data,
        onSuccess,
        label,
      }
    };
  }
  