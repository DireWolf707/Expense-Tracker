import React from "react";

export default function TransactionList({ list, deleteHandler }) {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {list.map((transaction) => {
          return (
            <li
              key={transaction.id}
              className={transaction.amount < 0 ? "minus" : "plus"}
            >
              {transaction.text}
              <span>
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount)}
              </span>
              <button
                onClick={() => deleteHandler(transaction.id)}
                className="delete-btn"
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
