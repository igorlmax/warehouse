import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="div-border">
      <div>
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
