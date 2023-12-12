import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 11, 12);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 295.45;
  const LocationOfExpenditure = 'Canada';

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{LocationOfExpenditure}</div>
      <div className="expense__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
