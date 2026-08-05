import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  PlaneTakeoff,
  Wallet,
} from "lucide-react";
import { getDestinationImage } from "../../utils/destinationMeta";

function RecentTrips({ trips }) {
  const navigate = useNavigate();

  return (
    <section className="flex min-w-0 flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-5 shadow-card sm:rounded-3xl lg:p-6">
      <div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-secondary-900 lg:text-xl">
              Continue Your Journey
            </h2>

            <p className="mt-0.5 text-xs text-secondary-500 sm:text-sm">
              Pick up where you left off.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/saved-trips")}
            className="self-start rounded-xl px-3 py-1.5 text-xs font-semibold text-primary-600 transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:self-auto sm:text-sm"
          >
            View All
          </button>
        </div>

        {trips.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-secondary-200 bg-secondary-50/50 py-8 text-center sm:rounded-3xl lg:py-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <PlaneTakeoff
                size={26}
                className="text-primary-600"
              />
            </div>

            <h3 className="mt-4 text-base font-bold text-secondary-900 lg:text-lg">
              Your next adventure starts here
            </h3>

            <p className="mx-auto mt-1.5 max-w-md text-xs text-secondary-500 sm:text-sm">
              Build your first AI-powered itinerary and discover
              amazing places tailored just for you.
            </p>

            <button
              type="button"
              onClick={() => navigate("/planner")}
              className="mt-5 rounded-xl bg-primary-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary-500/20 transition hover:bg-primary-700"
            >
              Plan My First Trip
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {trips.slice(0, 3).map((trip) => {
              const destination =
                  trip.tripName
                      ?.replace(" AI Trip", "")
                      .replace(" Trip", "")
                      .trim() || "Destination";

              const image = getDestinationImage(destination);

              const duration =
                Math.ceil(
                  (new Date(trip.endDate) -
                    new Date(trip.startDate)) /
                    (1000 * 60 * 60 * 24)
                ) + 1;

              return (
                <article
                  key={trip.id}
                  className="group overflow-hidden rounded-2xl border border-secondary-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="relative h-40 shrink-0 overflow-hidden sm:h-auto sm:w-[180px] lg:w-[200px]">
                      <img
                        src={image}
                        alt={destination}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-secondary-900 shadow-xs backdrop-blur-sm">
                        {destination}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex flex-1 flex-col justify-between p-4">
                      <div>
                        <span className="inline-flex rounded-full border border-primary-100 bg-primary-50 px-2.5 py-0.5 text-[10px] font-bold text-primary-700">
                          AI Generated
                        </span>

                        <h3 className="mt-1.5 break-words text-base font-bold text-secondary-900">
                          {trip.tripName}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-secondary-500">
                          <div className="flex items-center gap-1.5">
                            <MapPin
                              size={14}
                              className="text-secondary-400"
                            />
                            {destination}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <CalendarDays
                              size={14}
                              className="text-secondary-400"
                            />
                            {duration}{" "}
                            {duration > 1 ? "Days" : "Day"}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="inline-flex items-center gap-2 rounded-xl border border-primary-100 bg-primary-50/80 px-3 py-1.5">
                          <Wallet
                            size={16}
                            className="text-primary-600"
                          />

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-secondary-400">
                              Estimated Budget
                            </p>

                            <p className="text-xs font-bold text-primary-700">
                              ₹
                              {Number(
                                trip.totalPrice || 0
                              ).toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            navigate(
                              `/trip-details/${trip.id}`
                            )
                          }
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-primary-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-primary-700"
                          aria-label={`Continue planning ${trip.tripName}`}
                        >
                          <span>Continue</span>

                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentTrips;