const ExpenseForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    console.log("Form Values:", formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
