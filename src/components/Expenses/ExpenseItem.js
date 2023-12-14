import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
const clickHandler = () => {
  console.log('Deleted');
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
      <button onClick={clickHandler} className="button-Delete">Delete</button>
    </Card>
  );
};

export default ExpenseItem;
