
type FilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

export const Filter = ({ category, setCategory }: FilterProps) => {
  return (
    <div className="flex gap-2 items-center ">
      <label htmlFor="category" className="font-bold text-gray-700">
        Spents Filter:
      </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-lg h-10 w-135 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};
