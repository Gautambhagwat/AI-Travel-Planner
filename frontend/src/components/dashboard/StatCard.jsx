import {
  MapPinned,
  Wallet,
  PlaneTakeoff,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  "saved trips": PlaneTakeoff,
  destinations: MapPinned,
  "estimated budget": Wallet,
  "estimated spend": Wallet,
};

const colorMap = {
  "saved trips": "bg-primary-100 text-primary-700",
  destinations: "bg-accent-100 text-accent-700",
  "estimated budget": "bg-success-100 text-success-700",
  "estimated spend": "bg-success-100 text-success-700",
};

function StatCard({ title, value }) {
  const key = (title || "").toLowerCase();
  const Icon = iconMap[key] || PlaneTakeoff;
  const colors =
    colorMap[key] || "bg-secondary-100 text-secondary-700";

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-secondary-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:rounded-3xl lg:p-5">

      <div>
        {/* Top Row */}
        <div className="flex items-center justify-between">

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl lg:h-11 lg:w-11 ${colors}`}
          >
            <Icon size={20} />
          </div>

          <div className="flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700">
            <TrendingUp size={12} />
            Active
          </div>

        </div>

        {/* Title */}
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-secondary-500">
          {title}
        </p>

        {/* Value */}
        <h3 className="mt-1 text-2xl font-bold text-secondary-900 lg:text-3xl">
          {value}
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-3 border-t border-secondary-100 pt-2.5">
        <p className="text-xs text-secondary-400">
          Updated just now
        </p>
      </div>

    </div>
  );
}

export default StatCard;
