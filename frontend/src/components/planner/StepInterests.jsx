import {
  Trees,
  Utensils,
  Mountain,
  ShoppingBag,
  Landmark,
  Music,
  Check,
  Info,
} from "lucide-react";

import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const interests = [
  {
    name: "Adventure",
    icon: Mountain,
    emoji: "🏔️",
    description: "Hiking, trekking, rafting and thrilling outdoor activities.",
  },
  {
    name: "Nature",
    icon: Trees,
    emoji: "🌿",
    description: "Forests, waterfalls, wildlife and scenic landscapes.",
  },
  {
    name: "Food",
    icon: Utensils,
    emoji: "🍜",
    description: "Local cuisine, cafés and unforgettable dining experiences.",
  },
  {
    name: "Nightlife",
    icon: Music,
    emoji: "🎵",
    description: "Bars, live music, clubs and evening entertainment.",
  },
  {
    name: "Shopping",
    icon: ShoppingBag,
    emoji: "🛍️",
    description: "Markets, malls, local crafts and unique souvenirs.",
  },
  {
    name: "History",
    icon: Landmark,
    emoji: "🏛️",
    description: "Museums, forts, monuments and cultural heritage.",
  },
];

function StepInterests() {
  const { tripData, updateTripData } = usePlanner();

  const toggleInterest = (interest) => {
    if (tripData.interests.includes(interest)) {
      updateTripData({
        interests: tripData.interests.filter((item) => item !== interest),
      });
    } else {
      updateTripData({
        interests: [...tripData.interests, interest],
      });
    }
  };

  const selectedCount = tripData.interests.length;

  return (
    <div className="space-y-7">
      <SectionHeader
        title="What would you love to experience?"
        subtitle="Choose multiple interests and we'll personalize every recommendation for you."
        actions={
          selectedCount > 0 && (
            <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-700">
              {selectedCount} selected
            </span>
          )
        }
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3" role="group" aria-label="Select your interests">
        {interests.map((interest) => {
          const selected = tripData.interests.includes(interest.name);

          return (
            <button
              key={interest.name}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleInterest(interest.name)}
              className={`group relative w-full text-left rounded-2xl border-2 p-4 transition-all duration-300 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                ${selected
                  ? "border-primary-500 bg-primary-50 shadow-md shadow-primary-100"
                  : "border-secondary-200 bg-white hover:border-primary-200 hover:bg-secondary-50 hover:shadow-sm hover:-translate-y-0.5"
                }
              `}
            >
              {/* Checkmark badge */}
              {selected && (
                <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white animate-[checkBounce_0.3s_ease-out]">
                  <Check size={11} aria-hidden="true" />
                </div>
              )}

              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl transition-all duration-300 ${
                    selected
                      ? "bg-primary-100 shadow-sm"
                      : "bg-secondary-100 group-hover:bg-primary-50"
                  }`}
                  aria-hidden="true"
                >
                  {interest.emoji}
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-sm font-semibold text-secondary-900">
                    {interest.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-secondary-500">
                    {interest.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected chips summary / Empty state */}
      <div className="rounded-2xl border border-secondary-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-secondary-500">
              Selected Interests
            </p>
            <p className="mt-0.5 text-2xl font-extrabold text-secondary-900">
              {selectedCount}
              <span className="ml-1 text-sm font-normal text-secondary-400">
                / {interests.length} categories
              </span>
            </p>
          </div>
          {selectedCount > 0 && (
            <div className="flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5">
              <Check size={13} className="text-primary-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-primary-700">Great choices!</span>
            </div>
          )}
        </div>

        {selectedCount > 0 ? (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Selected interests">
            {tripData.interests.map((interest) => {
              const meta = interests.find((i) => i.name === interest);
              return (
                <Chip
                  key={interest}
                  selected
                  onRemove={() => toggleInterest(interest)}
                >
                  <span aria-hidden="true">{meta?.emoji}</span>
                  {interest}
                </Chip>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-xl border border-dashed border-secondary-200 bg-secondary-50/50 px-4 py-3.5">
            <Info size={16} className="text-secondary-400 flex-shrink-0" aria-hidden="true" />
            <p className="text-sm text-secondary-400">
              Select at least one interest to personalize your trip.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepInterests;