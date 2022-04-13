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
  selectedDate: any;
  setSelectedDate: any;
};

type AuxProps = {
  children: ReactChild | ReactChildren;
};

export const ExpensesContext = createContext<Partial<Context>>({});

export default function ExpensesProvider({ children }: AuxProps) {
  const [typesDrower, setTypesDrower] = useState(false);
  const [costDrower, setCostDrower] = useState(false);
  const [types, setTypes] = useState("");
  const [costs, setCosts] = useState([]);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <ExpensesContext.Provider
      value={{
        typesDrower,
        setTypesDrower,
        costDrower,
        setCostDrower,
        types,
        setTypes,
        costs,
        setCosts,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpensesContext);
