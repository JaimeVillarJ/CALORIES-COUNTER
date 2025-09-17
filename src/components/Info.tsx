import type { BudgetPercentProps } from "../types";

type Action = { type: "RESET" };

export const Info = ({
  budget,
  spent,
  dispatch,
}: BudgetPercentProps & { dispatch: React.Dispatch<Action> }) => {
  const handleReset = () => {
    localStorage.removeItem("spents");
    localStorage.removeItem("categoryFilter");
    dispatch({ type: "RESET" });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleReset}
        className="bg-rose-500 text-white font-bold w-80 h-10 rounded-sm"
      >
        RESTART APP
      </button>
      <div className="flex justify-center font-bold text-lg m-4">
        <h1 className="text-blue-700">Budget:</h1>
        <h1>{`$${budget}`}</h1>
      </div>
      <div className="flex justify-center font-bold text-lg m-4">
        <h1 className="text-blue-700">Available:</h1>
        <h1>{`$${Number(budget) - spent}`}</h1>
      </div>
      <div className="flex justify-center font-bold text-lg m-4">
        <h1 className="text-blue-700">Spent:</h1>
        <h1>{`$${spent}`}</h1>
      </div>
    </div>
  );
};
