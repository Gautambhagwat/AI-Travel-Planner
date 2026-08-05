import {
  IndianRupee,
  Wallet,
  Users,
  CalendarDays,
} from "lucide-react";

function BudgetCard({
                      totalCost,
                      travelers,
                      startDate,
                      endDate,
                    }) {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  const duration =
      startDate && endDate
          ? Math.max(
              1,
              Math.round(
                  (new Date(endDate) - new Date(startDate)) /
                  (1000 * 60 * 60 * 24)
              ) + 1
          )
          : null;

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

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-secondary-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-secondary-500">
            <Users size={16} />
            Travelers
          </div>

          <p className="font-bold text-secondary-900">
            {travelers || 1}
          </p>
        </div>

        <div className="rounded-2xl bg-primary-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-primary-700">
            <CalendarDays size={16} />
            Duration
          </div>

          <p className="font-bold text-primary-700">
            {duration ? `${duration} Days` : "--"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default BudgetCard;