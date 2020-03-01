import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import Products from "./components/products/Products";
import Supplier from "./components/suppliers/Supplier";
import ExpenseTracker from "./components/expense-tracker/ExpenseTracker";

const App = () => {
  useEffect(() => {
    // initialize materialize-js
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="container">
        <ExpenseTracker />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
        <hr />
        <Products />
        <hr />
        <Supplier />
      </div>
    </Fragment>
  );
};

export default App;
