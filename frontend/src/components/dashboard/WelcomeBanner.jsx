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
    <section className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 p-5 text-white shadow-xl sm:rounded-3xl lg:p-7 xl:p-8">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

          <div className="mb-2.5 flex items-center gap-2 text-xs font-medium text-primary-100 sm:text-sm">
            <Calendar size={15} aria-hidden="true" />
            <span>{today}</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            {greeting}, Gautam 👋
          </h2>

          <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-primary-100 sm:text-sm lg:text-base">
            Discover incredible destinations and let AI craft a
            personalized itinerary based on your interests,
            budget, and travel style.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <Link to="/planner" className="w-full sm:w-auto">
              <Button className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-md shadow-primary-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <PlaneTakeoff size={18} aria-hidden="true" />
                Plan New Trip
              </Button>
            </Link>

            <Link to="/saved-trips" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Bookmark size={18} aria-hidden="true" />
                Saved Trips
              </Button>
            </Link>

          </div>
        </div>

        {/* AI Tip Card */}
        <div className="w-full shrink-0 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md lg:max-w-xs xl:max-w-sm">

          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="text-amber-300" size={18} aria-hidden="true" />

            <h3 className="text-sm font-bold text-white lg:text-base">
              AI Travel Tip
            </h3>
          </div>

          <p className="text-xs leading-relaxed text-primary-50 sm:text-sm">
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
