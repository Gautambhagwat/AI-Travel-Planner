import { useNavigate } from "react-router-dom";
import {
  Search,
  Sparkles,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Tell Us Your Dream Trip",
    description:
      "Choose your destination, budget, travel dates, interests, and preferred travel style.",
    icon: Search,
    color: "bg-sky-100 text-sky-600",
    cta: "Set Your Preferences",
  },
  {
    title: "AI Builds Your Itinerary",
    description:
      "Our AI generates a personalized day-by-day itinerary with attractions, hotels, transport, and budget estimates.",
    icon: Sparkles,
    color: "bg-primary-100 text-primary-600",
    cta: "See How AI Plans",
  },
  {
    title: "Pack & Explore",
    description:
      "Save your trip, revisit it anytime, and enjoy a stress-free travel experience.",
    icon: PlaneTakeoff,
    color: "bg-emerald-100 text-emerald-600",
    cta: "Start Your Journey",
  },
];

function HowItWorks() {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate("/planner");
  };

  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-20 xl:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">

          <span className="rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-semibold text-primary-700 sm:text-sm">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            Plan Your Trip in 3 Easy Steps
          </h2>

          <p className="mt-4 text-base leading-relaxed text-secondary-600 lg:text-lg">
            From a simple idea to a complete travel itinerary—
            our AI does the planning so you can focus on enjoying the journey.
          </p>

        </div>

        {/* Steps */}

        <div className="relative grid gap-8 lg:grid-cols-3">

          {/* Desktop Connecting Line */}

          <div className="absolute left-1/2 top-12 hidden h-0.5 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-200 via-sky-300 to-primary-200 lg:block"></div>

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                data-step={index + 1}
                className="relative z-10 flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl lg:p-8"
              >

                <div>

                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white shadow-md shadow-primary-500/20">
                    {index + 1}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-secondary-900 lg:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary-600 lg:text-base">
                    {step.description}
                  </p>

                </div>

                <div className="mt-6 pt-2">

                  <button
                    onClick={handleStartPlanning}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-all duration-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 hover:shadow-md hover:shadow-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    aria-label={`${step.cta} – go to planner`}
                  >
                    {step.cta}
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;