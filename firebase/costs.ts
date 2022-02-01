import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

type AddCostProps = {
  types: any;
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
