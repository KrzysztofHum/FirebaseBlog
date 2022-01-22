import React from "react";
import { Button, Drawer, Grid } from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";

const StyledGrid = styled(Grid)`
  min-height: 50vh;
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
              <Button>Zakupy</Button>
            </Grid>
          </Grid>
          <Grid>
            <span>Wydatek</span>
            <span>0 zł</span>
          </Grid>
          <Grid>
            <span>Notatki...</span>
          </Grid>
          <Grid>Kalkulator</Grid>
          <Grid> Dzisiaj, 22 sty 2022</Grid>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpenseCost;
