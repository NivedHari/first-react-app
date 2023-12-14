import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        const newTitle = event.target.value
        setEnteredTitle(newTitle);
        console.log("Entered Title : ",newTitle);
    }

    const amountChangeHandler = (event) => {
        const newAmount = event.target.value;
        setEnteredAmount(newAmount);
        console.log("Entered Amount : ",newAmount);
    }
    
    const dateChangeHandler = (event) => {
        const newDate = event.target.value;
        setEnteredDate(newDate);
        console.log("Entered Date : ",newDate);
    }

  return <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" name="amount" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" name="date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>;
};

export default ExpenseForm;
