import {
  Mountain,
  Palmtree,
  Crown,
  Users,
  Heart,
  Briefcase,
  Check,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const travelStyles = [
  {
    value: "Adventure",
    icon: Mountain,
    description: "Thrilling outdoor adventures and exciting activities.",
    emoji: "🏔️",
    color: "emerald",
  },
  {
    value: "Relaxation",
    icon: Palmtree,
    description: "Peaceful vacations with beaches, resorts and slow travel.",
    emoji: "🌴",
    color: "cyan",
  },
  {
    value: "Luxury",
    icon: Crown,
    description: "Premium hotels, curated experiences and fine dining.",
    emoji: "👑",
    color: "amber",
  },
  {
    value: "Family",
    icon: Users,
    description: "Comfortable trips designed for all age groups.",
    emoji: "👨‍👩‍👧",
    color: "violet",
  },
  {
    value: "Romantic",
    icon: Heart,
    description: "Perfect for couples, anniversaries and honeymoons.",
    emoji: "💑",
    color: "rose",
  },
  {
    value: "Business",
    icon: Briefcase,
    description: "Efficient travel with comfort and productivity.",
    emoji: "💼",
    color: "slate",
  },
];

function StepTravelStyle() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-7">
      <SectionHeader
        title="Choose your travel style"
        subtitle="This helps AI personalize accommodations, attractions and your daily itinerary."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="group" aria-label="Select travel style">
        {travelStyles.map((style) => {
          const selected = tripData.travelStyle === style.value;

          return (
            <button
              key={style.value}
              type="button"
              aria-pressed={selected}
              onClick={() =>
                updateTripData({ travelStyle: style.value })
              }
              className={`group relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                ${selected
                  ? "border-primary-500 bg-primary-50 shadow-md shadow-primary-100"
                  : "border-secondary-200 bg-white hover:border-primary-200 hover:bg-secondary-50 hover:shadow-sm hover:-translate-y-0.5"
                }
              `}
            >
              {/* Selected checkmark */}
              {selected && (
                <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white animate-[checkBounce_0.3s_ease-out]">
                  <Check size={11} aria-hidden="true" />
                </div>
              )}

              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 text-2xl ${
                  selected
                    ? "bg-primary-100 shadow-sm"
                    : "bg-secondary-100 group-hover:bg-primary-50"
                }`}
                aria-hidden="true"
              >
                {style.emoji}
              </div>

              <h3 className="text-base font-semibold text-secondary-900">
                {style.value}
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-secondary-500">
                {style.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selection summary */}
      {tripData.travelStyle ? (
        <div className="flex items-center gap-4 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-sky-50 p-5 animate-[fadeSlideIn_0.3s_ease-out]">
          <div className="text-3xl select-none" aria-hidden="true">
            {travelStyles.find((s) => s.value === tripData.travelStyle)?.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-primary-500">
              Selected Style
            </p>
            <p className="mt-0.5 text-xl font-extrabold text-secondary-900">
              {tripData.travelStyle}
            </p>
            <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
              AI will tailor your destinations, activities and stays to match this vibe.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-secondary-200 bg-secondary-50/50 px-5 py-4 text-center">
          <p className="text-sm text-secondary-400">
            Pick a style to see how it shapes your trip
          </p>
        </div>
      )}
    </div>
  );
}

export default StepTravelStyle;