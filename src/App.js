import ExpenseItem from "./components/ExpenseItem";

function App(props) {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: 295.43,
      date: new Date(2020, 7, 13),
      location: "Canada",
    },
    {
      id: "e2",
      title: "Car Insurence",
      amount: 170.37,
      date: new Date(2020, 3, 14),
      location: "Europe",
    },
    {
      id: "e3",
      title: "Car Insurence",
      amount: 200.41,
      date: new Date(2020, 5, 15),
      location: "India",
    },
    {
      id: "e4",
      title: "Car Insurence",
      amount: 390.23,
      date: new Date(2020, 8, 16),
      location: "China",
    },
    {
      id: "e5",
      title: "Car Insurence",
      amount: 490.23,
      date: new Date(2023, 8, 16),
      location: "Russia",
    },
  ];
  return (
    <div>
      <h2>Let's get started!!</h2>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      ></ExpenseItem> */}

      {expenses.map((expense) => (
        <ExpenseItem 
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          />
      
      ))}

      
    </div>
  );
}

export default App;
