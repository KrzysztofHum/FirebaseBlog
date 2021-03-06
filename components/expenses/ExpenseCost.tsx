import React, { useState } from "react";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";
import { useUser } from "../../context/UserProvider";
import { addCost } from "../../firebase/costs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

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

const ExpenseCost = () => {
  const { costDrower, setCostDrower, types, setCosts } = useExpenses();
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
    const costsRef = query(collection(db, "expenses"), where("uid", "==", uid));
    getDocs(costsRef)
      .then((snapshot) => {
        let costs: any = [];
        snapshot.docs.forEach((doc) => {
          costs.push({ ...doc.data(), id: doc.id });
        });
        console.log(costs);
        setCosts(costs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Drawer anchor="bottom" open={costDrower} onClose={toggleDrower()}>
        <StyledGrid>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Button>Got??wka</Button>
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
            <Typography variant="h6">{cost} z??</Typography>
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
              <Button>{"Z??"}</Button>
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
