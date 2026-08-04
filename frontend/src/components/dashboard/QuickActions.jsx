import { useNavigate } from "react-router-dom";
import {
  PlaneTakeoff,
  Bookmark,
  Compass,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    title: "Plan a Trip",
    description: "Create a personalized itinerary with AI.",
    icon: PlaneTakeoff,
    color: "bg-primary-100 text-primary-700",
    route: "/planner",
  },
  {
    title: "AI Planner",
    description: "Get smart travel recommendations.",
    icon: Sparkles,
    color: "bg-accent-100 text-accent-700",
    route: "/planner",
  },
  {
    title: "Saved Trips",
    description: "Continue planning your previous journeys.",
    icon: Bookmark,
    color: "bg-success-100 text-success-700",
    route: "/saved-trips",
  },
  {
    title: "Explore",
    description: "Discover amazing destinations.",
    icon: Compass,
    color: "bg-warning-100 text-warning-700",
    route: "/destination/1",
  },
];

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section className="mb-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-secondary-900 lg:text-xl">
          Quick Actions
        </h2>

        <p className="mt-0.5 text-xs text-secondary-500 sm:text-sm">
          Start planning your next adventure in just one click.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() => navigate(action.route)}
              className="group flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <div>
                <div
                  className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${action.color}`}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>

                <h3 className="text-base font-bold text-secondary-900">
                  {action.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-secondary-500 sm:text-sm">
                  {action.description}
                </p>
              </div>

              <div className="mt-4 flex items-center text-xs font-bold text-primary-600 transition-transform group-hover:translate-x-1">
                Get Started →
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
