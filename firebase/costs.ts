import { collection, doc, setDoc } from "firebase/firestore";
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
  };
  // const docRef = doc(db, "costs", "id");
  const newCostRef = doc(collection(db, "costs"));
  setDoc(newCostRef, data);
};
