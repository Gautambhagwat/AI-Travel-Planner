import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  PlaneTakeoff,
  Wallet,
} from "lucide-react";

const destinationImages = {
  Goa: "https://picsum.photos/1200/800?random=11",
  Manali: "https://picsum.photos/1200/800?random=12",
  Jaipur: "https://picsum.photos/1200/800?random=13",
  Ladakh: "https://picsum.photos/1200/800?random=14",
  Kerala: "https://picsum.photos/1200/800?random=15",
};

function RecentTrips({ trips }) {
  const navigate = useNavigate();

  return (
    <section className="flex min-w-0 flex-col justify-between rounded-2xl border border-secondary-200 bg-white p-4 shadow-card sm:rounded-3xl lg:p-5">
      <div>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-secondary-900 lg:text-xl">
              Continue Your Journey
            </h2>

            <p className="mt-0.5 text-xs text-secondary-500 sm:text-sm">
              Pick up where you left off.
            </p>
          </div>

          <button
            onClick={() => navigate("/saved-trips")}
            className="self-start rounded-xl px-3 py-1.5 text-xs font-semibold text-primary-600 transition hover:bg-primary-50 sm:self-auto sm:text-sm"
          >
            View All
          </button>
        </div>

        {trips.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-secondary-300 bg-secondary-50 py-8 text-center sm:rounded-3xl lg:py-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <PlaneTakeoff
                size={28}
                className="text-primary-600"
              />
            </div>

            <h3 className="mt-4 text-lg font-bold text-secondary-900 lg:text-xl">
              Your next adventure starts here
            </h3>

            <p className="mx-auto mt-2 max-w-md text-xs text-secondary-500 sm:text-sm">
              Build your first AI-powered itinerary and discover
              amazing places tailored just for you.
            </p>

            <button
              onClick={() => navigate("/planner")}
              className="mt-5 rounded-xl bg-primary-600 px-5 py-2 text-xs font-semibold text-white transition hover:scale-105 hover:bg-primary-700 sm:text-sm"
            >
              Plan My First Trip
            </button>
          </div>
        ) : (
          <div className="space-y-4 lg:space-y-4">
            {trips.slice(0, 3).map((trip) => {
              const image =
                destinationImages[trip.destination] ||
                "https://picsum.photos/1200/800?random=20";

              return (
                <article
                  key={trip.id}
                  className="group overflow-hidden rounded-2xl border border-secondary-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden sm:h-48 lg:h-auto lg:w-[200px] xl:w-[220px] lg:shrink-0">
                      <img
                        src={image}
                        alt={trip.destination}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-secondary-900 shadow backdrop-blur">
                        {trip.destination}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex flex-1 flex-col justify-between p-3.5 sm:p-4">
                      <div>
                        <span className="inline-flex rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                          AI Generated
                        </span>

                        <h3 className="mt-1.5 break-words text-base font-bold text-secondary-900 lg:text-lg">
                          {trip.tripTitle}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-secondary-600">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={15} />
                            {trip.destination}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <CalendarDays size={15} />
                            {trip.days.length}{" "}
                            {trip.days.length > 1 ? "Days" : "Day"}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-1.5">
                          <Wallet
                            size={16}
                            className="text-primary-600"
                          />

                          <div>
                            <p className="text-[10px] uppercase tracking-wide text-secondary-500">
                              Estimated Budget
                            </p>

                            <p className="text-sm font-bold text-primary-700">
                              ₹{trip.totalCost?.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            navigate(`/trip-details/${trip.id}`)
                          }
                          className="flex items-center justify-center gap-1.5 rounded-lg bg-primary-600 px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:gap-2 hover:bg-primary-700"
                        >
                          Continue Planning
                          <ArrowRight size={15} />
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
