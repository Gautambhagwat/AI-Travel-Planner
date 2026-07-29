import {
  Mountain,
  Palmtree,
  Crown,
  Users,
  Heart,
  Briefcase,
  Check,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const travelStyles = [
  {
    value: "Adventure",
    icon: Mountain,
    description: "Thrilling outdoor adventures and exciting activities.",
  },
  {
    value: "Relaxation",
    icon: Palmtree,
    description: "Peaceful vacations with beaches, resorts and slow travel.",
  },
  {
    value: "Luxury",
    icon: Crown,
    description: "Premium hotels, curated experiences and fine dining.",
  },
  {
    value: "Family",
    icon: Users,
    description: "Comfortable trips designed for all age groups.",
  },
  {
    value: "Romantic",
    icon: Heart,
    description: "Perfect for couples, anniversaries and honeymoons.",
  },
  {
    value: "Business",
    icon: Briefcase,
    description: "Efficient travel with comfort and productivity.",
  },
];

function StepTravelStyle() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Choose your travel style"
        subtitle="This helps AI personalize accommodations, attractions and your daily itinerary."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {travelStyles.map((style) => {
          const Icon = style.icon;
          const selected = tripData.travelStyle === style.value;

          return (
            <Card
              key={style.value}
              hover
              onClick={() =>
                updateTripData({
                  travelStyle: style.value,
                })
              }
              className={`group cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
                selected
                  ? "border-primary-500 bg-primary-50 shadow-lg"
                  : "border-secondary-200 hover:border-primary-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-2xl p-4 transition ${
                    selected
                      ? "bg-primary-100 text-primary-700"
                      : "bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600"
                  }`}
                >
                  <Icon size={26} />
                </div>

                {selected && (
                  <div className="rounded-full bg-primary-600 p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900">
                  {style.value}
                </h3>

                <p className="mt-3 leading-7 text-secondary-600">
                  {style.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="border-primary-200 bg-gradient-to-r from-primary-50 to-cyan-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-secondary-500">
              Selected Style
            </p>

            <h3 className="mt-2 text-3xl font-bold text-secondary-900">
              {tripData.travelStyle || "Not selected"}
            </h3>

            <p className="mt-3 text-secondary-600">
              AI will recommend destinations, activities and hotels that match
              this travel style.
            </p>
          </div>

          {tripData.travelStyle && (
            <div className="hidden rounded-2xl bg-primary-600 p-4 text-white md:block">
              <SparklesIcon />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2zm7 12l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14zM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14z" />
    </svg>
  );
}

export default StepTravelStyle;