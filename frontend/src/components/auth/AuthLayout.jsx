import { Sparkles } from "lucide-react";

import BrandLogo from "../common/BrandLogo";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-6 sm:px-6 sm:py-10">

        {/* Left Side */}

        <div className="hidden flex-1 pr-16 lg:block">

          <div className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-primary-700">
              <Sparkles size={16} />
              AI Powered Travel Planner
            </div>

            <h1 className="text-6xl font-bold leading-tight text-secondary-900">
              Plan smarter.
              <br />
              Travel better.
            </h1>

            <p className="mt-8 text-xl leading-9 text-secondary-600">
              Create AI-generated itineraries, discover destinations,
              manage trips and organize every journey from one beautiful
              platform.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-5">

              <Feature
                title="AI Itineraries"
                desc="Personalized day-wise trips"
              />

              <Feature
                title="Budget Planning"
                desc="Keep expenses organized"
              />

              <Feature
                title="Hotel Suggestions"
                desc="AI recommended stays"
              />

              <Feature
                title="Travel Anywhere"
                desc="Explore the world"
              />

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="w-full lg:max-w-lg">

          <div className="rounded-2xl border border-secondary-200 bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">

            <div className="mb-8 text-center">

              <div className="mb-6 flex justify-center">
                <BrandLogo variant="full" size="lg" />
              </div>

              <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
                {title}
              </h2>

              <p className="mt-3 text-secondary-500">
                {subtitle}
              </p>

            </div>

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-secondary-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-secondary-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-secondary-500">
        {desc}
      </p>
    </div>
  );
}

export default AuthLayout;
