import { Compass, Home, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4 sm:px-6">
      <div className="w-full max-w-3xl rounded-2xl border border-secondary-200 bg-white p-6 text-center shadow-2xl sm:rounded-3xl sm:p-12">
        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Compass size={52} />
        </div>

        {/* 404 */}
        <p className="mt-8 text-6xl font-black tracking-tight text-primary-600 sm:text-7xl">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-secondary-900 sm:text-4xl">
          Looks like you're off the map
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-secondary-500">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to planning your next adventure.
        </p>

        {/* Action Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Dashboard Card */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            aria-label="Return to Dashboard"
            className="group rounded-2xl border border-secondary-200 bg-secondary-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-primary-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 group-hover:scale-110">
              <Home size={24} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-secondary-900">
              Return Home
            </h2>

            <p className="mt-3 text-sm leading-6 text-secondary-500">
              Go back to your dashboard and continue exploring your saved trips.
            </p>
          </button>

          {/* Planner Card */}
          <button
            type="button"
            onClick={() => navigate("/planner")}
            aria-label="Plan a New Trip"
            className="group rounded-2xl border border-secondary-200 bg-secondary-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-primary-50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-transform duration-300 group-hover:scale-110">
              <MapPinned size={24} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-secondary-900">
              Plan a New Trip
            </h2>

            <p className="mt-3 text-sm leading-6 text-secondary-500">
              Let AI create a personalized itinerary for your next destination.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;