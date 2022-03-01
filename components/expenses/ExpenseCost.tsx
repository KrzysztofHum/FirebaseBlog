import React, { useState } from "react";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";
import { useUser } from "../../context/UserProvider";
import { addCost } from "../../firebase/costs";

const StyledGrid = styled(Grid)`
  min-height: 50vh;
`;

const StyledTypographyFooter = styled(Typography)`
  background-color: #dddcdc;
  text-align: center;
`;

const StyledGridNotes = styled(Grid)`
  border-top: solid 0.1px #eeeeee;
  padding: 1rem;
`;

const StyledGridBtn = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.1px #dddcdc;
`;

const StyledGridConfirm = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.1px #dddcdc;
`;

// const btnValues = [
//   [7, 8, 9, "DELETE"],
//   [4, 5, 6, "DATA"],
//   [1, 2, 3, "ZŁ"],
//   [0, ","],
// ];

const ExpenseCost = () => {
  const { costDrower, setCostDrower, types } = useExpenses();
  const { user } = useUser();
  const uid = user?.uid;

  const [cost, setCost] = useState("");

  const toggleDrower = () => () => {
    setCostDrower(false);
    setCost("");
  };

  const handleClick = (e: any) => {
    setCost("");
    setCost(cost.concat(e));
  };

  //backSpace
  const backSpace = () => {
    setCost(cost.slice(0, -1));
  };

  const handleAddCost = () => {
    const costNumber = parseInt(cost);
    addCost({ types, costNumber, uid });
    setCost("");
    setCostDrower(false);
  };

  return (
    <>
      <Drawer anchor="bottom" open={costDrower} onClose={toggleDrower()}>
        <StyledGrid>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Button>Gotówka</Button>
            </Grid>
            <Grid item>
              <Button>
                <Grid>
                  <span>To category</span>
                  <Typography>{types}</Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <span>Cost</span>
            <Typography variant="h6">{cost} zł</Typography>
          </Grid>
          <StyledGridNotes container direction="column" alignItems="center">
            <span>Notes...</span>
          </StyledGridNotes>
          <Grid container>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(7)}>{7}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(8)}>{8}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(9)}>{9}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => backSpace()}>{"DELETE"}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(4)}>{4}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(5)}>{5}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(6)}>{6}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button>{"DATA"}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(1)}>{1}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(2)}>{2}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(3)}>{3}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button>{"ZŁ"}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(0)}>{0}</Button>
            </StyledGridBtn>
            <StyledGridBtn item xs={3}>
              <Button onClick={() => handleClick(",")}>{","}</Button>
            </StyledGridBtn>
            <StyledGridConfirm item xs={6}>
              <Button onClick={() => handleAddCost()}>CONFIRM</Button>
            </StyledGridConfirm>
          </Grid>
          <StyledTypographyFooter>Sobota, 22 sty 2022</StyledTypographyFooter>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpenseCost;
