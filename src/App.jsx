import { createContext, useEffect, useState } from "react";
import Budget from "./Budget";
import Input from "./Input";
import Expense from "./Expense"

export const myContext = createContext(null);

function App() {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spend, setSpend] = useState(0);
  const [expense, setExpense] = useState([]);

  function addExpense(e,name, cost) {
e.preventDefault()
    setExpense([...expense, { name, cost: parseInt(cost) }]);
    console.log(expense)
  }

  function handleDelete(index) {
    let temp = [...expense];
    temp.splice(index, 1);
    setExpense(temp);
  }
  
  useEffect(() => {
    // re calculate the expeses
    let amount = 0;
    for (let item of expense) {
      amount += item.cost;
    }
    let rm = budget - amount;

    setSpend(amount);
    setRemaining(rm);
  }, [expense]);



  return (
    <myContext.Provider value={{ budget, remaining, spend, addExpense }}>
      <Budget />

      <Input />

      <div>
        {expense.map((item, index) => {
          return <Expense name={item.name} cost={item.cost} key={index} handleDelete={handleDelete} index={index} />;
        })}
      </div>
    </myContext.Provider>
  );
}

export default App;
