import { IndianRupee } from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const budgets = [
  {
    label: "₹10,000 - ₹25,000",
    title: "Budget Friendly",
    description: "Perfect for economical trips and backpacking adventures.",
  },
  {
    label: "₹25,000 - ₹50,000",
    title: "Standard",
    description: "Comfortable hotels, local attractions, and great experiences.",
  },
  {
    label: "₹50,000 - ₹1,00,000",
    title: "Premium",
    description: "Luxury stays, premium dining, and curated experiences.",
  },
  {
    label: "₹1,00,000+",
    title: "Luxury",
    description: "Exclusive resorts, private transfers, and premium travel.",
  },
];

function StepBudget() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-8">
      <SectionHeader
        title="What's your travel budget?"
        subtitle="Choose a budget range so we can personalize recommendations that match your spending plan."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {budgets.map((budget) => {
          const selected = tripData.budget === budget.label;

          return (
            <Card
              key={budget.label}
              hover
              onClick={() =>
                updateTripData({
                  budget: budget.label,
                })
              }
              className={`cursor-pointer transition-all ${
                selected
                  ? "border-primary-500 bg-primary-50"
                  : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`rounded-xl p-3 ${
                    selected
                      ? "bg-primary-100 text-primary-700"
                      : "bg-secondary-100 text-secondary-600"
                  }`}
                >
                  <IndianRupee size={22} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {budget.title}
                  </h3>

                  <p className="mt-1 text-body-sm text-secondary-500">
                    {budget.description}
                  </p>

                  <p className="mt-4 text-lg font-bold text-primary-700">
                    {budget.label}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {tripData.budget && (
        <Card className="border-primary-200 bg-primary-50">
          <p className="text-sm font-medium text-secondary-600">
            Selected Budget
          </p>

          <p className="mt-2 text-2xl font-bold text-primary-700">
            {tripData.budget}
          </p>

          <p className="mt-2 text-body-sm text-secondary-600">
            AI will recommend destinations, accommodations, restaurants,
            and activities that fit within this budget range.
          </p>
        </Card>
      )}
    </div>
  );
}

export default StepBudget;