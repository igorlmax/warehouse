import { combineReducers } from "redux";
import logReducer from "./logReducer";
import staffReducer from "./staffReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  log: logReducer,
  staff: staffReducer,
  products: productsReducer
});
