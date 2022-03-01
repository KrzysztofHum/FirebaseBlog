import React, { useEffect, useState } from "react";
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
  SwipeableDrawer,
} from "@mui/material";
import styled from "styled-components";
import { useExpenses } from "../../context/ExpensesProvider";

// const expensesTypes = [
//   {
//     label: "foodstuffs",
//     icon: <ShoppingBasketIcon color="primary" />,
//     price: "0 zł",
//   },
//   {
//     label: "restaurant",
//     icon: <RestaurantIcon color="primary" />,
//     price: "10 zł",
//   },
//   {
//     label: "transport",
//     icon: <DirectionsBusIcon color="primary" />,
//     price: "5 zł",
//   },
//   {
//     label: "health",
//     icon: <HealthAndSafetyIcon color="primary" />,
//     price: "3 zł",
//   },
//   {
//     label: "trips",
//     icon: <FlightIcon color="primary" />,
//     price: "33 zł",
//   },
//   {
//     label: "another",
//     icon: <AbcIcon color="primary" />,
//     price: "44 zł",
//   },
// ];


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
  const { typesDrower, setTypesDrower, setTypes, setCostDrower, costs } =
    useExpenses();

  const result = costs.reduce((acc, { types, cost }) => {
    !acc[types] ? (acc[types] = cost) : (acc[types] += cost);
    return acc;
  }, {});

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
              {/* {expensesTypes.map(({ label, icon, price }: any) => (
                <StyledListItem
                  title={label}
                  key={label}
                  onClick={toggleSelectionType(label)}
                >
                  <ListItemText>{label}</ListItemText>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{price}</ListItemText>
                </StyledListItem>
              ))} */}
              <StyledListItem
                title="foodstuffs"
                onClick={toggleSelectionType("foodstuffs")}
              >
                <ListItemText>foodstuffs</ListItemText>
                <ListItemIcon>
                  <ShoppingBasketIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.foodstuffs || 0} $</ListItemText>
              </StyledListItem>
              <StyledListItem
                title="restaurant"
                onClick={toggleSelectionType("restaurant")}
              >
                <ListItemText>restaurant</ListItemText>
                <ListItemIcon>
                  <RestaurantIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.restaurant || 0} $</ListItemText>
              </StyledListItem>
              <StyledListItem
                title="transport"
                onClick={toggleSelectionType("transport")}
              >
                <ListItemText>transport</ListItemText>
                <ListItemIcon>
                  <DirectionsBusIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.transport || 0} $</ListItemText>
              </StyledListItem>
              <StyledListItem
                title="health"
                onClick={toggleSelectionType("health")}
              >
                <ListItemText>health</ListItemText>
                <ListItemIcon>
                  <HealthAndSafetyIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.health || 0} $</ListItemText>
              </StyledListItem>
              <StyledListItem
                title="trips"
                onClick={toggleSelectionType("trips")}
              >
                <ListItemText>trips</ListItemText>
                <ListItemIcon>
                  <FlightIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.trips || 0} $</ListItemText>
              </StyledListItem>
              <StyledListItem
                title="another"
                onClick={toggleSelectionType("another")}
              >
                <ListItemText>another</ListItemText>
                <ListItemIcon>
                  <AbcIcon color="primary" />
                </ListItemIcon>
                <ListItemText>{result.another || 0} $</ListItemText>
              </StyledListItem>
            </StyledList>
          </Grid>
          <Grid>Bot</Grid>
        </StyledGrid>
      </Drawer>
    </>
  );
};

export default ExpensesTypes;
