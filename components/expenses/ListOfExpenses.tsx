import React, { useEffect } from "react";
import {
  Typography,
  Box,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useExpenses } from "../../context/ExpensesProvider";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { deleteCosts } from "../../firebase/costs";
import { useUser } from "../../context/UserProvider";
import CategoriesList from "./CategoriesList";
import styled from "styled-components";
import ListOfOverview from "./ListOfOverview";

type ICosts = {
  id: any;
  createdAt: any;
  types: String;
  cost: any;
};

const StyledListItemDate = styled(ListItem)`
  border-top: solid 1px #a9a9a9;
  background-color: #f5f5f5;
`;
const StyledListItemExpenses = styled(ListItem)`
  border-top: solid 1px #a9a9a9;
`;

const StyledListItemText = styled(ListItemText)`
  flex-basis: 100%;
  text-align: center;
`;

const StyledListItemButton = styled(ListItemButton)`
  flex-basis: 100%;
  text-align: center;
`;

const ListOfExpenses = ({ currentView }: any) => {
  const { costs, setCosts, selectedDate } = useExpenses();
  const { user } = useUser();
  const uid = user?.uid;

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const costsRef = query(collection(db, "expenses"), where("uid", "==", uid));
    getDocs(costsRef)
      .then((snapshot) => {
        let costs: any = [];
        snapshot.docs.forEach((doc) => {
          costs.push({ ...doc.data(), id: doc.id });
        });
        setCosts(costs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setCosts, user, uid]);

  const handleDeleteCost = (id: any) => {
    deleteCosts(id);
    setCosts((costs: any) => costs.filter((todo: any) => todo.id !== id));
  };

  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  // const correctCosts = costs
  //   .filter(
  //     (todo: any) =>
  //       (todo.createdAt === null && new Date().getMonth() === month) ||
  //       (new Date(todo.createdAt?.seconds * 1000).getFullYear() === year &&
  //         new Date(todo.createdAt?.seconds * 1000).getMonth() === month)
  //   )
  //   .sort((a, b) => {
  //     return b.createdAt - a.createdAt;
  //   });
  const correctCosts = costs
    .filter(
      (todo: any) =>
        new Date(todo.createdAt).getFullYear() === year &&
        new Date(todo.createdAt).getMonth() === month
    )
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  let totalCost = correctCosts.reduce(function (acc, item) {
    return acc + item.cost;
  }, 0);

  if (currentView === "Categories") {
    return <CategoriesList correctCosts={correctCosts} />;
  }
  if (currentView === "Transactions") {
    let correctData = "";
    return (
      <>
        <Typography>List of Transactions ({totalCost} z??)</Typography>
        <Box>
          <List>
            {correctCosts.map((item: ICosts) => {
              let itemData = "";

              // if (
              //   item.createdAt === null &&
              //   new Date().getMonth() === month &&
              //   new Date().getFullYear === year
              // ) {
              //   itemData = new Date().toDateString();
              // } else if (item.createdAt !== null) {
              //   itemData = new Date(
              //     item.createdAt.seconds * 1000
              //   ).toDateString();
              // } else return;

              itemData = new Date(item.createdAt).toDateString();

              if (correctData !== itemData) {
                correctData = itemData;
                return (
                  <>
                    <StyledListItemDate>
                      <ListItemText>{itemData}</ListItemText>
                    </StyledListItemDate>
                    <StyledListItemExpenses>
                      <StyledListItemText>{item.types}</StyledListItemText>
                      <StyledListItemText>{item.cost} z??</StyledListItemText>
                      <StyledListItemButton>
                        <DeleteIcon onClick={() => handleDeleteCost(item.id)} />
                      </StyledListItemButton>
                    </StyledListItemExpenses>
                  </>
                );
              }
              return (
                <StyledListItemExpenses key={item.id}>
                  <StyledListItemText>{item.types}</StyledListItemText>
                  <StyledListItemText>{item.cost} z??</StyledListItemText>
                  <StyledListItemButton>
                    <DeleteIcon onClick={() => handleDeleteCost(item.id)} />
                  </StyledListItemButton>
                </StyledListItemExpenses>
              );
            })}
          </List>
        </Box>
      </>
    );
  }

  return (
    <>
      <Typography>List of Overview ({totalCost} z??)</Typography>
      <ListOfOverview />
    </>
  );
};

export default ListOfExpenses;
