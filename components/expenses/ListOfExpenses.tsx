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

type ICosts = {
  id: any;
  createdAt: any;
  types: String;
  cost: any;
};

const ListOfExpenses = ({ currentView }: any) => {
  const { costs, setCosts, costDrower, selectedDate } = useExpenses();
  const { user } = useUser();
  const uid = user?.uid;

  let totalCost = costs.reduce(function (acc, item) {
    return acc + item.cost;
  }, 0);

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const costsRef = query(collection(db, "costs"), where("uid", "==", uid));
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
  }, [setCosts, costDrower, user, uid, costs]);

  const handleDeleteCost = (id: any) => {
    deleteCosts(id);
    setCosts((costs: any) => costs.filter((todo: any) => todo.id !== id));
  };

  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  console.log(month);
  console.log(year);
  const correctCosts = costs.filter(
    (todo: any) =>
      todo.createdAt !== null &&
      new Date(todo.createdAt.seconds * 1000).getFullYear() === year &&
      new Date(todo.createdAt.seconds * 1000).getMonth() === month
  );
  if (currentView === "Categories") {
    return <CategoriesList />;
  }
  if (currentView === "Transactions") {
    return (
      <>
        <Typography>List of Transactions ({totalCost} zł)</Typography>
        <Box>
          <List>
            {correctCosts.map((item: ICosts) => {
              return (
                <ListItem key={item.id}>
                  <ListItemText>
                    {item.createdAt === null
                      ? new Date().toDateString()
                      : new Date(item.createdAt.seconds * 1000).toDateString()}
                  </ListItemText>
                  <ListItemText>{item.types}</ListItemText>
                  <ListItemText>{item.cost} zł</ListItemText>
                  <ListItemButton>
                    <DeleteIcon onClick={() => handleDeleteCost(item.id)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </>
    );
  }

  return (
    <>
      <Typography>List of Overview ({totalCost} zł)</Typography>
      <Box>
        <List>
          {correctCosts.map((item: ICosts) => {
            return (
              <ListItem key={item.id}>
                <ListItemText>
                  {item.createdAt === null
                    ? new Date().toDateString()
                    : new Date(item.createdAt.seconds * 1000).toDateString()}
                </ListItemText>
                <ListItemText>{item.types}</ListItemText>
                <ListItemText>{item.cost} zł</ListItemText>
                <ListItemButton>
                  <DeleteIcon onClick={() => handleDeleteCost(item.id)} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default ListOfExpenses;
