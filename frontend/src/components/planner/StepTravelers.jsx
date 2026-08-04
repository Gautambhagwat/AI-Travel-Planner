import { Minus, Plus, Users } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const TRAVELER_LABELS = {
  1: { label: "Solo", desc: "Just you — maximum freedom & flexibility.", emoji: "🧍" },
  2: { label: "Couple", desc: "Perfect for romantic getaways & honeymoons.", emoji: "👫" },
  3: { label: "Small Group", desc: "Great for close friends or family trips.", emoji: "👨‍👩‍👦" },
  4: { label: "Group", desc: "Fun group adventures with shared experiences.", emoji: "👥" },
};

function getLabel(count) {
  if (count <= 4) return TRAVELER_LABELS[count];
  return { label: "Large Group", desc: "We'll suggest group-friendly options.", emoji: "🎉" };
}

function StepTravelers() {
  const { tripData, updateTripData } = usePlanner();

  const increaseTravelers = () => {
    updateTripData({ travelers: tripData.travelers + 1 });
  };

  const decreaseTravelers = () => {
    if (tripData.travelers > 1) {
      updateTripData({ travelers: tripData.travelers - 1 });
    }
  };

  const meta = getLabel(tripData.travelers);

  return (
    <div className="space-y-7">
      <SectionHeader
        title="Who's traveling?"
        subtitle="Tell us how many people are joining so we can tailor accommodations, transport, and activities."
      />

      <div className="rounded-2xl border border-secondary-200 bg-white shadow-card p-6 sm:p-8">
        <div className="flex flex-col items-center gap-8">
          {/* Emoji + icon display */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-sky-100 shadow-md text-5xl select-none transition-all duration-300 animate-[scaleIn_0.25s_ease-out]">
              {meta.emoji}
            </div>
            <div className="mt-3 flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1">
              <Users size={13} className="text-primary-600" aria-hidden="true" />
              <span className="text-xs font-bold text-primary-700">{meta.label}</span>
            </div>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-6" role="group" aria-label="Number of travelers">
            <button
              type="button"
              aria-label="Decrease travelers"
              onClick={decreaseTravelers}
              disabled={tripData.travelers <= 1}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary-200 bg-white text-secondary-600 shadow-sm transition-all duration-200
                hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md
                active:scale-95
                disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <Minus size={18} aria-hidden="true" />
            </button>

            <div className="min-w-[100px] text-center" aria-live="polite" aria-atomic="true">
              <p className="text-6xl font-extrabold text-secondary-900 leading-none tabular-nums transition-all duration-200">
                {tripData.travelers}
              </p>
              <p className="mt-2 text-sm text-secondary-500 font-medium">
                {tripData.travelers === 1 ? "Traveler" : "Travelers"}
              </p>
            </div>

            <button
              type="button"
              aria-label="Increase travelers"
              onClick={increaseTravelers}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary-200 bg-white text-secondary-600 shadow-sm transition-all duration-200
                hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md
                active:scale-95
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <Plus size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Description */}
          <div className="w-full rounded-xl border border-primary-100 bg-primary-50 px-5 py-4 text-center animate-[fadeSlideIn_0.3s_ease-out]">
            <p className="text-sm text-secondary-600 leading-relaxed">
              {meta.desc}
            </p>
            <p className="mt-2 text-xs font-medium text-primary-600">
              AI will personalize your itinerary for{" "}
              <strong className="font-bold">{tripData.travelers}</strong>{" "}
              {tripData.travelers === 1 ? "traveler" : "travelers"}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTravelers;