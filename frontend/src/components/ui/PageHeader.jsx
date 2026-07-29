import { cn } from "../../lib/cn";

function PageHeader({
  title,
  subtitle,
  actions,
  breadcrumbs,
  className,
}) {
  return (
    <header className={cn("mb-8", className)}>
      {breadcrumbs && (
        <div className="mb-4">{breadcrumbs}</div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-h1 text-secondary-900">{title}</h1>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-body text-secondary-500">{subtitle}</p>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 flex-wrap items-center gap-3">{actions}</div>
        )}
      </div>
    </header>
  );
}

export default PageHeader;
