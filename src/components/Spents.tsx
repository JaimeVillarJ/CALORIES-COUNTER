import type { spent } from "../types";
import { X } from "lucide-react";

type Action = { type: "REMOVE"; payload: string };

type SpentsProps = {
  spents: spent[];
  category: string;
  dispatch: React.Dispatch<Action>;
};

export const Spents = ({ spents, category, dispatch }: SpentsProps) => {
  const filteredSpents = category
    ? spents.filter((item) => item.category === category)
    : spents;

  const handleDelete = (id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold ml-3 mb-10">Spent's List</h1>
      {filteredSpents.length !== 0 ? (
        <>
          {filteredSpents.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full mb-10"
            >
              <div className="flex items-center">
                <img
                  src={`/assets/${item.category}.png`}
                  alt="image"
                  className="h-30 w-30"
                />
                <div className="ml-6">
                  <h1 className="font-bold text-gray-600">{item.category}</h1>
                  <h1>{item.name}</h1>
                  <h1 className="text-sm">{item.date}</h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">{`$${item.amount}`}</h1>
                <button
                  onClick={() => handleDelete(item.id!)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1 className="text-red-700">There Are No Expenses</h1>
      )}
    </div>
  );
};
