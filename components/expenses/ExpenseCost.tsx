import React from "react";
import { Button, Grid, SwipeableDrawer } from "@mui/material";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  min-height: 50vh;
`;

const ExpenseCost = ({ open, toggleDrawer }: any) => {
  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
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
      </SwipeableDrawer>
    </>
  );
};

export default ExpenseCost;
