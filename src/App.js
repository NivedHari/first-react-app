import React, { useState } from "react";
import "../src/components/NewExpense/NewExpense";
import NewExpense from "../src/components/NewExpense/NewExpense";
import "../src/components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurence",
    amount: "295.43",
    date: new Date(2020, 7, 13),
  },
  {
    id: "e2",
    title: "New Desk",
    amount: "200.41",
    date: new Date(2020, 5, 15),
  },
  {
    id: "e3",
    title: "New TV",
    amount: "390.23",
    date: new Date(2020, 8, 16),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
