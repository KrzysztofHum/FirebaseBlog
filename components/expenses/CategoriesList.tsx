import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AbcIcon from "@mui/icons-material/Abc";
import FlightIcon from "@mui/icons-material/Flight";
import { useExpenses } from "../../context/ExpensesProvider";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: stretch;
`;

const StyledCostGrid = styled.div`
  border: 1rem solid #3eb489;
  padding: 1.5rem;
  border-radius: 50%;
  grid-column: 2/4;
  grid-row: 2/4;
  min-width: 10rem;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled(ListItemButton)`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  background-color: #3eb489;
  border-radius: 50%;
  min-height: 40px;
  min-width: 40px;
`;
const CategoriesList = () => {
  const { costs } = useExpenses();
  const result = costs.reduce((acc, { types, cost }) => {
    !acc[types] ? (acc[types] = cost) : (acc[types] += cost);
    return acc;
  }, {});
  let totalCost = costs.reduce(function (acc, item) {
    return acc + item.cost;
  }, 0);
  return (
    <StyledContainer>
      <StyledListItem title="foodstuffs">
        <ListItemText>foodstuffs</ListItemText>
        <StyledListItemIcon>
          <ShoppingBasketIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.foodstuffs || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="restaurant">
        <ListItemText>restaurant</ListItemText>
        <StyledListItemIcon>
          <RestaurantIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.restaurant || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="transport">
        <ListItemText>transport</ListItemText>
        <StyledListItemIcon>
          <DirectionsBusIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.transport || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="health">
        <ListItemText>health</ListItemText>
        <StyledListItemIcon>
          <HealthAndSafetyIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.health || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="trips">
        <ListItemText>trips</ListItemText>
        <StyledListItemIcon>
          <FlightIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.trips || 0} $</ListItemText>
      </StyledListItem>
      <StyledCostGrid>
        <Grid>Expenses</Grid>
        <Grid color="red">{totalCost || 0} $</Grid>
      </StyledCostGrid>
      <StyledListItem title="another">
        <ListItemText>another</ListItemText>
        <StyledListItemIcon>
          <AbcIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.another || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="another">
        <ListItemText>another</ListItemText>
        <StyledListItemIcon>
          <AbcIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.another || 0} $</ListItemText>
      </StyledListItem>
      <StyledListItem title="another">
        <ListItemText>another</ListItemText>
        <StyledListItemIcon>
          <AbcIcon color="disabled" />
        </StyledListItemIcon>
        <ListItemText>{result.another || 0} $</ListItemText>
      </StyledListItem>
    </StyledContainer>
  );
};

export default CategoriesList;
