import { Sparkles } from "lucide-react";

import BrandLogo from "../common/BrandLogo";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50/70">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-8 sm:px-6 sm:py-12">

        {/* Left Side */}

        <div className="hidden flex-1 pr-16 lg:block">

          <div className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-primary-50 px-4 py-2 text-xs font-semibold text-primary-700 shadow-xs">
              <Sparkles size={16} aria-hidden="true" />
              AI Powered Travel Planner
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-secondary-900 xl:text-6xl">
              Plan smarter.
              <br />
              <span className="text-primary-600">Travel better.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-secondary-600">
              Create AI-generated itineraries, discover destinations,
              manage trips and organize every journey from one beautiful
              platform.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4">

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

          <div className="rounded-2xl border border-secondary-200/80 bg-white p-6 shadow-xl backdrop-blur-md transition-all duration-300 animate-[scaleIn_0.3s_ease-out] sm:rounded-3xl sm:p-8 lg:p-10">

            <div className="mb-8 text-center">

              <div className="mb-6 flex justify-center">
                <BrandLogo variant="full" size="lg" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-secondary-900 sm:text-3xl">
                {title}
              </h2>

              <p className="mt-2 text-sm text-secondary-500">
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
    <div className="rounded-2xl border border-secondary-100 bg-white/90 p-4 shadow-xs transition-all duration-200 hover:border-primary-200 hover:shadow-sm">
      <h3 className="text-sm font-bold text-secondary-900">
        {title}
      </h3>

      <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default AuthLayout;
