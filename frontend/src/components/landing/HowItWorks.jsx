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
  },
  {
    title: "AI Builds Your Itinerary",
    description:
      "Our AI generates a personalized day-by-day itinerary with attractions, hotels, transport, and budget estimates.",
    icon: Sparkles,
    color: "bg-primary-100 text-primary-600",
  },
  {
    title: "Pack & Explore",
    description:
      "Save your trip, revisit it anytime, and enjoy a stress-free travel experience.",
    icon: PlaneTakeoff,
    color: "bg-green-100 text-green-600",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-secondary-900 md:text-5xl">
            Plan Your Trip in 3 Easy Steps
          </h2>

          <p className="mt-5 text-lg leading-8 text-secondary-600">
            From a simple idea to a complete travel itinerary—
            our AI does the planning so you can focus on enjoying the journey.
          </p>

        </div>

        {/* Steps */}

        <div className="relative grid gap-10 lg:grid-cols-3">

          {/* Desktop Connecting Line */}

          <div className="absolute left-1/2 top-14 hidden h-1 w-2/3 -translate-x-1/2 rounded-full bg-secondary-200 lg:block"></div>

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className="relative z-10 rounded-3xl border border-secondary-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl ${step.color}`}
                >
                  <Icon size={34} />
                </div>

                <div className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-secondary-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-secondary-600">
                  {step.description}
                </p>

                <div className="mt-8 flex items-center justify-center gap-2 font-semibold text-primary-600">

                  Learn More

                  <ArrowRight size={18} />

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