import { cn } from "../../../lib/cn";

function InfoCard({
  title,
  description,
  icon,
  variant = "default",
  className,
}) {
  const variants = {
    default: "border-border bg-surface",
    primary: "border-primary-100 bg-primary-50",
    accent: "border-accent-100 bg-accent-50",
    warning: "border-warning-100 bg-warning-50",
  };

  const iconVariants = {
    default: "bg-secondary-100 text-secondary-600",
    primary: "bg-primary-100 text-primary-600",
    accent: "bg-accent-100 text-accent-600",
    warning: "bg-warning-100 text-warning-600",
  };

  return (
    <div
      className={cn(
        "flex gap-4 rounded-xl border p-4",
        variants[variant],
        className,
      )}
    >
      {icon && (
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconVariants[variant])}>
          {icon}
        </div>
      )}

      <div className="min-w-0">
        {title && <h4 className="text-body font-semibold text-secondary-900">{title}</h4>}
        {description && (
          <p className="mt-1 text-body-sm text-secondary-600">{description}</p>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
