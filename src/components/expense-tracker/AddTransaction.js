import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="div-border">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
