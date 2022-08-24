import React, { useState } from "react";

import './ExpenseForm.css'
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = (event) => {
        setUserInput((userInput) => {
            return ({
                ...userInput,
                enteredTitle: event.target.value,
            })
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((userInput) => {
            return ({
                ...userInput,
                enteredAmount: event.target.value,
            })
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((userInput) => {
            return ({
                ...userInput,
                enteredDate: event.target.value,
            })
        })
    }

    const submitExpenseHandler = (event) => {
        event.preventDefault();

        const newExpense = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate,
        }

        props.onSaveExpenseData(newExpense)

        setUserInput(() => {
            return {
                ...userInput,
                enteredTitle: "",
                enteredAmount: "",
                enteredDate: "",
            }
        })
    }


    return (
        <form onSubmit={submitExpenseHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={userInput.enteredDate} min='2019-01-01' max='2030-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;