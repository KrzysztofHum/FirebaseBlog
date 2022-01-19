import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
} from "@mui/material";
import styled from "styled-components";
import React from "react";
import TypesOfExpenses from "./TypesOfExpenses";

const StyledGrid = styled(Grid)`
  min-height: 50vh;
`;
const AddCost = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Add Cost
      </Button>
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
              <Button>Income</Button>
            </Grid>
            <Grid item>
              <Button>Expense</Button>
            </Grid>
          </Grid>
          <Grid>
            <TypesOfExpenses />
          </Grid>
          <Grid>Bot</Grid>
          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        </StyledGrid>
      </SwipeableDrawer>
    </>
  );
};

export default AddCost;
