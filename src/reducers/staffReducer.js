import { GET_STAFF } from "../actions/types";

const initialState = {
  staff: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload
      };

    default:
      return state;
  }
};
