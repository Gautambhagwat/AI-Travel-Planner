import { cn } from "../../../lib/cn";

function FeatureCard({
  title,
  description,
  icon,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-card transition-default hover:border-border-strong hover:shadow-card-hover",
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
          {icon}
        </div>
      )}

      <h3 className="text-h4 text-secondary-900">{title}</h3>

      {description && (
        <p className="mt-2 text-body-sm leading-relaxed text-secondary-500">{description}</p>
      )}
    </div>
  );
}

export default FeatureCard;
