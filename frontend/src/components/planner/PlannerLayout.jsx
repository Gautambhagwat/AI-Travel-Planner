import { AlertTriangle } from "lucide-react";

function PlannerLayout({ children, sidebar, validationMessage }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Main Content */}
        <div className="min-w-0">
          <div className="rounded-2xl border border-secondary-200 bg-white p-5 shadow-card sm:rounded-3xl sm:p-7 md:p-9">

            {/* Validation Banner */}
            {validationMessage && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-6 flex items-start gap-3 rounded-xl border border-warning-200 bg-warning-50 px-4 py-3.5 text-sm text-warning-700 shadow-sm animate-[slideDown_0.2s_ease-out]"
              >
                <AlertTriangle size={18} className="mt-0.5 flex-shrink-0 text-warning-500" aria-hidden="true" />
                <p className="font-medium leading-relaxed">{validationMessage}</p>
              </div>
            )}

            {children}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block" aria-label="Trip summary">
          <div className="sticky top-24">
            {sidebar}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PlannerLayout;
