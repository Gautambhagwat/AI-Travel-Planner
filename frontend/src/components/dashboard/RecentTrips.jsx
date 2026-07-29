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
    <section className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-secondary-900">
            Continue Your Journey
          </h2>

          <p className="mt-1 text-secondary-500">
            Pick up where you left off.
          </p>
        </div>

        <button
          onClick={() => navigate("/saved-trips")}
          className="rounded-xl px-4 py-2 font-semibold text-primary-600 transition hover:bg-primary-50"
        >
          View All
        </button>
      </div>

      {trips.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-secondary-300 bg-secondary-50 py-16 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
            <PlaneTakeoff
              size={40}
              className="text-primary-600"
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-secondary-900">
            Your next adventure starts here
          </h3>

          <p className="mx-auto mt-3 max-w-md text-secondary-500">
            Build your first AI-powered itinerary and discover
            amazing places tailored just for you.
          </p>

          <button
            onClick={() => navigate("/planner")}
            className="mt-8 rounded-2xl bg-primary-600 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-primary-700"
          >
            Plan My First Trip
          </button>
        </div>
      ) : (
        <div className="space-y-7">
          {trips.slice(0, 3).map((trip) => {
            const image =
              destinationImages[trip.destination] ||
              "https://picsum.photos/1200/800?random=20";

            return (
              <article
                key={trip.id}
                className="group overflow-hidden rounded-3xl border border-secondary-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden lg:h-auto lg:w-[380px]">
                    <img
                      src={image}
                      alt={trip.destination}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-secondary-900 shadow backdrop-blur">
                      {trip.destination}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                        AI Generated
                      </span>

                      <h3 className="mt-4 text-3xl font-bold text-secondary-900">
                        {trip.tripTitle}
                      </h3>

                      <div className="mt-6 flex flex-wrap gap-6 text-secondary-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          {trip.destination}
                        </div>

                        <div className="flex items-center gap-2">
                          <CalendarDays size={18} />
                          {trip.days.length}{" "}
                          {trip.days.length > 1 ? "Days" : "Day"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="inline-flex items-center gap-3 rounded-2xl bg-primary-50 px-5 py-3">
                        <Wallet
                          size={20}
                          className="text-primary-600"
                        />

                        <div>
                          <p className="text-xs uppercase tracking-wide text-secondary-500">
                            Estimated Budget
                          </p>

                          <p className="text-xl font-bold text-primary-700">
                            ₹{trip.totalCost?.toLocaleString()}
                          </p>
                        </div>
                      </div>

                                            <button
                        onClick={() =>
                          navigate(`/trip-details/${trip.id}`)
                        }
                        className="flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-primary-700"
                      >
                        Continue Planning
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default RecentTrips;