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
    stepIndex: 1,
  },
  {
    title: "Smart Budget",
    description:
      "Get accurate cost estimates for transport, hotels, food, and activities before you travel.",
    icon: Wallet,
    color: "bg-emerald-100 text-emerald-600",
    stepIndex: 1,
  },
  {
    title: "Weather Insights",
    description:
      "Plan your vacation with weather forecasts and the best seasons for every destination.",
    icon: CloudSun,
    color: "bg-amber-100 text-amber-600",
    stepIndex: 2,
  },
  {
    title: "Hidden Gems",
    description:
      "Discover local attractions, offbeat experiences, and authentic places loved by locals.",
    icon: Compass,
    color: "bg-purple-100 text-purple-600",
    stepIndex: 2,
  },
];

function Features() {
  const handleLearnMore = (stepIndex) => {
    const section = document.getElementById("how-it-works");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // After scroll settles, briefly highlight the target step card
    setTimeout(() => {
      const stepCards = section.querySelectorAll("[data-step]");
      const targetCard = stepCards[stepIndex - 1];
      if (targetCard) {
        targetCard.classList.add("ring-2", "ring-primary-400", "ring-offset-2", "scale-[1.02]");
        setTimeout(() => {
          targetCard.classList.remove("ring-2", "ring-primary-400", "ring-offset-2", "scale-[1.02]");
        }, 1600);
      }
    }, 700);
  };

  return (
    <section id="features" className="bg-sky-50/60 py-16 lg:py-20 xl:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">

          <span className="rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-semibold text-primary-700 sm:text-sm">
            Why Travelers Love Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Plan Smarter
          </h2>

          <p className="mt-4 text-base leading-relaxed text-secondary-600 lg:text-lg">
            Our AI combines destination knowledge, budgeting,
            weather insights, and personalized recommendations
            to help you build unforgettable journeys.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl lg:p-7"
              >

                <div>

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 lg:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary-600 lg:text-base">
                    {feature.description}
                  </p>

                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => handleLearnMore(feature.stepIndex)}
                    className="flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all duration-200 group-hover:gap-3 hover:text-primary-700 focus:outline-none focus:underline"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
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

export default Features;