import { cn } from "../../lib/cn";

function SectionHeader({
  title,
  subtitle,
  actions,
  className,
}) {
  return (
    <div className={cn("mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div>
        <h2 className="text-h3 text-secondary-900">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-body-sm text-secondary-500">{subtitle}</p>
        )}
      </div>

      {actions && (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      )}
    </div>
  );
}

export default SectionHeader;
