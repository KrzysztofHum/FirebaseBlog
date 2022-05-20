import React from "react";
import ExpenseCost from "./ExpenseCost";
import ExpensesTypes from "./ExpensesCategories";
import { useExpenses } from "../../context/ExpensesProvider";
import styled from "styled-components";

const StyledButton = styled.button`
  bottom: 50px;
  right: 50px;
  position: absolute;
  border-radius: 100px;
  width: 45px;
  height: 45px;
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
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
