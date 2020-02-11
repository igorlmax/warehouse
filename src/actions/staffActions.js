import { GET_STAFF } from "./types";

export const getStaff = () => async dispatch => {
  const res = await fetch("/techs");
  const data = await res.json();

  dispatch({
    type: GET_STAFF,
    payload: data
  });
};
