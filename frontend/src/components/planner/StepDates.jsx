import { CalendarDays, Sun, Tent, Clock } from "lucide-react";

import Card from "../ui/Card";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const TRIP_TYPES = [
  {
    value: "one-day",
    icon: Sun,
    title: "One-day Trip",
    description: "Perfect for day outings, city exploration or quick weekend plans.",
    badge: "Day trip",
  },
  {
    value: "multi-day",
    icon: Tent,
    title: "Multi-day Trip",
    description: "Best for vacations, road trips and longer adventures.",
    badge: "Extended trip",
  },
];

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
    <div className="space-y-7">
      <SectionHeader
        title="When are you travelling?"
        subtitle="Choose your travel dates. We'll calculate your trip duration automatically."
      />

      {/* Trip type cards */}
      <div className="grid gap-4 md:grid-cols-2" role="group" aria-label="Select trip type">
        {TRIP_TYPES.map((type) => {
          const Icon = type.icon;
          const selected = tripData.tripType === type.value;

          return (
            <button
              key={type.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setTripType(type.value)}
              className={`group relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-300 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                ${selected
                  ? "border-primary-500 bg-primary-50 shadow-md shadow-primary-100"
                  : "border-secondary-200 bg-white hover:border-primary-200 hover:bg-secondary-50 hover:shadow-sm"
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    selected
                      ? "bg-primary-100 text-primary-700 shadow-sm"
                      : "bg-secondary-100 text-secondary-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                  }`}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-secondary-900">{type.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                      selected ? "bg-primary-100 text-primary-700" : "bg-secondary-100 text-secondary-500"
                    }`}>
                      {type.badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-secondary-500 leading-relaxed">
                    {type.description}
                  </p>
                </div>

                {/* Selected indicator */}
                {selected && (
                  <div className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white animate-[checkBounce_0.3s_ease-out]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Date inputs */}
      <Card>
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            type="date"
            label={
              tripData.tripType === "one-day"
                ? "Travel Date"
                : "Departure Date"
            }
            value={tripData.startDate}
            leftIcon={<CalendarDays size={17} aria-hidden="true" />}
            helperText="Select when your journey begins."
            aria-label="Select departure date"
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
              leftIcon={<CalendarDays size={17} aria-hidden="true" />}
              helperText="Choose when you'll return."
              aria-label="Select return date"
              onChange={(event) =>
                updateTripData({ endDate: event.target.value })
              }
            />
          )}
        </div>

        {/* Duration badge */}
        {tripDuration && (
          <div className="mt-5 flex items-center gap-4 rounded-xl border border-primary-100 bg-gradient-to-r from-primary-50 to-sky-50 px-5 py-4 animate-[fadeSlideIn_0.3s_ease-out]">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <Clock size={18} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Trip Duration
              </p>
              <p className="mt-0.5 text-2xl font-extrabold text-primary-700">
                {tripDuration}{" "}
                <span className="text-lg font-semibold">
                  {tripDuration === 1 ? "Day" : "Days"}
                </span>
              </p>
            </div>
            <p className="ml-auto text-xs text-secondary-500 max-w-[120px] text-right leading-relaxed hidden sm:block">
              AI will plan a full itinerary for each day
            </p>
          </div>
        )}

        {/* Empty state */}
        {!tripDuration && (
          <div className="mt-5 rounded-xl border border-dashed border-secondary-200 bg-secondary-50/50 px-5 py-4 text-center">
            <p className="text-sm text-secondary-400">
              {tripData.tripType ? "Select travel date to see trip duration" : "Pick a trip type first"}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default StepDates;