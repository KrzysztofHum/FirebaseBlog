import {
  createContext,
  ReactChild,
  ReactChildren,
  useContext,
  useState,
} from "react";

type Context = {
  typesDrower: any;
  setTypesDrower: any;
  costDrower: any;
  setCostDrower: any;
  types: any;
  setTypes: any;
  costs: any;
  setCosts: any;
};

type AuxProps = {
  children: ReactChild | ReactChildren;
};

export const ExpensesContext = createContext<Partial<Context>>({});

export default function ExpensesProvider({ children }: AuxProps) {
  const [typesDrower, setTypesDrower] = useState(false);
  const [costDrower, setCostDrower] = useState(false);
  const [types, setTypes] = useState("");

  return (
    <ExpensesContext.Provider
      value={{
        typesDrower,
        setTypesDrower,
        costDrower,
        setCostDrower,
        types,
        setTypes,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpensesContext);