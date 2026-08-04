import { IndianRupee, CheckCircle2, TrendingUp } from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const budgets = [
  {
    label: "₹10,000 - ₹25,000",
    title: "Budget Friendly",
    emoji: "🎒",
    description: "Economical stays, local transport & authentic street food.",
    tag: "Most popular",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "₹25,000 - ₹50,000",
    title: "Standard",
    emoji: "🏨",
    description: "3-star hotels, comfortable transport & great experiences.",
    tag: null,
  },
  {
    label: "₹50,000 - ₹1,00,000",
    title: "Premium",
    emoji: "⭐",
    description: "Luxury stays, premium dining & curated experiences.",
    tag: null,
  },
  {
    label: "₹1,00,000+",
    title: "Luxury",
    emoji: "👑",
    description: "Exclusive resorts, private transfers & first-class travel.",
    tag: "Top tier",
    tagColor: "bg-amber-100 text-amber-700",
  },
];

function StepBudget() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-7">
      <SectionHeader
        title="What's your travel budget?"
        subtitle="Choose a budget range so we can personalize every recommendation to your spending plan."
      />

      <div className="grid gap-4 md:grid-cols-2" role="group" aria-label="Select travel budget">
        {budgets.map((budget) => {
          const selected = tripData.budget === budget.label;

          return (
            <button
              key={budget.label}
              type="button"
              aria-pressed={selected}
              onClick={() =>
                updateTripData({ budget: budget.label })
              }
              className={`group relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                ${selected
                  ? "border-primary-500 bg-primary-50 shadow-md shadow-primary-100"
                  : "border-secondary-200 bg-white hover:border-primary-200 hover:bg-secondary-50 hover:shadow-sm"
                }
              `}
            >
              <div className="flex items-start gap-3">
                {/* Emoji badge */}
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xl transition-all duration-300 ${
                    selected
                      ? "bg-primary-100 shadow-sm"
                      : "bg-secondary-100 group-hover:bg-primary-50"
                  }`}
                  aria-hidden="true"
                >
                  {budget.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-secondary-900">{budget.title}</h3>
                    {budget.tag && (
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${budget.tagColor}`}>
                        {budget.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
                    {budget.description}
                  </p>
                  <p className={`mt-2.5 text-sm font-bold ${selected ? "text-primary-700" : "text-secondary-700"}`}>
                    {budget.label}
                  </p>
                </div>

                {selected && (
                  <div className="flex-shrink-0 animate-[checkBounce_0.3s_ease-out]">
                    <CheckCircle2 size={20} className="text-primary-600" aria-hidden="true" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection confirmation or guidance */}
      {tripData.budget ? (
        <Card className="border-primary-200 bg-gradient-to-r from-primary-50 to-sky-50 animate-[fadeSlideIn_0.3s_ease-out]">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <TrendingUp size={18} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Selected Budget
              </p>
              <p className="mt-0.5 text-xl font-extrabold text-primary-700">
                {tripData.budget}
              </p>
              <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
                AI will recommend stays, dining & activities that fit this range perfectly.
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="rounded-xl border border-dashed border-secondary-200 bg-secondary-50/50 px-5 py-4 text-center">
          <div className="flex items-center justify-center gap-2 text-secondary-400">
            <IndianRupee size={16} aria-hidden="true" />
            <p className="text-sm">Select a budget range to continue</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepBudget;