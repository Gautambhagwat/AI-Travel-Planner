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
    <div className="group flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:rounded-3xl">

      <div>
        {/* Top Row */}
        <div className="flex items-center justify-between">

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${colors}`}
          >
            <Icon size={20} aria-hidden="true" />
          </div>

          <div className="flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-1 text-[11px] font-bold text-success-700">
            <TrendingUp size={12} aria-hidden="true" />
            Active
          </div>

        </div>

        {/* Title */}
        <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-secondary-400">
          {title}
        </p>

        {/* Value */}
        <h3 className="mt-1 text-2xl font-extrabold text-secondary-900 lg:text-3xl">
          {value}
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-secondary-100 pt-3">
        <p className="text-[11px] font-medium text-secondary-400">
          Updated just now
        </p>
      </div>

    </div>
  );
}

export default StatCard;
