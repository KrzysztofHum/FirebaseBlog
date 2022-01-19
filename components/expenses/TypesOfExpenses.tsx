import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AbcIcon from "@mui/icons-material/Abc";
import FlightIcon from "@mui/icons-material/Flight";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";

const types = [
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

const StyledList = styled(List)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledListItem = styled(ListItemButton)`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const TypesOfExpenses = () => {
  return (
    <>
      <StyledList>
        {types.map(({ label, icon, price }) => (
          <StyledListItem title={label} key={label}>
            <ListItemText>{label}</ListItemText>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{price}</ListItemText>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default TypesOfExpenses;
