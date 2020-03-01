import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="div-border">
      <h4>History</h4>
      <ul>
          {transactions.map(transaction => (<li>{transaction.text} <span>{transaction.amount}</span><button>x</button></li>))}
        <li>
          Cash <span>-$400</span>
          <button>x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
