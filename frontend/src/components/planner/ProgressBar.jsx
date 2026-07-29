import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Sparkles,
  Heart,
  Car,
  Hotel,
  CheckCircle2,
} from "lucide-react";

import usePlanner from "../../hooks/usePlanner";

const steps = [
  {
    title: "Destination",
    icon: MapPin,
  },
  {
    title: "Dates",
    icon: CalendarDays,
  },
  {
    title: "Budget",
    icon: Wallet,
  },
  {
    title: "Travelers",
    icon: Users,
  },
  {
    title: "Style",
    icon: Sparkles,
  },
  {
    title: "Interests",
    icon: Heart,
  },
  {
    title: "Transport",
    icon: Car,
  },
  {
    title: "Stay",
    icon: Hotel,
  },
  {
    title: "Review",
    icon: CheckCircle2,
  },
];

function ProgressBar() {
  const { step } = usePlanner();

  const progress = (step / steps.length) * 100;

  return (
    <section className="mb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-secondary-900">
            Plan Your Journey
          </h1>

          <p className="mt-2 text-secondary-500">
            Answer a few questions and let AI build your personalized itinerary.
          </p>
        </div>

        <div className="rounded-2xl border border-primary-100 bg-primary-50 px-5 py-3">
          <p className="text-xs uppercase tracking-wide text-primary-700">
            Progress
          </p>

          <p className="mt-1 text-xl font-bold text-primary-700">
            {step} / {steps.length}
          </p>
        </div>
      </div>

      <div className="mt-8">

        <div className="mb-6 h-2 overflow-hidden rounded-full bg-secondary-100">

          <div
            className="h-full rounded-full bg-primary-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="hidden justify-between lg:flex">

          {steps.map((item, index) => {
            const Icon = item.icon;

            const active = step === index + 1;

            const completed = step > index + 1;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3"
              >

                <div
                  className={`
                    flex h-11 w-11 items-center justify-center rounded-full border transition-all

                    ${
                      completed
                        ? "border-primary-600 bg-primary-600 text-white"
                        : active
                        ? "border-primary-600 bg-primary-50 text-primary-700"
                        : "border-secondary-200 bg-white text-secondary-400"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`
                    text-xs

                    ${
                      active
                        ? "font-semibold text-primary-700"
                        : "text-secondary-500"
                    }
                  `}
                >
                  {item.title}
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ProgressBar;