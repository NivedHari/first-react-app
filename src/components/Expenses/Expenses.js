import ExpenseItem from './ExpenseItem';
import '../Expenses/Expenses.css'

const Expenses = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurence",
      amount: '$295.43',
      date: new Date(2020, 7, 13),
      location: "Canada",
    },
    {
      id: "e2",
      title: "Car Insurence",
      amount: '$170.37',
      date: new Date(2020, 3, 14),
      location: "Europe",
    },
    {
      id: "e3",
      title: "New Desk",
      amount: '$200.41',
      date: new Date(2020, 5, 15),
      location: "India",
    },
    {
      id: "e4",
      title: "New TV",
      amount: '$390.23',
      date: new Date(2020, 8, 16),
      location: "China",
    },
  ];

  return (
    <div className="centered-container">
      <div className="expenses-container">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
