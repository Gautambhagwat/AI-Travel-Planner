/**
 * DayBadge.jsx
 *
 * Pill badge that shows "DAY N" with a calendar icon.
 * Used in the top-left corner of each DayTimeline card.
 */

import { CalendarDays } from "lucide-react";

function DayBadge({ dayNumber }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-1.5 shadow-md">
      <CalendarDays size={14} className="text-white/80" />
      <span className="text-xs font-bold tracking-widest text-white uppercase">
        Day {dayNumber}
      </span>
    </div>
  );
}

export default DayBadge;
