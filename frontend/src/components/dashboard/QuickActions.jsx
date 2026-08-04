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

        <p className="mt-1 text-xs text-secondary-500 sm:text-sm">
          Start planning your next adventure in just one click.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.route)}
              className="group flex flex-col justify-between rounded-2xl border border-secondary-200 bg-white p-4 text-left shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card-hover lg:p-5"
            >
              <div>
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl lg:h-11 lg:w-11 ${action.color}`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-secondary-900 lg:text-lg">
                  {action.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-secondary-500 sm:text-sm">
                  {action.description}
                </p>
              </div>

              <div className="mt-3 flex items-center text-xs font-semibold text-primary-600 transition group-hover:translate-x-1 sm:text-sm">
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
