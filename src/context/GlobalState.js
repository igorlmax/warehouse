import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Toy", amount: -20 },
    { id: 2, text: "Slary", amount: 170 },
    { id: 3, text: "rent", amount: -50 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

/* useContext is React Hook*/
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
