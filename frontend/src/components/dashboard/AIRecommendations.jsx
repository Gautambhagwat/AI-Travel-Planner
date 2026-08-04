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
    <section className="flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-5 shadow-card sm:rounded-3xl lg:p-6">

      <div>
        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
            <Sparkles size={18} aria-hidden="true" />
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
                className="group rounded-2xl border border-secondary-200/80 p-3.5 transition-all duration-200 hover:border-primary-200 hover:bg-primary-50/50"
              >

                <div className="flex gap-3">

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-bold text-secondary-900">
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

      <div className="mt-5 rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 p-4 text-white shadow-md">

        <div className="flex items-center gap-2">

          <Sparkles size={16} className="text-amber-300" aria-hidden="true" />

          <h3 className="text-sm font-bold lg:text-base">
            AI Suggestion
          </h3>

        </div>

        <p className="mt-2 text-xs leading-relaxed text-primary-50">
          Your recent trips suggest you enjoy beach destinations and
          relaxed vacations. Consider planning a 5–7 day trip to Kerala
          or the Andaman Islands during the winter season.
        </p>

        <button
          type="button"
          className="mt-4 flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-primary-700 shadow-xs transition-all duration-200 hover:bg-primary-50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Generate Full Itinerary</span>

          <ArrowRight size={14} aria-hidden="true" />
        </button>

      </div>

    </section>
  );
}

export default AIRecommendations;
