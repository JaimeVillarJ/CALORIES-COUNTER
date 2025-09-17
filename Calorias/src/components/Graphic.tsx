import type { BudgetProps } from "../types";

type GraphicProps = {
  spent: number;   // valor actual (gasto, calorías, etc.)
  size?: number;     // tamaño en px
  stroke?: number;   // grosor de la barra
} & BudgetProps;

export const Graphic = ({ spent, size = 200, stroke = 20, budget, setBudget}: GraphicProps) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = spent / Number(budget); // relación 0 - 1
  const offset = circumference - progress * circumference;

  // 🔹 Determinar color según el nivel
  let colorClass = "text-blue-600"; // default
  if (progress > 0.9) {
    colorClass = "text-red-600";
  } else if (progress > 0.7) {
    colorClass = "text-orange-500";
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        className="block"
        role="progressbar"
        aria-valuenow={spent}
        aria-valuemin={0}
        aria-valuemax={Number(budget)}
      >
        {/* Círculo de fondo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          className="text-gray-400"
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progreso */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          className={`${colorClass} transition-all duration-500`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* Texto en el centro */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={`text-xl font-bold ${colorClass} fill-current`}
        >
          {Math.round(progress * 100)}% Spent
        </text>
      </svg>
    </div>
  );
};
