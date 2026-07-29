import { CalendarDays } from "lucide-react";

import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

function StepDates() {
  const { tripData, updateTripData } = usePlanner();

  const setTripType = (tripType) => {
    updateTripData({
      tripType,
      endDate: tripType === "one-day" ? tripData.startDate : "",
    });
  };

  const updateStartDate = (startDate) => {
    updateTripData({
      startDate,
      endDate: tripData.tripType === "one-day"
        ? startDate
        : tripData.endDate,
    });
  };

  const tripDuration =
    tripData.startDate &&
    tripData.endDate &&
    tripData.tripType === "multi-day"
      ? Math.ceil(
          (new Date(tripData.endDate) - new Date(tripData.startDate)) /
            (1000 * 60 * 60 * 24),
        ) + 1
      : tripData.startDate && tripData.tripType === "one-day"
        ? 1
        : null;

  return (
    <div className="space-y-8">
      <SectionHeader
        title="When are you travelling?"
        subtitle="Choose your travel dates. We'll calculate your trip duration automatically."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          hover
          onClick={() => setTripType("one-day")}
          className={`cursor-pointer transition-all ${
            tripData.tripType === "one-day"
              ? "border-primary-500 bg-primary-50"
              : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-secondary-900">
            One-day Trip
          </h3>

          <p className="mt-2 text-body-sm text-secondary-500">
            Perfect for day outings, city exploration, or quick weekend plans.
          </p>
        </Card>

        <Card
          hover
          onClick={() => setTripType("multi-day")}
          className={`cursor-pointer transition-all ${
            tripData.tripType === "multi-day"
              ? "border-primary-500 bg-primary-50"
              : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-secondary-900">
            Multi-day Trip
          </h3>

          <p className="mt-2 text-body-sm text-secondary-500">
            Best for vacations, road trips, and longer adventures.
          </p>
        </Card>
      </div>

      <Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            type="date"
            label={
              tripData.tripType === "one-day"
                ? "Travel Date"
                : "Departure Date"
            }
            value={tripData.startDate}
            leftIcon={<CalendarDays size={18} />}
            helperText="Select when your journey begins."
            onChange={(event) =>
              updateStartDate(event.target.value)
            }
          />

          {tripData.tripType === "multi-day" && (
            <Input
              type="date"
              label="Return Date"
              value={tripData.endDate}
              min={tripData.startDate || undefined}
              leftIcon={<CalendarDays size={18} />}
              helperText="Choose when you'll return."
              onChange={(event) =>
                updateTripData({
                  endDate: event.target.value,
                })
              }
            />
          )}
        </div>

        {tripDuration && (
          <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50 p-5">
            <p className="text-sm font-medium text-secondary-600">
              Trip Duration
            </p>

            <p className="mt-1 text-2xl font-bold text-primary-700">
              {tripDuration} {tripDuration === 1 ? "Day" : "Days"}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default StepDates;