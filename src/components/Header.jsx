import React from "react";
import NewBudget from "./NewBudget";
import ControlBudget from "./ControlBudget";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
  deleteExpense,
  setExpenses
}) => {
  return (
    <header>
      <h1>Budget Planner</h1>
      {isValidBudget ? (
        <ControlBudget budget={budget} expenses={expenses} deleteExpense={deleteExpense} setExpenses = {setExpenses} setBudget={setBudget} setIsValidBudget={setIsValidBudget}/>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
