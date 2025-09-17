import { useEffect, useReducer, useState } from "react";
import type { spent } from "../types";
import { Graphic } from "./Graphic";
import { Info } from "./Info";
import { Filter } from "./Filter";
import { Spents } from "./Spents";
import { AddSpent } from "./AddSpent";

// --- Reducer ---
type Action =
  | { type: "ADD"; payload: spent }
  | { type: "REMOVE"; payload: string }
  | { type: "RESET" };

type State = {
  spents: spent[];
  spent: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD": {
      const newSpents = [...state.spents, action.payload];
      const newTotal = newSpents.reduce((acc, s) => acc + s.amount, 0);
      return { spents: newSpents, spent: newTotal };
    }
    case "REMOVE": {
      const updated = state.spents.filter((s) => s.id !== action.payload);
      const newTotal = updated.reduce((acc, s) => acc + s.amount, 0);
      return { spents: updated, spent: newTotal };
    }
    case "RESET":
      return { spents: [], spent: 0 };
    default:
      return state;
  }
};

export const Dashboard = ({
  budget,
  setBudget,
}: {
  budget: string;
  setBudget: React.Dispatch<React.SetStateAction<string>>;
}) => {
  // Inicializamos reducer con datos del localStorage
  const [state, dispatch] = useReducer(reducer, {
    spents: JSON.parse(localStorage.getItem("spents") || "[]"),
    spent: 0,
  });

  const [categoryFilter, setCategoryFilter] = useState(
    localStorage.getItem("categoryFilter") || ""
  );

  // Recalcular spent inicial al montar
  useEffect(() => {
    dispatch({ type: "ADD", payload: { id: "", name: "", amount: 0, category: "", date: "" } }); // hack
    state.spents.length === 0 && dispatch({ type: "RESET" });
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("spents", JSON.stringify(state.spents));
  }, [state.spents]);

  useEffect(() => {
    localStorage.setItem("categoryFilter", categoryFilter);
  }, [categoryFilter]);

  return (
    <>
      <div className="flex bg-white w-180 h-80 justify-self-center justify-center gap-10 m-10 p-6 rounded-2xl shadow">
        <Graphic
          spent={state.spent}
          budget={budget}
          setBudget={setBudget}
          setSpent={() => {}} // ya no se usa
        />
        <Info budget={budget} spent={state.spent} dispatch={dispatch} />
      </div>

      <div className="flex bg-white w-180 h-30 justify-self-center gap-10 mb-10 p-8 rounded-2xl shadow">
        <Filter category={categoryFilter} setCategory={setCategoryFilter} />
      </div>

      <div className="flex bg-white w-180 justify-self-center gap-10 p-6 mb-30 rounded-2xl shadow">
        <Spents spents={state.spents} category={categoryFilter} dispatch={dispatch} />
      </div>

      <div className="fixed bottom-6 right-6">
        <AddSpent dispatch={dispatch} />
      </div>
    </>
  );
};
