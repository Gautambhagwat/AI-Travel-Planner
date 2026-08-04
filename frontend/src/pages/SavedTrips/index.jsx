import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import EmptyState from "../../components/common/EmptyState";

import { getSavedTrips } from "../../services/tripService";

function SavedTrips() {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTrips(getSavedTrips());
  }, []);

  const filteredTrips = useMemo(() => {
    if (!search.trim()) return trips;

    const keyword = search.toLowerCase();

    return trips.filter(
      (trip) =>
        trip.tripTitle.toLowerCase().includes(keyword) ||
        trip.destination.toLowerCase().includes(keyword)
    );
  }, [search, trips]);

  return (
    <DashboardLayout>
      {/* Header */}

      <section className="mb-8 rounded-2xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-5 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              <Sparkles size={18} />

              <span className="text-sm font-semibold">
                Your Travel Library
              </span>
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Saved Trips
            </h1>

            <p className="mt-3 max-w-2xl text-sky-100">
              Access your AI-generated itineraries anytime and continue planning
              your next adventure.
            </p>
          </div>

          <Button className="w-full sm:w-auto" onClick={() => navigate("/planner")}>
            Plan New Trip
          </Button>

        </div>

      </section>

      {/* Search */}

      <section className="mb-8 rounded-2xl border border-secondary-200 bg-white p-4 shadow-card sm:mb-10 sm:rounded-3xl sm:p-6">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
          />

          <input
            type="text"
            placeholder="Search by destination or trip name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-secondary-200 py-3 pl-11 pr-4 outline-none transition focus:border-primary-500"
          />

        </div>

      </section>

      {/* Empty State */}

      {filteredTrips.length === 0 ? (
        <EmptyState
          title="No saved trips yet"
          description="Generate your first AI itinerary and save it here for quick access."
          button={
            <Button onClick={() => navigate("/planner")}>
              Create Your First Trip
            </Button>
          }
        />
      ) : (
        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredTrips.map((trip) => (
            <article
              key={trip.id}
              className="group min-w-0 overflow-hidden rounded-2xl border border-secondary-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
            >

              <div className="h-2 bg-gradient-to-r from-sky-500 to-cyan-500" />

              <div className="p-5 sm:p-6">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-primary-700">
                  <MapPin size={16} />

                  <span className="text-sm font-medium">
                    {trip.destination}
                  </span>
                </div>

                <h2 className="break-words text-xl font-bold text-secondary-900 sm:text-2xl">
                  {trip.tripTitle}
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3 text-secondary-600">
                    <CalendarDays size={18} />

                    <span>
                      {trip.startDate} – {trip.endDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-secondary-600">
                    <Users size={18} />

                    <span>
                      {trip.days.length} day
                      {trip.days.length > 1 ? "s" : ""} •{" "}
                      {trip.travelers} traveler
                      {trip.travelers > 1 ? "s" : ""}
                    </span>
                  </div>

                </div>

                <div className="mt-8 flex justify-between gap-3">

                  <Button
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() =>
                      navigate(`/trip-details/${trip.id}`)
                    }
                  >
                    View Trip
                  </Button>

                </div>

              </div>

            </article>
          ))}

        </section>
      )}
    </DashboardLayout>
  );
}

export default SavedTrips;
