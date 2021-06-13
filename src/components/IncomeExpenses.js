import React from "react";

export default function IncomeExpenses({ list }) {
  const amounts = list.map((transatcion) => transatcion.amount);
  const income = amounts
    .filter((amount) => amount >= 0)
    .reduce((a, b) => a + b, 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
}
