import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState('2021')
  const expenses = props.items;

  const expenseItems = expenses.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));

  const selectFilterYearHandler = (filterYear) => {
    setSelectedFilterYear(filterYear)
    console.log(filterYear)
  }

  return (
      <Card className="expenses">
        <ExpensesFilter selected={selectedFilterYear} onSelectFilterYear={selectFilterYearHandler} />
        {expenseItems}
      </Card>
    )
}

export default Expenses;
