import "../Expenses/ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <div className="container">
      <div className="expense-details__title">{props.title}</div>
      <div className="expense-details__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;
