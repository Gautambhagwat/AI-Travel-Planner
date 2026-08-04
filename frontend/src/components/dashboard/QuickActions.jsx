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
              className="group flex h-52 flex-col items-center justify-center rounded-2xl border border-secondary-200/80 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${action.color}`}
              >
                <Icon size={24} aria-hidden="true" />
              </div>

              <h3 className="text-base font-semibold text-secondary-900">
                {action.title}
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-secondary-500">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;