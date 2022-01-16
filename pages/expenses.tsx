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
import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddCost from "../components/expenses/AddCost";
import ListOfExpenses from "../components/expenses/ListOfExpenses";

const StyledAddCostGrid = styled(Grid)`
  justify-content: center;
  display: flex;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
  display: flex;
`;

const expenses = () => {
  return (
    <StyledGrid container spacing={2} direction="column">
      <Grid item>
        <Typography align="center">My Expenses</Typography>
      </Grid>
      <Grid item>
        <ListOfExpenses></ListOfExpenses>
      </Grid>
      <StyledAddCostGrid item>
        <AddCost />
      </StyledAddCostGrid>
    </StyledGrid>
  );
};

export default expenses;
