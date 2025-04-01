import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h3>Income: ₹{income}</h3>
      <h3>Expenses: ₹{Math.abs(expense)}</h3>
    </div>
  );
};

export default IncomeExpenses;
