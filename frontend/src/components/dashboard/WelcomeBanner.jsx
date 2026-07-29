import { Link } from "react-router-dom";
import {
  Calendar,
  Sparkles,
  PlaneTakeoff,
  Bookmark,
} from "lucide-react";

import Button from "../common/Button";

function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 p-8 text-white shadow-xl">

      {/* Decorative Background */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

          <div className="mb-3 flex items-center gap-2 text-primary-100">
            <Calendar size={18} />
            <span>{today}</span>
          </div>

          <h2 className="text-4xl font-bold lg:text-5xl">
            {greeting}, Gautam 👋
          </h2>

          <p className="mt-4 max-w-xl text-lg text-primary-100">
  Discover incredible destinations and let AI craft a
  personalized itinerary based on your interests,
  budget, and travel style.
</p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link to="/planner">
              <Button className="flex items-center gap-2">
                <PlaneTakeoff size={18} />
                Plan New Trip
              </Button>
            </Link>

            <Link to="/saved-trips">
              <Button
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Bookmark size={18} />
                Saved Trips
              </Button>
            </Link>

          </div>
        </div>

        {/* AI Tip Card */}
        <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-md">

          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-300" size={22} />

            <h3 className="text-lg font-semibold">
              AI Travel Tip
            </h3>
          </div>

          <p className="leading-relaxed text-primary-50">
            September to February is one of the best seasons
            for exploring Rajasthan. Pleasant weather makes
            sightseeing much more enjoyable.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WelcomeBanner;