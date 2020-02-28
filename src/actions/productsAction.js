import React from "react";
import { GET_PRODUCTS, SEARCH_PRODUCT } from "./types";

export const getProducts = () => async dispatch => {
  const res = await fetch("/products");
  const data = await res.json();

  dispatch({
    type: GET_PRODUCTS,
    payload: data
  });
};

export const searchProducts = text => async dispatch => {
  const res = await fetch(`/products?q=${text}`);
  const data = await res.json();

  dispatch({
    type: SEARCH_PRODUCT,
    payload: data
  });

  console.log(data);
};
