import {ADD_STAFF, DELETE_STAFF, GET_STAFF} from "./types";

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

// Delete Staff
export const deleteStaff = id => async dispatch => {
  await fetch(`/techs/${id}`, {
    method: "DELETE"
  });

  dispatch({
    type: DELETE_STAFF,
    payload: id
  });
};
