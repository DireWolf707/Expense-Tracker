import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTranscation from "./components/AddTranscation";

function App() {
  const [Transaction, setTransaction] = useState([
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);

  function deleteHandler(id) {
    setTransaction((prev) => {
      return prev.filter((trans) => trans.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Balance list={Transaction} />
        <IncomeExpenses list={Transaction} />
        <TransactionList list={Transaction} deleteHandler={deleteHandler} />
        <AddTranscation setTransaction={setTransaction} />
      </div>
    </div>
  );
}

export default App;
