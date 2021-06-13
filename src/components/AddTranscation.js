import React, { useRef } from "react";

export default function AddTranscation({ setTransaction }) {
  const Text = useRef();
  const Amount = useRef();

  function addHandler(e) {
    e.preventDefault();
    setTransaction((prev) => {
      let id = prev.length + 1;
      let newTrans = {
        id: id,
        text: Text.current.value,
        amount: Number(Amount.current.value),
      };
      return [...prev, newTrans];
    });
    Text.current.value = "";
    Amount.current.value = "";
  }

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => addHandler(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" ref={Text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" ref={Amount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </React.Fragment>
  );
}
