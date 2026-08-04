import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Sparkles,
  Car,
  Hotel,
  Bot,
  CheckCircle2,
  Circle,
} from "lucide-react";

import usePlanner from "../../hooks/usePlanner";

const TOTAL_STEPS = 9;

const summaryFields = [
  { icon: MapPin,       label: "Destination",   key: "destination",   emoji: "📍" },
  { icon: CalendarDays, label: "Travel Dates",   key: "_dates",        emoji: "📅" },
  { icon: Wallet,       label: "Budget",         key: "budget",        emoji: "💰" },
  { icon: Users,        label: "Travelers",      key: "_travelers",    emoji: "👥" },
  { icon: Sparkles,     label: "Travel Style",   key: "travelStyle",   emoji: "🎯" },
  { icon: Car,          label: "Transport",      key: "transport",     emoji: "🚗" },
  { icon: Hotel,        label: "Accommodation",  key: "accommodation", emoji: "🏨" },
];

function getValue(key, tripData) {
  if (key === "_dates") {
    if (!tripData.startDate) return null;
    if (tripData.tripType === "multi-day" && tripData.endDate) {
      return `${tripData.startDate} → ${tripData.endDate}`;
    }
    return tripData.startDate;
  }
  if (key === "_travelers") {
    if (!tripData.travelers) return null;
    return `${tripData.travelers} ${tripData.travelers === 1 ? "Traveler" : "Travelers"}`;
  }
  return tripData[key] || null;
}

function InfoRow({ emoji, label, value }) {
  const filled = Boolean(value);

  return (
    <div className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 transition-all duration-200 ${
      filled
        ? "border-secondary-100 bg-white"
        : "border-dashed border-secondary-200 bg-secondary-50/50 opacity-60"
    }`}>
      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm ${
        filled
          ? "bg-primary-50 text-primary-600"
          : "bg-secondary-100 text-secondary-400"
      }`}>
        {filled ? (
          <span aria-hidden="true">{emoji}</span>
        ) : (
          <Circle size={14} className="text-secondary-300" aria-hidden="true" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wide text-secondary-400">
          {label}
        </p>
        <p className={`mt-0.5 break-words text-sm font-semibold leading-snug ${
          filled ? "text-secondary-900" : "text-secondary-400 font-normal italic"
        }`}>
          {value || "Not set yet"}
        </p>
      </div>

      {filled && (
        <CheckCircle2
          size={14}
          className="mt-1 flex-shrink-0 text-emerald-500"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function TripSummarySidebar() {
  const { tripData, step } = usePlanner();

  // Count filled fields for progress
  const filledCount = summaryFields.filter((f) => Boolean(getValue(f.key, tripData))).length;
  const progressPct = Math.round((filledCount / summaryFields.length) * 100);

  return (
    <div className="space-y-4">
      {/* ── Summary Card ── */}
      <div className="rounded-3xl border border-secondary-200 bg-white p-5 shadow-card">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
            <Sparkles size={18} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-secondary-900">
              Trip Summary
            </h2>
            <p className="text-xs text-secondary-400 mt-0.5">
              Updates as you plan
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-lg font-extrabold text-primary-700">{progressPct}%</p>
            <p className="text-[10px] font-semibold text-secondary-400 uppercase tracking-wide">Done</p>
          </div>
        </div>

        {/* Inline progress bar */}
        <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
            role="progressbar"
            aria-valuenow={filledCount}
            aria-valuemin={0}
            aria-valuemax={summaryFields.length}
            aria-label={`${filledCount} of ${summaryFields.length} details filled`}
          />
        </div>

        {/* Fields */}
        <div className="space-y-2.5">
          {summaryFields.map((field) => (
            <InfoRow
              key={field.key}
              emoji={field.emoji}
              label={field.label}
              value={getValue(field.key, tripData)}
            />
          ))}

          {/* Interests */}
          <div className={`rounded-xl border px-3.5 py-3 transition-all duration-200 ${
            tripData.interests?.length > 0
              ? "border-secondary-100 bg-white"
              : "border-dashed border-secondary-200 bg-secondary-50/50 opacity-60"
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm ${
                tripData.interests?.length > 0
                  ? "bg-primary-50 text-primary-600"
                  : "bg-secondary-100 text-secondary-400"
              }`}>
                {tripData.interests?.length > 0 ? (
                  <span aria-hidden="true">❤️</span>
                ) : (
                  <Circle size={14} className="text-secondary-300" aria-hidden="true" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wide text-secondary-400">
                  Interests
                </p>
                {tripData.interests?.length === 0 && (
                  <p className="text-sm italic font-normal text-secondary-400">Not set yet</p>
                )}
              </div>
              {tripData.interests?.length > 0 && (
                <CheckCircle2 size={14} className="text-emerald-500" aria-hidden="true" />
              )}
            </div>

            {tripData.interests?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {tripData.interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-medium text-primary-700 border border-primary-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── AI Tip Card ── */}
      <div className="rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-sky-800 p-5 text-white shadow-lg">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
            <Bot size={16} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-bold">AI Planner Tip</h3>
        </div>

        <p className="text-sm leading-relaxed text-primary-100">
          The more details you fill in, the smarter and more personalized your itinerary will be — from
          restaurants to hidden gems.
        </p>

        {/* Step indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/70 transition-all duration-700"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-white/70">{step}/{TOTAL_STEPS}</span>
        </div>
      </div>
    </div>
  );
}

export default TripSummarySidebar;