import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  PlaneTakeoff,
  Wallet,
} from "lucide-react";

import Button from "../common/Button";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">

      {/* Background Decorations */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl"></div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-8">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700">

            <Sparkles size={16} />

            AI Powered Travel Planning

          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-secondary-900 md:text-6xl lg:text-7xl">

            Your Next
            <span className="block text-primary-600">
              Adventure,
            </span>

            Planned by AI.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-secondary-600">

            Build personalized itineraries in seconds.
            Discover destinations, estimate budgets,
            optimize routes and travel with confidence.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/planner">

              <Button className="flex items-center gap-2 rounded-2xl px-7 py-3 text-base">

                Start Planning

                <ArrowRight size={18} />

              </Button>

            </Link>

            <Link to="/destination">

              <Button
                variant="outline"
                className="rounded-2xl px-7 py-3"
              >
                Explore Destinations
              </Button>

            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>

              <h3 className="text-3xl font-bold text-secondary-900">
                100+
              </h3>

              <p className="mt-1 text-secondary-500">
                Destinations
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-secondary-900">
                AI
              </h3>

              <p className="mt-1 text-secondary-500">
                Personalized Plans
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-secondary-900">
                24×7
              </h3>

              <p className="mt-1 text-secondary-500">
                Travel Assistant
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
            alt="Travel Destination"
            className="h-[620px] w-[470px] rounded-[36px] object-cover shadow-2xl"
          />

          {/* Destination Card */}

          <div className="absolute -left-14 top-10 rounded-3xl bg-white p-5 shadow-xl">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-primary-100 p-3">

                <MapPin
                  className="text-primary-600"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-semibold text-secondary-900">
                  Bali
                </h4>

                <p className="text-sm text-secondary-500">
                  5 Days • Beaches
                </p>

              </div>

            </div>

          </div>

          {/* Budget Card */}

          <div className="absolute -right-10 bottom-12 rounded-3xl bg-white p-5 shadow-xl">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-green-100 p-3">

                <Wallet
                  className="text-green-600"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-semibold text-secondary-900">
                  Smart Budget
                </h4>

                <p className="text-sm text-secondary-500">
                  Personalized Cost
                </p>

              </div>

            </div>

          </div>

          {/* Floating Badge */}

          <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-primary-600 px-5 py-3 text-white shadow-lg">

            <div className="flex items-center gap-2">

              <PlaneTakeoff size={18} />

              AI Trip Ready

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;