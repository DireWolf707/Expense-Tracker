import React from "react";

export default function Balance({ list }) {
  let amounts = 0;
  list.forEach((transaction) => {
    amounts += transaction.amount;
  });
  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1>${amounts}</h1>
    </React.Fragment>
  );
}
