// import { collection, getDocs } from "firebase/firestore";
// import React from "react";
// import { db } from "../firebase/firebase";

// const traning = () => {
//   const colRef = collection(db, "traning");
//   getDocs(colRef)
//     .then((snapshot) => {
//       let traning = [];
//       snapshot.docs.forEach((doc) => {
//         traning.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(traning);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
//   return <div>xd</div>;
// };

// export default traning;
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import AddCost from "../components/expenses/AddCost";
import ListOfExpenses from "../components/expenses/ListOfExpenses";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";

const StyledAddCostGrid = styled(Grid)`
  justify-content: center;
  display: flex;
`;

const StyledListItemBtn = styled(ListItemButton)`
  display: flex;
  flex-direction: column;
`;

const Expenses = () => {
  const [currentView, setCurrentView] = useState("Categories");

  return (
    <Grid container direction="column">
      <Grid container>
        <Grid item xs={4}>
          <StyledListItemBtn onClick={() => setCurrentView("Categories")}>
            <ListItemIcon>
              <CategoryIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </StyledListItemBtn>
        </Grid>
        <Grid item xs={4}>
          <StyledListItemBtn onClick={() => setCurrentView("Transactions")}>
            <ListItemIcon>
              <ReceiptIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </StyledListItemBtn>
        </Grid>
        <Grid item xs={4}>
          <StyledListItemBtn onClick={() => setCurrentView("Overview")}>
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </StyledListItemBtn>
        </Grid>
      </Grid>
      <Grid item>
        <Typography align="center">My Expenses</Typography>
      </Grid>
      <Grid item>
        <ListOfExpenses currentView={currentView}></ListOfExpenses>
      </Grid>
      <StyledAddCostGrid item>
        <AddCost />
      </StyledAddCostGrid>
    </Grid>
  );
};

export default Expenses;
