import React from "react";
import { GET_PRODUCTS } from "./types";

export const getProducts = () => async dispatch => {
  const res = await fetch("/products");
  const data = await res.json();

  dispatch({
    type: GET_PRODUCTS,
    payload: data
  });
};
