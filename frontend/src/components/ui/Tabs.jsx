import { cn } from "../../lib/cn";

function Tabs({
  tabs = [],
  activeTab,
  onChange,
  variant = "underline",
  className,
}) {
  return (
    <div className={cn("", className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          "flex gap-1 overflow-x-auto",
          variant === "underline" && "border-b border-border",
          variant === "pills" && "rounded-xl bg-surface-muted p-1",
        )}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onChange?.(tab.id)}
              className={cn(
                "shrink-0 px-4 py-2.5 text-body-sm font-medium transition-default",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
                variant === "underline" && [
                  "border-b-2 -mb-px",
                  isActive
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent text-secondary-500 hover:border-secondary-300 hover:text-secondary-700",
                ],
                variant === "pills" && [
                  "rounded-lg",
                  isActive
                    ? "bg-surface text-secondary-900 shadow-sm"
                    : "text-secondary-500 hover:text-secondary-700",
                ],
              )}
            >
              {tab.icon && <span className="mr-2 inline-flex">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TabPanel({ id, activeTab, children, className }) {
  if (activeTab !== id) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={cn("pt-6", className)}
    >
      {children}
    </div>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;
