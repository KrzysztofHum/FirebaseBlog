import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import ExpenseCost from "./ExpenseCost";
import ExpensesTypes from "./ExpensesTypes";

const AddCost = () => {
  const [openExpensesTypes, setOpenExpensesTypes] = useState(false);

  const [openExpenseCost, setOpenExpenseCost] = useState(false);

  const toggleExpensesTypes = (newOpen: boolean) => () => {
    console.log(newOpen);
    setOpenExpensesTypes(newOpen);
  };

  const toggleExpenseCost = (newOpen: boolean) => () => {
    setOpenExpenseCost(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={toggleExpensesTypes(true)}>
        Add Cost
      </Button>
      <ExpensesTypes
        open={openExpensesTypes}
        toggleDrawer={toggleExpensesTypes}
      />
      <ExpenseCost open={openExpenseCost} toggleDrawer={toggleExpenseCost} />
    </>
  );
};

export default AddCost;
