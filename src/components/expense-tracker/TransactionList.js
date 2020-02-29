import React from "react";
const TransactionList = () => {
  return (
    <div className="div-border">
      <h4>History</h4>
      <ul>
        <li>
          Cash <span>-$400</span>
          <button>x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
