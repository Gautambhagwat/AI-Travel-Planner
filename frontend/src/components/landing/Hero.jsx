import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  PlaneTakeoff,
  Wallet,
  ChevronDown,
} from "lucide-react";

import Button from "../common/Button";

function Hero() {
  const handleExploreDestinations = () => {
    const section = document.getElementById("destinations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-10 lg:py-14 xl:py-16">

      {/* Background Decorations */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:gap-12 lg:px-8 xl:px-10">

        {/* Left */}

        <div className="max-w-xl lg:max-w-2xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 sm:text-sm">

            <Sparkles size={15} />

            AI Powered Travel Planning

          </div>

          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-secondary-900 sm:text-5xl lg:text-5xl xl:text-6xl">

            Your Next{" "}
            <span className="text-primary-600">
              Adventure,
            </span>
            <br />
            Planned by AI.

          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-secondary-600 lg:text-lg">

            Build personalized itineraries in seconds.
            Discover destinations, estimate budgets,
            optimize routes and travel with confidence.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <Link to="/planner">

              <Button className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md shadow-primary-500/20 transition-all hover:bg-primary-700 hover:shadow-lg lg:text-base">

                Start Planning

                <ArrowRight size={18} />

              </Button>

            </Link>

            <button
              onClick={handleExploreDestinations}
              className="inline-flex items-center gap-2 rounded-xl border border-secondary-300 bg-white px-6 py-3 text-sm font-semibold text-secondary-700 transition-all hover:bg-secondary-50 hover:border-secondary-400 hover:shadow-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              Explore Destinations
              <ChevronDown size={17} className="animate-bounce" />
            </button>

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-secondary-100 pt-8 sm:gap-6">

            <div>

              <h3 className="text-2xl font-extrabold text-secondary-900 lg:text-3xl">
                100+
              </h3>

              <p className="mt-0.5 text-xs font-medium text-secondary-500 lg:text-sm">
                Destinations
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-secondary-900 lg:text-3xl">
                AI
              </h3>

              <p className="mt-0.5 text-xs font-medium text-secondary-500 lg:text-sm">
                Personalized Plans
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-extrabold text-secondary-900 lg:text-3xl">
                24×7
              </h3>

              <p className="mt-0.5 text-xs font-medium text-secondary-500 lg:text-sm">
                Travel Assistant
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative w-full max-w-[420px] xl:max-w-[460px]">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
            alt="Travel Destination"
            className="h-[380px] w-full rounded-3xl object-cover shadow-2xl sm:h-[440px] lg:h-[500px] xl:h-[540px]"
          />

          {/* Destination Card */}

          <div className="absolute -left-6 top-6 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:block lg:-left-10 lg:top-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-primary-100 p-2.5">

                <MapPin
                  className="text-primary-600"
                  size={20}
                />

              </div>

              <div>

                <h4 className="text-sm font-bold text-secondary-900">
                  Bali
                </h4>

                <p className="text-xs text-secondary-500">
                  5 Days • Beaches
                </p>

              </div>

            </div>

          </div>

          {/* Budget Card */}

          <div className="absolute -right-4 bottom-6 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:block lg:-right-8 lg:bottom-10">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-emerald-100 p-2.5">

                <Wallet
                  className="text-emerald-600"
                  size={20}
                />

              </div>

              <div>

                <h4 className="text-sm font-bold text-secondary-900">
                  Smart Budget
                </h4>

                <p className="text-xs text-secondary-500">
                  Personalized Cost
                </p>

              </div>

            </div>

          </div>

          {/* Floating Badge */}

          <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 rounded-full border border-primary-400/30 bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur sm:block lg:top-6">

            <div className="flex items-center gap-2">

              <PlaneTakeoff size={16} />

              AI Trip Ready

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
