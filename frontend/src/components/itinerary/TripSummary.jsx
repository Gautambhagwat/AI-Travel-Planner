import {
  CalendarDays,
  IndianRupee,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

function TripSummary({ trip }) {
  const formattedBudget = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(trip.totalCost);

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-5 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8">

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
          <Sparkles size={18} />

          <span className="text-sm font-semibold">
            AI Generated Itinerary
          </span>
        </div>

      <h1 className="break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {trip.tripTitle}
        </h1>

        <p className="mt-3 max-w-2xl text-sky-100">
          Your personalized travel plan has been created based on your
          preferences, budget and interests.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <CalendarDays size={18} />

              <span className="text-sm text-sky-100">
                Duration
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              {trip.days.length} Days
            </h3>
          </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <Users size={18} />

              <span className="text-sm text-sky-100">
                Travelers
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              {trip.travelers}
            </h3>
          </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <IndianRupee size={18} />

              <span className="text-sm text-sky-100">
                Estimated Budget
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              {formattedBudget}
            </h3>
          </div>

        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <MapPin size={18} />

              <span className="text-sm text-sky-100">
                Destination
              </span>
            </div>

            <h3 className="text-xl font-bold">
              {trip.tripTitle}
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default TripSummary;
