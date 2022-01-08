import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase";

const traning = () => {
  const colRef = collection(db, "traning");
  getDocs(colRef)
    .then((snapshot) => {
      let traning = [];
      snapshot.docs.forEach((doc) => {
        traning.push({ ...doc.data(), id: doc.id });
      });
      console.log(traning);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return <div>xd</div>;
};

export default traning;
