import React, { useState } from "react";

import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler__Amount = () => {
    setAmount('$100');
    console.log('Amount Changed');
  }

  const clickHandler__title = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={amount}
      />
      <button onClick={clickHandler__Amount} className="button-amount">Change Amount</button>
      <button onClick={clickHandler__title} className="button-title">Change Title</button>
      <ExpenseForm />
    </Card>
  );
};

export default ExpenseItem;
