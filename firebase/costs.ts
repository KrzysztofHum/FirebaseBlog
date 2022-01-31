import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

type AddCostProps = {
  types: any;
  cost: any;
};

export const addCost = ({ types, cost }: AddCostProps) => {
  const data = {
    cost,
    types,
  };
  // const docRef = doc(db, "costs");
  const newCostRef = doc(collection(db, "costs"));
  setDoc(newCostRef, data);
};
