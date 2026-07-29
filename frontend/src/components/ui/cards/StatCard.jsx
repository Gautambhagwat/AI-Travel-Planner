import { cn } from "../../../lib/cn";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendDirection = "up",
  className,
}) {
  const trendColors = {
    up: "text-success-600",
    down: "text-error-600",
    neutral: "text-secondary-500",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-body-sm font-medium text-secondary-500">{title}</p>
        {icon && (
          <span className="text-secondary-400">{icon}</span>
        )}
      </div>

      <h3 className="mt-3 text-h2 text-secondary-900">{value}</h3>

      {(subtitle || trend) && (
        <div className="mt-2 flex items-center gap-2">
          {trend && (
            <span className={cn("text-body-sm font-medium", trendColors[trendDirection])}>
              {trend}
            </span>
          )}
          {subtitle && (
            <span className="text-body-sm text-secondary-500">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default StatCard;
