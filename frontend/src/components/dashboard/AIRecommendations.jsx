import {
  Sparkles,
  CloudSun,
  Wallet,
  MapPinned,
  ArrowRight,
} from "lucide-react";

function AIRecommendations() {
  const recommendations = [
    {
      icon: MapPinned,
      title: "Destination Match",
      description:
        "Based on your previous trips, Kerala is a great destination for your next vacation.",
      color: "bg-primary-100 text-primary-700",
    },
    {
      icon: Wallet,
      title: "Budget Insight",
      description:
        "Travelling in October could reduce accommodation costs by up to 20%.",
      color: "bg-success-100 text-success-700",
    },
    {
      icon: CloudSun,
      title: "Weather Update",
      description:
        "Pleasant weather is expected in Goa throughout the coming month.",
      color: "bg-warning-100 text-warning-700",
    },
  ];

  return (
    <section className="flex flex-col justify-between rounded-2xl border border-secondary-200 bg-white p-4 shadow-card sm:rounded-3xl lg:p-5">

      <div>
        <div className="mb-4 flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700 lg:h-10 lg:w-10">
            <Sparkles size={18} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-secondary-900 lg:text-xl">
              AI Travel Insights
            </h2>

            <p className="text-xs text-secondary-500 sm:text-sm">
              Personalized recommendations based on your travel preferences.
            </p>
          </div>

        </div>

        <div className="space-y-3">

          {recommendations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-secondary-200 p-3 transition-all duration-300 hover:border-primary-200 hover:bg-primary-50 lg:p-3.5"
              >

                <div className="flex gap-3">

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-semibold text-secondary-900">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs leading-relaxed text-secondary-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      <div className="mt-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 p-3.5 text-white lg:mt-5 lg:p-4">

        <div className="flex items-center gap-2">

          <Sparkles size={16} />

          <h3 className="text-sm font-semibold lg:text-base">
            AI Suggestion
          </h3>

        </div>

        <p className="mt-1.5 text-xs leading-relaxed text-primary-50">
          Your recent trips suggest you enjoy beach destinations and
          relaxed vacations. Consider planning a 5–7 day trip to Kerala
          or the Andaman Islands during the winter season.
        </p>

        <button
          className="mt-3 flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-primary-700 transition hover:scale-105"
        >
          Generate Full Itinerary

          <ArrowRight size={15} />
        </button>

      </div>

    </section>
  );
}

export default AIRecommendations;
