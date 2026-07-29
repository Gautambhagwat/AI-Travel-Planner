import { MapPin } from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const POPULAR_DESTINATIONS = [
  "Goa",
  "Manali",
  "Jaipur",
  "Kerala",
  "Bali",
  "Paris",
  "Kyoto",
  "Dubai",
];

function StepDestination() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Where would you like to travel?"
        subtitle="Choose a destination to start building your personalized AI itinerary."
      />

      <Card>
        <Input
          label="Destination"
          placeholder="Search city or country..."
          value={tripData.destination}
          leftIcon={<MapPin size={18} />}
          helperText="You can type any destination or choose one below."
          onChange={(e) =>
            updateTripData({
              destination: e.target.value,
            })
          }
        />

        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-secondary-700">
            Popular destinations
          </p>

          <div className="flex flex-wrap gap-2">
            {POPULAR_DESTINATIONS.map((destination) => (
              <Chip
                key={destination}
                selected={tripData.destination === destination}
                variant={
                  tripData.destination === destination
                    ? "primary"
                    : "outline"
                }
                onClick={() =>
                  updateTripData({
                    destination,
                  })
                }
              >
                {destination}
              </Chip>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default StepDestination;