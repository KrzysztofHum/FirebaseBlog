import React, { useEffect, useState } from "react";
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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

type ICosts = {
  id: any;
  createdAt: any;
  types: String;
  cost: any;
};

const ListOfExpenses = () => {
  const { costDrower } = useExpenses();
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    const costsRef = collection(db, "costs");
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
  }, [costDrower]);
  return (
    <>
      <Typography>List of Expenses</Typography>
      <Box>
        <List>
          {costs.map((item: ICosts) => {
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
                  <DeleteIcon />
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
