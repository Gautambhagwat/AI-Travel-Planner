import {
  Trees,
  Utensils,
  Mountain,
  ShoppingBag,
  Landmark,
  Music,
  Check,
} from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const interests = [
  {
    name: "Adventure",
    icon: Mountain,
    description: "Hiking, trekking, rafting and thrilling activities.",
  },
  {
    name: "Nature",
    icon: Trees,
    description: "Forests, waterfalls, wildlife and scenic landscapes.",
  },
  {
    name: "Food",
    icon: Utensils,
    description: "Local cuisine, cafés and unforgettable dining.",
  },
  {
    name: "Nightlife",
    icon: Music,
    description: "Bars, live music, clubs and evening entertainment.",
  },
  {
    name: "Shopping",
    icon: ShoppingBag,
    description: "Markets, malls, local crafts and souvenirs.",
  },
  {
    name: "History",
    icon: Landmark,
    description: "Museums, forts, monuments and cultural heritage.",
  },
];

function StepInterests() {
  const { tripData, updateTripData } = usePlanner();

  const toggleInterest = (interest) => {
    if (tripData.interests.includes(interest)) {
      updateTripData({
        interests: tripData.interests.filter(
          (item) => item !== interest
        ),
      });
    } else {
      updateTripData({
        interests: [...tripData.interests, interest],
      });
    }
  };

  return (
    <div className="space-y-10">
      <SectionHeader
        title="What would you love to experience?"
        subtitle="Choose multiple interests and we'll personalize every recommendation for you."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest) => {
          const Icon = interest.icon;

          const selected = tripData.interests.includes(
            interest.name
          );

          return (
            <Card
              key={interest.name}
              hover
              onClick={() => toggleInterest(interest.name)}
              className={`group cursor-pointer border-2 transition-all duration-300 ${
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
                  <Icon size={24} />
                </div>

                {selected && (
                  <div className="rounded-full bg-primary-600 p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  {interest.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-secondary-600">
                  {interest.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="border-primary-200 bg-primary-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-secondary-500">
              Selected Interests
            </p>

            <h3 className="mt-2 text-3xl font-bold text-secondary-900">
              {tripData.interests.length}
            </h3>

            <p className="mt-2 text-secondary-600">
              AI will prioritize these experiences while building your itinerary.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {tripData.interests.length > 0 ? (
            tripData.interests.map((interest) => (
              <Chip
                key={interest}
                selected
                onRemove={() => toggleInterest(interest)}
              >
                {interest}
              </Chip>
            ))
          ) : (
            <p className="text-sm text-secondary-500">
              No interests selected yet.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default StepInterests;