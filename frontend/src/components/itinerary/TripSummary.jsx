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
  }).format(trip.totalPrice);

  const duration =
    Math.ceil(
      (
        new Date(trip.endDate) -
        new Date(trip.startDate)
      ) /
        (1000 * 60 * 60 * 24)
    ) + 1;

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-5 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8">
      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
          <Sparkles size={18} />

          <span className="text-sm font-semibold">
            Saved Trip
          </span>
        </div>

        <h1 className="break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {trip.tripName}
        </h1>

        <p className="mt-3 text-sky-100">
          Your personalized travel plan.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <CalendarDays size={18} />

            <p className="mt-2 text-sm">
              Duration
            </p>

            <h3 className="text-2xl font-bold">
              {duration} Days
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <Users size={18} />

            <p className="mt-2 text-sm">
              Travelers
            </p>

            <h3 className="text-2xl font-bold">
              {trip.numberOfPeople}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <IndianRupee size={18} />

            <p className="mt-2 text-sm">
              Budget
            </p>

            <h3 className="text-xl font-bold">
              {formattedBudget}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
            <MapPin size={18} />

            <p className="mt-2 text-sm">
              Destination
            </p>

            <h3 className="text-xl font-bold">
              {trip.tripName.replace(" AI Trip", "")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TripSummary;