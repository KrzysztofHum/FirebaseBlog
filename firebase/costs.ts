import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

type AddCostProps = {
  types: String;
  costNumber: Number;
  uid: any;
};

export const addCost = ({ types, costNumber, uid }: AddCostProps) => {
  const data = {
    cost: costNumber,
    types,
    uid,
    createdAt: Date.now(),
    // createdAt: new Date(2022, 5, 10, 14, 39, 5),
  };
  // const docRef = doc(db, "costs", "id");
  const newCostRef = doc(collection(db, "expenses"));
  setDoc(newCostRef, data);
};

export const fetchCosts = () => {
  const costsRef = collection(db, "expenses");
  getDocs(costsRef)
    .then((snapshot) => {
      let costs: any = [];
      snapshot.docs.forEach((doc) => {
        costs.push({ ...doc.data(), id: doc.id });
      });
      console.log(costs);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const deleteCosts = (id) => {
  // const costsRef = collection(db, "expenses", id);
  // deleteDoc(costsRef);
  deleteDoc(doc(db, "expenses", id));
};
