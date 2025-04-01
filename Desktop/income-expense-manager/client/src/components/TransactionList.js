import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text} - ₹{transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
