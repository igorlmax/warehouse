import { ADD_LOG, ADD_STAFF, GET_STAFF, LOGS_ERROR } from "./types";
import { setLoading } from "./logActions";

// Get all Staff
export const getStaff = () => async dispatch => {
  const res = await fetch("/techs");
  const data = await res.json();

  dispatch({
    type: GET_STAFF,
    payload: data
  });
};

// Add new Staff
export const addStaff = staff => async dispatch => {

  const res = await fetch("/techs", {
    method: "POST",
    body: JSON.stringify(staff),
    headers: { "Content-Type": "application/json" }
  });
  const data = await res.json();

  dispatch({
    type: ADD_STAFF,
    payload: data
  });
};
