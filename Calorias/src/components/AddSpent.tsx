import { useState } from "react";
import type { spent } from "../types";

type Action = { type: "ADD"; payload: spent };

interface AddSpendtProps {
  dispatch: React.Dispatch<Action>;
}

export const AddSpent = ({ dispatch }: AddSpendtProps) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function handleClick() {
    setShow(!show);
  }

  function add() {
    const newSpent: spent = {
      id: crypto.randomUUID(),
      name,
      amount,
      category,
      date,
    };

    dispatch({ type: "ADD", payload: newSpent });

    setName("");
    setAmount(0);
    setCategory("");
    setDate("");
    setShow(false);
  }

  return (
    <div>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center ">
          <div className="bg-white rounded-2xl shadow-lg w-150 p-6 relative">
            <button
              onClick={handleClick}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>

            <h1 className="text-xl font-bold text-blue-600 mb-4">Register Spent</h1>

            <div className="flex flex-col gap-3">
              <div>
                <label className="block font-semibold mb-1">Spent's name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Add spent's name"
                  className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Amount:</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Select an option --</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Home">Home</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Other_spent">Other spent</option>
                  <option value="Subscribe">Subscribe</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Spent's date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={add}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition duration-200 cursor-pointer"
              >
                Register spent
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleClick}
        className="flex bg-blue-600 justify-center content-center font-bold text-3xl text-white w-12 h-12 rounded-full hover:bg-blue-500 cursor-pointer transition duration-200 shadow-lg"
      >
        +
      </button>
    </div>
  );
};
