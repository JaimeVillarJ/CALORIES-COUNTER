export type BudgetProps = {
  budget: string;
  setBudget: React.Dispatch<React.SetStateAction<string>>;
  spent: number;
  setSpent?: React.Dispatch<React.SetStateAction<number>>; // 👈 opcional
};


export interface BudgetOnly {
    budget : string
}

export interface BudgetPercentProps {
    budget : string, 
    spent : number
}

export type spent = {
  id: string;         // 👈 identificador único
  name: string;
  category: string;
  date: string;
  amount: number;
};
