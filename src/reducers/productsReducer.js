import React from "react";
import { GET_PRODUCTS } from "../actions/types";

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
    default:
      return state;
  }
};
