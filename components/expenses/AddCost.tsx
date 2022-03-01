import { Icon, IconButton } from "@mui/material";
import React from "react";
import ExpenseCost from "./ExpenseCost";
import ExpensesTypes from "./ExpensesTypes";
import { useExpenses } from "../../context/ExpensesProvider";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(IconButton)`
  bottom: 100px;
  right: 70px;
  position: absolute;
  border-radius: 100px;
  width: 45px;
  height: 45px;
  color: white;
  font-size: 2rem;
  background-color: #556cd6;
  &:hover {
    background-color: #2e4bca;
  }
`;

const AddCost = () => {
  const { setTypesDrower } = useExpenses();
  const toggleDrower = () => () => {
    setTypesDrower(true);
  };
  return (
    <>
      <StyledButton onClick={toggleDrower()}>+</StyledButton>
      <ExpensesTypes />
      <ExpenseCost />
    </>
  );
};

export default AddCost;
