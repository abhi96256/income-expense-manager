import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h2>Your Balance: ₹{total}</h2>
    </div>
  );
};

export default Balance;
