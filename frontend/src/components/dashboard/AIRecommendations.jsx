import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  CloudSun,
  Wallet,
  MapPinned,
  ArrowRight,
} from "lucide-react";

function AIRecommendations() {
  const navigate = useNavigate();

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
    <section className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
          <Sparkles size={26} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-secondary-900">
            AI Travel Insights
          </h2>

          <p className="text-secondary-500">
            Personalized recommendations based on your travel preferences.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-secondary-200 p-5 transition-all duration-300 hover:border-primary-200 hover:bg-primary-50"
            >
              <div className="flex gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-secondary-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-secondary-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 p-6 text-white">
        <div className="flex items-center gap-2">
          <Sparkles size={22} />

          <h3 className="text-xl font-semibold">
            AI Suggestion
          </h3>
        </div>

        <p className="mt-3 leading-relaxed text-primary-50">
          Your recent trips suggest you enjoy beach destinations and
          relaxed vacations. Consider planning a 5–7 day trip to Kerala
          or the Andaman Islands during the winter season.
        </p>

        <button
          onClick={() => navigate("/planner")}
          className="mt-6 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-primary-700 transition hover:scale-105"
        >
          Generate Full Itinerary
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default AIRecommendations;