import { cn } from "../../../lib/cn";

function DashboardCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  className,
}) {
  const changeColors = {
    positive: "text-success-600",
    negative: "text-error-600",
    neutral: "text-secondary-500",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 shadow-card transition-default hover:shadow-card-hover",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-body-sm font-medium text-secondary-500">{title}</p>
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
            {icon}
          </div>
        )}
      </div>

      <p className="mt-3 text-h2 text-secondary-900">{value}</p>

      {change && (
        <p className={cn("mt-2 text-body-sm", changeColors[changeType])}>
          {change}
        </p>
      )}
    </div>
  );
}

export default DashboardCard;
