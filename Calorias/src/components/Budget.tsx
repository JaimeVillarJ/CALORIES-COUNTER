import { useNavigate } from "react-router-dom";
import type { BudgetProps } from "../types";

export const Budget = ( { budget, setBudget } : BudgetProps) => {

    
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-self-center text-center mt-20 w-150 bg-white shadow rounded-3xl">
            <h1 className="text-3xl text-blue-600 font-bold m-5">Define Budget</h1>
            <input 
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="m-6 border-1 border-gray-400 h-8 p-1"
            />
            <button
                onClick={() => navigate(`/dashboard/${budget}`)} 
                disabled = { Number(budget) <= 0 }
                className="bg-blue-600 h-12 m-6 mb-8 mt-0 text-white font-bold  
                           hover:bg-blue-500 transition duration-200 cursor-pointer
                           disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
            >
                DEFINE BUDGET
            </button> 
        </div>
    )
}
