import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
    <div className="expense-details-info">
      <div className="expense-details__location">{props.location}</div>
      <div><h2 className="expense-details__title">{props.title}</h2></div>
      
      </div>

      
      <div >
        
        <div className="expense-details__price">{props.amount}</div>
        
      </div>
    </div>
  );
}

export default ExpenseDetails;
