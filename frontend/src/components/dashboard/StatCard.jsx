import {
  MapPinned,
  Wallet,
  PlaneTakeoff,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  "Saved trips": PlaneTakeoff,
  Destinations: MapPinned,
  "Estimated spend": Wallet,
};

const colorMap = {
  "Saved trips": "bg-primary-100 text-primary-700",
  Destinations: "bg-accent-100 text-accent-700",
  "Estimated spend": "bg-success-100 text-success-700",
};

function StatCard({ title, value }) {
  const Icon = iconMap[title] || PlaneTakeoff;
  const colors =
    colorMap[title] || "bg-secondary-100 text-secondary-700";

  return (
    <div className="group rounded-3xl border border-secondary-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">

      {/* Top Row */}
      <div className="flex items-center justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors}`}
        >
          <Icon size={28} />
        </div>

        <div className="flex items-center gap-1 rounded-full bg-success-50 px-3 py-1 text-xs font-semibold text-success-700">
          <TrendingUp size={14} />
          Active
        </div>

      </div>

      {/* Title */}
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-secondary-500">
        {title}
      </p>

      {/* Value */}
      <h3 className="mt-2 text-4xl font-bold text-secondary-900">
        {value}
      </h3>

      {/* Footer */}
      <div className="mt-6 border-t border-secondary-100 pt-4">
        <p className="text-sm text-secondary-500">
          Updated just now
        </p>
      </div>

    </div>
  );
}

export default StatCard;