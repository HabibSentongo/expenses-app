import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const expenses = props.items;
  const expenseItems = expenses.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
