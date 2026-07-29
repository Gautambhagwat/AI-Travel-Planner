import {
  CalendarDays,
  MapPin,
  IndianRupee,
  Users,
  Compass,
  Car,
  Hotel,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

function StepReview() {
  const { tripData } = usePlanner();

  const tripDuration =
    tripData.tripType === "multi-day"
      ? Math.ceil(
          (new Date(tripData.endDate) -
            new Date(tripData.startDate)) /
            (1000 * 60 * 60 * 24)
        ) + 1
      : 1;

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Review Your Trip"
        subtitle="Verify your preferences before generating your AI-powered itinerary."
      />

      <Card>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <MapPin className="text-primary-600" size={22} />
            <div>
              <p className="text-sm text-secondary-500">
                Destination
              </p>
              <p className="font-semibold">
                {tripData.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              className="text-primary-600"
              size={22}
            />
            <div>
              <p className="text-sm text-secondary-500">
                Travel Dates
              </p>
              <p className="font-semibold">
                {tripData.startDate}
                {tripData.tripType === "multi-day" &&
                  ` - ${tripData.endDate}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <IndianRupee
              className="text-primary-600"
              size={22}
            />
            <div>
              <p className="text-sm text-secondary-500">
                Budget
              </p>
              <p className="font-semibold">
                {tripData.budget}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-primary-600" size={22} />
            <div>
              <p className="text-sm text-secondary-500">
                Travelers
              </p>
              <p className="font-semibold">
                {tripData.travelers}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Compass className="text-primary-600" size={22} />
            <div>
              <p className="text-sm text-secondary-500">
                Travel Style
              </p>
              <p className="font-semibold">
                {tripData.travelStyle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Car className="text-primary-600" size={22} />
            <div>
              <p className="text-sm text-secondary-500">
                Transport
              </p>
              <p className="font-semibold">
                {tripData.transport}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Hotel className="text-primary-600" size={22} />
            <div>
              <p className="text-sm text-secondary-500">
                Accommodation
              </p>
              <p className="font-semibold">
                {tripData.accommodation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              className="text-primary-600"
              size={22}
            />
            <div>
              <p className="text-sm text-secondary-500">
                Trip Duration
              </p>
              <p className="font-semibold">
                {tripDuration}{" "}
                {tripDuration === 1 ? "Day" : "Days"}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">
          Interests
        </h3>

        <div className="flex flex-wrap gap-3">
          {tripData.interests.map((interest) => (
            <Chip key={interest} selected>
              {interest}
            </Chip>
          ))}
        </div>
      </Card>

      <Card className="border-primary-200 bg-primary-50">
        <div className="mb-4 flex items-center gap-3">
          <Sparkles
            className="text-primary-700"
            size={26}
          />

          <h3 className="text-xl font-semibold text-primary-700">
            Your AI itinerary will include
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Day-wise travel itinerary",
            "Recommended attractions",
            "Restaurant suggestions",
            "Local transport recommendations",
            "Budget-aware planning",
            "Travel tips & essentials",
            "Best time to visit attractions",
            "Personalized recommendations",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle
                className="text-green-600"
                size={18}
              />

              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-white p-4">
          <p className="font-semibold text-primary-700">
            Estimated generation time
          </p>

          <p className="mt-1 text-secondary-600">
            Approximately 5–10 seconds after clicking
            <strong> Generate Itinerary</strong>.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default StepReview;