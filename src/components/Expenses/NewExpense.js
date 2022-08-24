import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
