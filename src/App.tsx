import { Budget } from "./components/budget";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

function App() {
  // ✅ Inicializamos desde localStorage
  const [budget, setBudget] = useState(() => {
    return localStorage.getItem("budget") || "";
  });

  const [spent] = useState(() => {
    const saved = localStorage.getItem("spent");
    return saved ? Number(saved) : 0;
  });

  return (
    <>
      <div>
        <h1 className="flex bg-blue-600 text-4xl items-center-safe text-white justify-center h-30 font-bold">
          CALORIES COUNTER
        </h1>
        <Routes>
          <Route
            path="/"
            element={<Budget budget={budget} setBudget={setBudget} spent={spent} />}
          ></Route>
          <Route
            path="/dashboard/:amont"
            element={
              <Dashboard
                budget={budget}
                setBudget={setBudget}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
