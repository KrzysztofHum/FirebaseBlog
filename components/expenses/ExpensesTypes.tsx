import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AbcIcon from "@mui/icons-material/Abc";
import FlightIcon from "@mui/icons-material/Flight";
import {
  Button,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";

const expensesTypes = [
  {
    label: "foodstuffs",
    icon: <ShoppingBasketIcon color="primary" />,
    price: "0 $",
  },
  {
    label: "restaurant",
    icon: <RestaurantIcon color="primary" />,
    price: "10 $",
  },
  {
    label: "transport",
    icon: <DirectionsBusIcon color="primary" />,
    price: "5 $",
  },
  {
    label: "health",
    icon: <HealthAndSafetyIcon color="primary" />,
    price: "3 $",
  },
  {
    label: "trips",
    icon: <FlightIcon color="primary" />,
    price: "33 $",
  },
  {
    label: "another",
    icon: <AbcIcon color="primary" />,
    price: "44 $",
  },
];

const StyledGrid = styled(Grid)`
  min-height: 50vh;
`;

const StyledList = styled(List)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledListItem = styled(ListItemButton)`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const ExpensesTypes = () => {
  const { typesDrower, setTypesDrower, setTypes, setCostDrower } =
    useExpenses();

  const toggleSelectionType = (type: any) => () => {
    setTypesDrower(false);
    setTypes(type);
    setCostDrower(true);
  };

  const toggleDrower = () => () => {
    setTypesDrower(false);
  };

  return (
    <>
      <Drawer anchor="bottom" open={typesDrower} onClose={toggleDrower()}>
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
            <StyledList>
              {expensesTypes.map(({ label, icon, price }: any) => (
                <StyledListItem
                  title={label}
                  key={label}
                  onClick={toggleSelectionType(label)}
                >
                  <ListItemText>{label}</ListItemText>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{price}</ListItemText>
                </StyledListItem>
              ))}
            </StyledList>
          </Grid>
          <Grid>Bot</Grid>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpensesTypes;
