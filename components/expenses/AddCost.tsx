import { Button } from "@mui/material";
import React from "react";
import ExpenseCost from "./ExpenseCost";
import ExpensesTypes from "./ExpensesTypes";
import { useExpenses } from "../../context/ExpensesProvider";

const AddCost = () => {
  const { setTypesDrower } = useExpenses();
  const toggleDrower = () => () => {
    setTypesDrower(true);
  };
  return (
    <>
      <Button variant="contained" onClick={toggleDrower()}>
        Add Cost
      </Button>
      <ExpensesTypes />
      <ExpenseCost />
    </>
  );
};

export default AddCost;
