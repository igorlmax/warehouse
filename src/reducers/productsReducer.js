import React from "react";
import { GET_PRODUCTS, SEARCH_PRODUCT } from "../actions/types";

const initialState = {
  products: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
