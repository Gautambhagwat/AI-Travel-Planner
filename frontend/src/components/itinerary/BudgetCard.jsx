import {
  IndianRupee,
  Wallet,
  TrendingUp,
} from "lucide-react";

function BudgetCard({ totalCost, budgetLimit }) {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const percentage =
    budgetLimit > 0
      ? Math.min((totalCost / budgetLimit) * 100, 100)
      : 0;

  const remaining = Math.max(budgetLimit - totalCost, 0);

  return (
    <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
            Budget Overview
          </p>

          <h2 className="mt-2 text-3xl font-bold text-secondary-900">
            {formatCurrency(totalCost)}
          </h2>
        </div>

        <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">
          <Wallet size={30} />
        </div>

      </div>

      <div className="mt-8">

        <div className="mb-3 flex justify-between text-sm">
          <span className="text-secondary-500">
            Budget Usage
          </span>

          <span className="font-semibold text-secondary-900">
            {Math.round(percentage)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-secondary-100">

          <div
            className="h-full rounded-full bg-primary-600 transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-secondary-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-secondary-500">
            <IndianRupee size={16} />

            Budget
          </div>

          <p className="font-bold text-secondary-900">
            {formatCurrency(budgetLimit)}
          </p>
        </div>

        <div className="rounded-2xl bg-primary-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-primary-700">
            <TrendingUp size={16} />

            Remaining
          </div>

          <p className="font-bold text-primary-700">
            {formatCurrency(remaining)}
          </p>
        </div>

      </div>

    </div>
  );
}

export default BudgetCard;