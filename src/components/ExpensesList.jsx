import React from "react";
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filteredExpenses,
  setFilteredExpenses,
  filter,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length
              ? "Expenses"
              : "There are no added expenses yet"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {expenses.length ? "Expenses" : "There are no added expenses yet"}
          </h2>
          {expenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
