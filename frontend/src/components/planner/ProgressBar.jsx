import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Sparkles,
  Heart,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

import usePlanner from "../../hooks/usePlanner";

const steps = [
  { title: "Destination", icon: MapPin },
  { title: "Dates", icon: CalendarDays },
  { title: "Budget", icon: Wallet },
  { title: "Travelers", icon: Users },
  { title: "Style", icon: Sparkles },
  { title: "Interests", icon: Heart },
  { title: "Review", icon: CheckCircle2 },
];
function ProgressBar() {
  const { step } = usePlanner();
  const progress = (step / steps.length) * 100;

  return (
    <section className="mb-10" aria-label="Trip planner progress">

      {/* ── Header row ──────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="min-w-0">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm">
            <ClipboardList size={12} aria-hidden="true" />
            AI Trip Planner
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-secondary-900 sm:text-3xl">
            Plan Your Journey
          </h1>
          <p className="mt-1.5 text-sm text-secondary-500 leading-relaxed">
            Answer a few questions and let AI craft your perfect itinerary.
          </p>
        </div>

        {/* Step counter pill */}
        <div className="flex-shrink-0">
          <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-sky-50 px-4 py-3 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-500">
              Step
            </p>
            <p className="mt-0.5 text-2xl font-extrabold leading-none text-primary-700">
              {step}
              <span className="text-sm font-normal text-primary-400"> / {steps.length}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Progress track ─────────────────────────────────── */}
      <div className="mb-5">
        <div className="relative h-2 overflow-hidden rounded-full bg-secondary-100 shadow-inner">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-label={`Step ${step} of ${steps.length}`}
          >
            {/* Shimmer effect on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
          </div>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <p className="text-[11px] font-medium text-secondary-400">
            {step < steps.length ? `${steps.length - step} step${steps.length - step > 1 ? "s" : ""} remaining` : "Ready to generate!"}
          </p>
          <p className="text-[11px] font-semibold text-primary-600">
            {Math.round(progress)}% complete
          </p>
        </div>
      </div>

      {/* ── Step indicators (desktop only) ─────────────────── */}
      <nav aria-label="Planning steps" className="hidden lg:block">
        <ol className="flex items-start justify-between gap-1">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const num = index + 1;
            const active = step === num;
            const completed = step > num;

            return (
              <li
                key={item.title}
                className="flex flex-col items-center gap-1.5"
                aria-label={`Step ${num}: ${item.title}${active ? " (current)" : completed ? " (completed)" : " (upcoming)"}`}
                aria-current={active ? "step" : undefined}
              >
                {/* Icon circle */}
                <div className="relative">
                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-500
                      ${completed
                        ? "border-primary-500 bg-primary-500 text-white shadow-md shadow-primary-400/30"
                        : active
                        ? "border-primary-500 bg-white text-primary-600 shadow-lg shadow-primary-200/50 ring-4 ring-primary-50"
                        : "border-secondary-200 bg-white text-secondary-300"
                      }
                    `}
                  >
                    {completed
                      ? <CheckCircle2 size={16} aria-hidden="true" />
                      : <Icon size={15} aria-hidden="true" />
                    }
                  </div>

                  {/* Active pulse ring */}
                  {active && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-primary-200 opacity-50 pointer-events-none" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] font-semibold transition-all duration-300 ${
                    active
                      ? "text-primary-700 scale-105"
                      : completed
                      ? "text-primary-400"
                      : "text-secondary-300"
                  }`}
                >
                  {item.title}
                </span>

                {/* Connector lines — drawn between steps */}
                {index < steps.length - 1 && (
                  <div className="sr-only" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Connector line behind circles */}
        <div className="relative -mt-[52px] mb-[52px] mx-[18px] h-px">
          <div className="h-full w-full bg-secondary-200 rounded-full" />
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-700 ease-out"
            style={{ width: `${Math.max(0, ((step - 1) / (steps.length - 1)) * 100)}%` }}
          />
        </div>
      </nav>

      {/* ── Mobile: current step label ─────────────────────── */}
      <div className="mt-2 flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-50 to-sky-50 border border-primary-100 px-4 py-3 lg:hidden shadow-sm">
        {(() => {
          const cur = steps[step - 1];
          const Icon = cur?.icon;
          return Icon ? (
            <>
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Icon size={15} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary-400">
                  Current Step
                </p>
                <span className="text-sm font-bold text-primary-700">
                  {step}. {cur.title}
                </span>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs font-semibold text-primary-600">{Math.round(progress)}%</p>
              </div>
            </>
          ) : null;
        })()}
      </div>

    </section>
  );
}

export default ProgressBar;
