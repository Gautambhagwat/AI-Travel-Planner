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
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-secondary-500">
          Start planning your next adventure in just one click.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.route)}
              className="group rounded-3xl border border-secondary-200 bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-secondary-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-secondary-500">
                {action.description}
              </p>

              <div className="mt-6 flex items-center font-medium text-primary-600 transition group-hover:translate-x-1">
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