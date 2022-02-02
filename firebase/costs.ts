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
  cost: any;
  uid: any;
};

export const addCost = ({ types, cost, uid }: AddCostProps) => {
  const data = {
    cost,
    types,
    uid,
    createdAt: serverTimestamp(),
  };
  // const docRef = doc(db, "costs", "id");
  const newCostRef = doc(collection(db, "costs"));
  setDoc(newCostRef, data);
};

export const fetchCosts = () => {
  const costsRef = collection(db, "costs");
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
  // const costsRef = collection(db, "costs", id);
  // deleteDoc(costsRef);
  deleteDoc(doc(db, "costs", id));
};
