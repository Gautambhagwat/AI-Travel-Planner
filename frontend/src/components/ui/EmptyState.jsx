import { cn } from "../../lib/cn";

function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center sm:px-12 sm:py-16",
        className,
      )}
    >
      {icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
          {icon}
        </div>
      )}

      <h2 className="text-h3 text-secondary-900">{title}</h2>

      {description && (
        <p className="mt-3 max-w-md text-body-sm text-secondary-500">{description}</p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default EmptyState;
