import React from "react";

import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Health",
      amount: "$759",
      date: new Date(),
    },
    {
      title: "Rent",
      amount: "$584",
      date: new Date(),
    },
    {
      title: "Transport",
      amount: "$4059",
      date: new Date(),
    },
    {
      title: "Roadtrip",
      amount: "$948",
      date: new Date(),
    },
  ];

  const saveNewExpenseHandler = (newExpenseData) => {
    const newExpense = { ...newExpenseData };
    console.log(newExpense);
    expenses.push(newExpense);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={saveNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
