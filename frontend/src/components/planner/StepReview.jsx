import {
  CalendarDays,
  MapPin,
  IndianRupee,
  Users,
  Compass,
  Car,
  Hotel,
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
      className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-200 hover:shadow-sm ${
        highlight
          ? "border-primary-200 bg-primary-50"
          : "border-secondary-100 bg-white hover:border-secondary-200"
      }`}
    >
      <div
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
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
        <p className="text-[11px] font-bold uppercase tracking-wide text-secondary-400">
          {label}
        </p>
        <p className={`mt-0.5 text-base font-semibold break-words ${
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
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-secondary-100 text-secondary-500">
        <Icon size={13} aria-hidden="true" />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-secondary-400">
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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-sky-800 p-6 text-white shadow-lg">
        {/* Decorative bg pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm">
              <MapPin size={10} aria-hidden="true" />
              Destination
            </div>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {tripData.destination || "Not set"}
            </h2>
            <p className="mt-1 text-sm text-primary-200">
              {tripDuration} {tripDuration === 1 ? "day" : "days"} ·{" "}
              {tripData.travelers} {tripData.travelers === 1 ? "traveler" : "travelers"}
              {tripData.travelStyle && ` · ${tripData.travelStyle}`}
            </p>
          </div>
          <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-2xl" aria-hidden="true">
            🗺️
          </div>
        </div>
      </div>

      {/* ── Trip details grid ── */}
      <div className="rounded-2xl border border-secondary-200 bg-white p-5 shadow-sm sm:p-6">
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
          <ReviewRow
            icon={Car}
            label="Transport"
            value={tripData.transport}
            emoji="🚗"
          />
          <ReviewRow
            icon={Hotel}
            label="Accommodation"
            value={tripData.accommodation}
            emoji="🏨"
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
      <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 via-sky-50 to-white p-6 shadow-sm">
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
              className="flex items-center gap-3 rounded-xl border border-white bg-white/70 px-3.5 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <span className="text-base" aria-hidden="true">{item.emoji}</span>
              <span className="text-sm font-medium text-secondary-700">{item.text}</span>
              <CheckCircle
                size={14}
                className="ml-auto flex-shrink-0 text-emerald-500"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Time estimate */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary-100 bg-white px-4 py-3.5">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <Zap size={15} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary-800">
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