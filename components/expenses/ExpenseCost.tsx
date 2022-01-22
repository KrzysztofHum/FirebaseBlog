import React from "react";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";

const StyledGrid = styled(Grid)`
  min-height: 50vh;
`;

const StyledTypographyFooter = styled(Typography)`
  background-color: #e6e4e4;
  text-align: center;
`;

const ExpenseCost = () => {
  const { costDrower, setCostDrower } = useExpenses();

  const toggleDrower = () => () => {
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
                  <Typography>foodstoofs</Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <span>Wydatek</span>
            <Typography variant="h6">0 zł</Typography>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <span>Notatki...</span>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Button>7</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>8</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>9</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>DELETE</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>4</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>5</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>6</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>DATA</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>1</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>2</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>3</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>zł</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>+</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>-</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>0</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>,</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>/</Button>
            </Grid>
            <Grid item xs={3}>
              <Button>*</Button>
            </Grid>
            <Grid item xs={6}>
              <Button>Confirm</Button>
            </Grid>
          </Grid>
          <StyledTypographyFooter>Sobota, 22 sty 2022</StyledTypographyFooter>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpenseCost;
