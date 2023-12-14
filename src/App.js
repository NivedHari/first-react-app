import Expenses from "../src/components/Expenses/Expenses";
import '../src/components/NewExpense/NewExpense'
import NewExpense from "../src/components/NewExpense/NewExpense";

const App = (props) => {
  return (
    <div>
      <NewExpense/>
      <Expenses />
    </div>
  );
};

export default App;
