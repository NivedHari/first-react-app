import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;