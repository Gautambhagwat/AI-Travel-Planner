import {
  CalendarDays,
  MapPin,
  IndianRupee,
  Users,
  Compass,
  Sparkles,
  CheckCircle,
  Clock,
  Heart,
  Zap,
} from "lucide-react";

import Chip from "../ui/Chip";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

function ReviewRow({ icon: Icon, label, value, highlight = false, emoji }) {
  if (!value) return null;

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border p-4 transition-all duration-200 hover:shadow-xs ${
        highlight
          ? "border-primary-200/80 bg-primary-50/70"
          : "border-secondary-200/80 bg-white hover:border-secondary-300"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          highlight
            ? "bg-primary-100 text-primary-700"
            : "bg-secondary-100 text-secondary-600"
        }`}
      >
        {emoji ? (
          <span className="text-base" aria-hidden="true">{emoji}</span>
        ) : (
          <Icon size={16} aria-hidden="true" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-secondary-400">
          {label}
        </p>
        <p className={`mt-0.5 text-sm font-bold break-words ${
          highlight ? "text-primary-800" : "text-secondary-900"
        }`}>
          {value}
        </p>
      </div>
    </div>
  );
}

function SectionDivider({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 mt-6 mb-4 first:mt-0">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-50 text-primary-600 border border-primary-100">
        <Icon size={14} aria-hidden="true" />
      </div>
      <p className="text-xs font-extrabold uppercase tracking-widest text-secondary-400">
        {title}
      </p>
      <div className="flex-1 h-px bg-secondary-100" />
    </div>
  );
}

function StepReview() {
  const { tripData } = usePlanner();

  const tripDuration =
    tripData.tripType === "multi-day"
      ? Math.ceil(
          (new Date(tripData.endDate) -
            new Date(tripData.startDate)) /
            (1000 * 60 * 60 * 24)
        ) + 1
      : 1;

  const dateDisplay = tripData.startDate
    ? tripData.tripType === "multi-day" && tripData.endDate
      ? `${tripData.startDate} → ${tripData.endDate}`
      : tripData.startDate
    : null;

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Review Your Trip"
        subtitle="Everything looks good? Hit Generate to create your AI-powered itinerary."
      />

      {/* ── Destination hero banner ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-sky-800 p-6 text-white shadow-xl">
        {/* Decorative bg pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
              <MapPin size={11} aria-hidden="true" />
              Destination
            </div>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {tripData.destination || "Not set"}
            </h2>
            <p className="mt-1.5 text-xs text-primary-100 sm:text-sm">
              {tripDuration} {tripDuration === 1 ? "day" : "days"} ·{" "}
              {tripData.travelers} {tripData.travelers === 1 ? "traveler" : "travelers"}
              {tripData.travelStyle && ` · ${tripData.travelStyle}`}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-2xl" aria-hidden="true">
            🗺️
          </div>
        </div>
      </div>

      {/* ── Trip details grid ── */}
      <div className="rounded-2xl border border-secondary-200/80 bg-white p-5 shadow-card sm:p-6">
        <SectionDivider title="Trip Details" icon={CalendarDays} />

        <div className="grid gap-3 sm:grid-cols-2">
          <ReviewRow
            icon={CalendarDays}
            label="Travel Dates"
            value={dateDisplay}
            highlight
          />
          <ReviewRow
            icon={Clock}
            label="Trip Duration"
            value={`${tripDuration} ${tripDuration === 1 ? "Day" : "Days"}`}
            highlight
          />
          <ReviewRow
            icon={IndianRupee}
            label="Budget"
            value={tripData.budget}
            emoji="💰"
          />
          <ReviewRow
            icon={Users}
            label="Travelers"
            value={
              tripData.travelers
                ? `${tripData.travelers} ${tripData.travelers === 1 ? "Traveler" : "Travelers"}`
                : null
            }
            emoji="👥"
          />
        </div>

        <SectionDivider title="Preferences" icon={Compass} />

        <div className="grid gap-3 sm:grid-cols-2">
          <ReviewRow
            icon={Compass}
            label="Travel Style"
            value={tripData.travelStyle}
            emoji="🎯"
          />
        </div>

        {/* Interests */}
        {tripData.interests?.length > 0 && (
          <>
            <SectionDivider title="Interests" icon={Heart} />
            <div className="flex flex-wrap gap-2" role="list" aria-label="Selected interests">
              {tripData.interests.map((interest) => (
                <Chip key={interest} selected>
                  {interest}
                </Chip>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── What AI will generate ── */}
      <div className="rounded-2xl border border-primary-200/80 bg-gradient-to-br from-primary-50/70 via-sky-50/40 to-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
            <Sparkles size={20} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-bold text-secondary-900">
              Your AI Itinerary Will Include
            </h3>
            <p className="text-xs text-secondary-500">
              Fully personalized to your preferences above
            </p>
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {[
            { text: "Day-wise travel itinerary", emoji: "📅" },
            { text: "Recommended attractions", emoji: "🏛️" },
            { text: "Restaurant suggestions", emoji: "🍽️" },
            { text: "Local transport options", emoji: "🚌" },
            { text: "Budget-aware planning", emoji: "💰" },
            { text: "Travel tips & essentials", emoji: "💡" },
            { text: "Best time to visit attractions", emoji: "⏰" },
            { text: "Personalized recommendations", emoji: "✨" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-xl border border-white bg-white/80 px-3.5 py-2.5 shadow-xs backdrop-blur-xs"
            >
              <span className="text-base" aria-hidden="true">{item.emoji}</span>
              <span className="text-xs font-semibold text-secondary-800">{item.text}</span>
              <CheckCircle
                size={14}
                className="ml-auto shrink-0 text-emerald-500"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Time estimate */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary-100 bg-white p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <Zap size={15} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold text-secondary-800 sm:text-sm">
              Generation time: <span className="text-primary-700">~5–10 seconds</span>
            </p>
            <p className="mt-0.5 text-xs text-secondary-500">
              After clicking <strong>Generate AI Trip</strong>, your itinerary will be ready instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepReview;