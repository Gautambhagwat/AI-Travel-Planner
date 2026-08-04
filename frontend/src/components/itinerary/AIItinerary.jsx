/**
 * AIItinerary.jsx
 *
 * Top-level itinerary section component.
 *
 * - Receives `aiRecommendation` (raw Markdown string from trip.aiRecommendation)
 * - Parses it with parseItinerary()
 * - Renders a DayTimeline for each parsed day
 * - Shows a graceful "No itinerary available" state on empty / parse failure
 *
 * This component is the ONLY thing that replaces the old ReactMarkdown block
 * in TripDetails/index.jsx. No other page component is touched.
 */

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, AlertCircle } from "lucide-react";
import { parseItinerary } from "./parseItinerary.js";
import DayTimeline from "./DayTimeline.jsx";

/* ── Empty / error state ─────────────────────────────────────────────────── */
function NoItinerary() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-secondary-200 bg-secondary-50 py-16 px-8 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100">
        <AlertCircle size={28} className="text-secondary-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-secondary-700">
          No itinerary available
        </h3>
        <p className="mt-2 text-sm text-secondary-500 max-w-sm">
          The AI could not generate a structured itinerary for this trip. Try
          regenerating your travel plan.
        </p>
      </div>
    </motion.div>
  );
}

/* ── Header ──────────────────────────────────────────────────────────────── */
function ItineraryHeader({ dayCount }) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="flex items-center gap-2.5 text-2xl font-bold text-secondary-900">
          <Sparkles size={22} className="text-primary-600" />
          AI Generated Itinerary
        </h2>
        <p className="mt-1.5 text-sm text-secondary-500">
          Your personalized day-by-day travel plan
        </p>
      </div>

      {dayCount > 0 && (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2">
          <MapPin size={14} className="text-primary-600" />
          <span className="text-sm font-semibold text-primary-700">
            {dayCount} {dayCount === 1 ? "Day" : "Days"} Planned
          </span>
        </div>
      )}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
function AIItinerary({ aiRecommendation }) {
console.log("ITINERARY DATA:", aiRecommendation);
  const days = useMemo(
    () => parseItinerary(aiRecommendation),
    [aiRecommendation]
  );

  return (
    <section className="mb-10 rounded-3xl border border-secondary-200 bg-white p-6 shadow-card md:p-8">
      <ItineraryHeader dayCount={days.length} />

      <AnimatePresence mode="wait">
        {days.length === 0 ? (
          <NoItinerary key="empty" />
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {days.map((dayData, idx) => (
              <DayTimeline
                key={`day-${dayData.day}-${idx}`}
                dayData={dayData}
                index={idx}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AIItinerary;
