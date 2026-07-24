import usePlanner from "../../hooks/usePlanner";

const budgets = [
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

function StepBudget() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Select Budget
      </h2>

      <div className="grid gap-4">

        {budgets.map((budget) => (
          <button
            key={budget}
            onClick={() =>
              updateTripData({ budget })
            }
            className={`rounded-lg border p-4 text-left ${
              tripData.budget === budget
                ? "border-blue-600 bg-blue-50"
                : ""
            }`}
          >
            {budget}
          </button>
        ))}

      </div>
    </>
  );
}

export default StepBudget;