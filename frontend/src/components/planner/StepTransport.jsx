import {
  Plane,
  Train,
  Bus,
  Car,
  Check,
} from "lucide-react";

import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const transportOptions = [
  {
    value: "Flight",
    icon: Plane,
    emoji: "✈️",
    description: "Fastest option for long-distance travel and international trips.",
    tag: "Fastest",
    tagColor: "bg-sky-100 text-sky-700",
  },
  {
    value: "Train",
    icon: Train,
    emoji: "🚂",
    description: "Comfortable journeys with scenic routes and city-center access.",
    tag: "Scenic",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    value: "Bus",
    icon: Bus,
    emoji: "🚌",
    description: "Budget-friendly travel with extensive route coverage.",
    tag: "Budget",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    value: "Car",
    icon: Car,
    emoji: "🚗",
    description: "Road trips with complete flexibility and freedom.",
    tag: "Flexible",
    tagColor: "bg-violet-100 text-violet-700",
  },
];

function StepTransport() {
  const { tripData, updateTripData } = usePlanner();

  const selected = transportOptions.find((o) => o.value === tripData.transport);

  return (
    <div className="space-y-7">
      <SectionHeader
        title="How would you like to travel?"
        subtitle="Your preferred transport helps us optimize routes, travel times and recommendations."
      />

      <div className="grid gap-4 md:grid-cols-2" role="group" aria-label="Select transport mode">
        {transportOptions.map((option) => {
          const isSelected = tripData.transport === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() =>
                updateTripData({ transport: option.value })
              }
              className={`group relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                ${isSelected
                  ? "border-primary-500 bg-primary-50 shadow-md shadow-primary-100"
                  : "border-secondary-200 bg-white hover:border-primary-200 hover:bg-secondary-50 hover:shadow-sm hover:-translate-y-0.5"
                }
              `}
            >
              {/* Selected checkmark */}
              {isSelected && (
                <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white animate-[checkBounce_0.3s_ease-out]">
                  <Check size={11} aria-hidden="true" />
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Emoji icon */}
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-2xl transition-all duration-300 ${
                    isSelected
                      ? "bg-primary-100 shadow-sm"
                      : "bg-secondary-100 group-hover:bg-primary-50"
                  }`}
                  aria-hidden="true"
                >
                  {option.emoji}
                </div>

                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-secondary-900">
                      {option.value}
                    </h3>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${option.tagColor}`}>
                      {option.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-secondary-500">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection summary or empty state */}
      {selected ? (
        <div className="flex items-center gap-4 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-sky-50 p-5 animate-[fadeSlideIn_0.3s_ease-out]">
          <div className="text-3xl select-none" aria-hidden="true">{selected.emoji}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-primary-500">
              Preferred Transport
            </p>
            <p className="mt-0.5 text-xl font-extrabold text-secondary-900">
              {selected.value}
            </p>
            <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
              AI will optimize routes, layovers and local transfers for this mode.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-secondary-200 bg-secondary-50/50 px-5 py-4 text-center">
          <p className="text-sm text-secondary-400">
            Select your preferred transport mode to continue
          </p>
        </div>
      )}
    </div>
  );
}

export default StepTransport;