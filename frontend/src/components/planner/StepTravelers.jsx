import { Minus, Plus, Users } from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

function StepTravelers() {
  const { tripData, updateTripData } = usePlanner();

  const increaseTravelers = () => {
    updateTripData({
      travelers: tripData.travelers + 1,
    });
  };

  const decreaseTravelers = () => {
    if (tripData.travelers > 1) {
      updateTripData({
        travelers: tripData.travelers - 1,
      });
    }
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Who's traveling?"
        subtitle="Tell us how many people are joining the trip so we can recommend suitable accommodations, transport, and activities."
      />

      <Card>
        <div className="flex flex-col items-center gap-8 py-6">
          <div className="rounded-full bg-primary-50 p-5 text-primary-700">
            <Users size={36} />
          </div>

          <div className="flex items-center gap-5">
            <Button
              type="button"
              variant="outline"
              onClick={decreaseTravelers}
              disabled={tripData.travelers <= 1}
            >
              <Minus size={18} />
            </Button>

            <div className="min-w-[120px] text-center">
              <p className="text-5xl font-bold text-secondary-900">
                {tripData.travelers}
              </p>

              <p className="mt-2 text-body-sm text-secondary-500">
                {tripData.travelers === 1
                  ? "Traveler"
                  : "Travelers"}
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={increaseTravelers}
            >
              <Plus size={18} />
            </Button>
          </div>

          <div className="rounded-xl bg-secondary-50 px-5 py-4 text-center">
            <p className="text-sm text-secondary-600">
              AI will personalize your itinerary based on{" "}
              <span className="font-semibold">
                {tripData.travelers}
              </span>{" "}
              {tripData.travelers === 1 ? "traveler" : "travelers"}.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default StepTravelers;