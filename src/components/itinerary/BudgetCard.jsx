function BudgetCard({ totalCost }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-3 text-xl font-bold">

        Budget

      </h2>

      <p className="text-3xl font-bold text-green-600">

        ₹{totalCost}

      </p>

    </div>
  );
}

export default BudgetCard;