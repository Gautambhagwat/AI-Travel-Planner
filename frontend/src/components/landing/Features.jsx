import {
  Sparkles,
  Wallet,
  CloudSun,
  Compass,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "AI Trip Planner",
    description:
      "Create complete day-wise travel itineraries tailored to your interests in just a few seconds.",
    icon: Sparkles,
    color: "bg-primary-100 text-primary-600",
  },
  {
    title: "Smart Budget",
    description:
      "Get accurate cost estimates for transport, hotels, food, and activities before you travel.",
    icon: Wallet,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Weather Insights",
    description:
      "Plan your vacation with weather forecasts and the best seasons for every destination.",
    icon: CloudSun,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Hidden Gems",
    description:
      "Discover local attractions, offbeat experiences, and authentic places loved by locals.",
    icon: Compass,
    color: "bg-purple-100 text-purple-600",
  },
];

function Features() {
  return (
    <section className="bg-sky-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            Why Travelers Love Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-secondary-900 md:text-5xl">
            Everything You Need to Plan Smarter
          </h2>

          <p className="mt-5 text-lg leading-8 text-secondary-600">
            Our AI combines destination knowledge, budgeting,
            weather insights, and personalized recommendations
            to help you build unforgettable journeys.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl border border-secondary-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-secondary-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-secondary-600">
                  {feature.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-primary-600 transition group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;