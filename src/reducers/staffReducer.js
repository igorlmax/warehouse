import {ADD_STAFF, DELETE_STAFF, GET_STAFF} from "../actions/types";

const initialState = {
  staff: null
};

export default (state = initialState, action /*action consists of type and payload, passed from the Action*/) => {
  switch (action.type) {
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload
      };
    case ADD_STAFF:
      return {
        ...state,
        staff: [...state.staff, action.payload],
      };
    case DELETE_STAFF:
      return {
        ...state,
        staff: state.staff.filter(log => log.id !== action.payload),

      };

    default:
      return state;
  }
};
