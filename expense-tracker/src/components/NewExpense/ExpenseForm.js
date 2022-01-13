import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const [isAddExpense, setIsAddExpense] = useState(false);

    //alternative way to do it
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

        //for when you depend on previous state
        setEnteredTitle((prevState) => {
            return e.target.value;
        })
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const cancelFormHandler = (e) => {
        setIsAddExpense(false);
    }

    const showFormHandler = (e) => {
        setIsAddExpense(true)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsAddExpense(false)
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //clear form
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')

        props.onSaveExpenseData(expenseData)
    }
    if (isAddExpense) {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" onChange={dateChangeHandler} value={enteredDate} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelFormHandler}>Kancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    }
    return (
        <div>
            <button onClick={showFormHandler}>Add New Expense</button>
        </div>
    )
};

export default ExpenseForm;
