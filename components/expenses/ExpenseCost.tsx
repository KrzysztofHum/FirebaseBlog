import React, { useState } from "react";
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

  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult("");
    setResult(result.concat(e.target.name));
  };

  // clear
  const clear = () => {
    setResult("");
  };

  //backSpace
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  //calculate
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(1));
    } catch (error) {
      setResult("invalid format");
    }
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
            <span>Cost</span>
            <Typography variant="h6">{result} zł</Typography>
          </Grid>
          <Grid container direction="column" alignItems="center">
            <span>Notes...</span>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="7">
                7
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="8">
                8
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="9">
                9
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={clear}>DELETE</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="4">
                4
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="5">
                5
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="6">
                6
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button>DATA</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="1">
                1
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="2">
                2
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="3">
                3
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button>zł</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="+">
                +
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="-">
                -
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="0">
                0
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name=",">
                ,
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="/">
                /
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleClick} name="*">
                *
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={calc}>Confirm</Button>
            </Grid>
          </Grid>
          <StyledTypographyFooter>Sobota, 22 sty 2022</StyledTypographyFooter>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpenseCost;
