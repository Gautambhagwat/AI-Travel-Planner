import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Sparkles,
  Heart,
  Car,
  Hotel,
  CheckCircle2,
} from "lucide-react";

import usePlanner from "../../hooks/usePlanner";

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-secondary-100 p-3">
      <div className="rounded-lg bg-primary-50 p-2 text-primary-600">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wide text-secondary-500">
          {label}
        </p>

        <p className="mt-1 break-words font-medium text-secondary-900">
          {value || "Not selected"}
        </p>
      </div>
    </div>
  );
}

function TripSummarySidebar() {
  const { tripData } = usePlanner();

  const {
    destination,
    startDate,
    endDate,
    budget,
    travelers,
    travelStyle,
    interests,
    transport,
    accommodation,
  } = tripData;

  return (
    <div className="space-y-6">
      {/* Card */}
      <div className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary-100 p-3 text-primary-700">
            <Sparkles size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary-900">
              Trip Summary
            </h2>

            <p className="text-sm text-secondary-500">
              Updates automatically while planning
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <InfoRow
            icon={MapPin}
            label="Destination"
            value={destination}
          />

          <InfoRow
            icon={CalendarDays}
            label="Travel Dates"
            value={
              startDate && endDate
                ? `${startDate} → ${endDate}`
                : ""
            }
          />

          <InfoRow
            icon={Wallet}
            label="Budget"
            value={budget}
          />

          <InfoRow
            icon={Users}
            label="Travelers"
            value={travelers}
          />

          <InfoRow
            icon={Sparkles}
            label="Travel Style"
            value={travelStyle}
          />

          <InfoRow
            icon={Car}
            label="Transport"
            value={transport}
          />

          <InfoRow
            icon={Hotel}
            label="Accommodation"
            value={accommodation}
          />

          <div className="rounded-xl border border-secondary-100 p-3">
            <div className="mb-3 flex items-center gap-2">
              <Heart
                size={18}
                className="text-primary-600"
              />

              <span className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Interests
              </span>
            </div>

            {Array.isArray(interests) && interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-secondary-400">
                No interests selected
              </p>
            )}
          </div>
        </div>
      </div>

      {/* AI Tip */}
      <div className="rounded-3xl bg-primary-600 p-6 text-white">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} />

          <h3 className="font-semibold">
            AI Planner
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-primary-100">
          The more details you provide, the better your itinerary will be.
          We'll recommend attractions, restaurants, transport, hotels, and an
          optimized day-by-day travel plan.
        </p>
      </div>
    </div>
  );
}

export default TripSummarySidebar;