import { Compass, Home, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6">

      <div className="w-full max-w-3xl rounded-3xl border border-secondary-200 bg-white p-12 text-center shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Compass size={52} />
        </div>

        {/* 404 */}

        <p className="mt-8 text-7xl font-black tracking-tight text-primary-600">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold text-secondary-900">
          Looks like you're off the map
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-secondary-500">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to planning your next adventure.
        </p>

        {/* Feature Cards */}

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-6">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <Home size={22} />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-secondary-900">
              Return Home
            </h2>

            <p className="mt-2 text-sm text-secondary-500">
              Go back to your dashboard and continue exploring your saved trips.
            </p>

          </div>

          <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-6">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <MapPinned size={22} />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-secondary-900">
              Plan a New Trip
            </h2>

            <p className="mt-2 text-sm text-secondary-500">
              Let AI create a personalized itinerary for your next destination.
            </p>

          </div>

        </div>

        {/* Actions */}

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Button
            onClick={() => navigate("/dashboard")}
          >
            <Home size={18} />
            Dashboard
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/planner")}
          >
            <MapPinned size={18} />
            Plan a Trip
          </Button>

        </div>

      </div>

    </div>
  );
}

export default NotFound;