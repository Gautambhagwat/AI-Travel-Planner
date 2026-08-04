/**
 * DayTimeline.jsx
 *
 * One full day card containing:
 *   - DayBadge (top-left)
 *   - Day title + optional subtitle
 *   - AIOptimizationCard (top-right, hidden on mobile → shown below badge on xs)
 *   - Timeline of period sections → TimelineNode + ActivityCard rows
 *
 * Animated with Framer Motion — fades in, slides up from below.
 *
 * Props
 * ─────
 *  dayData     { day, title, subtitle, sections[] }
 *  index       number — used for staggered day entrance
 */

import { motion } from "framer-motion";
import DayBadge from "./DayBadge.jsx";
import AIOptimizationCard from "./AIOptimizationCard.jsx";
import TimelineNode from "./TimelineNode.jsx";
import ActivityCard from "./ActivityCard.jsx";
import { getPeriodIcon, getPeriodColors } from "./getActivityIcon.js";

function DayTimeline({ dayData, index }) {
  const { day, title, subtitle, sections } = dayData;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative rounded-3xl border border-secondary-200 bg-white shadow-card overflow-hidden"
    >
      {/* ── Subtle top accent stripe ── */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-sky-400 to-cyan-400" />

      <div className="p-6 md:p-8">

        {/* ── Header row: badge + title + AI card ── */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          {/* Left: badge + title */}
          <div className="flex flex-col gap-3">
            <DayBadge dayNumber={day} />

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1 text-sm text-secondary-500 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right: AI card */}
          <AIOptimizationCard />
        </div>

        {/* ── Divider ── */}
        <div className="mb-6 h-px w-full bg-secondary-100" />

        {/* ── Timeline sections ── */}
        <div className="space-y-8">
          {sections.map((section, sIdx) => {
            const colors = getPeriodColors(section.period);
            const PeriodIcon = getPeriodIcon(section.period);
            const isLastSection = sIdx === sections.length - 1;

            return (
              <div key={`${day}-${section.period}-${sIdx}`} className="flex gap-4">

                {/* Left: timeline column */}
                <div className="flex flex-col items-center pt-1">
                  <TimelineNode
                    icon={PeriodIcon}
                    colors={colors}
                    isLast={isLastSection}
                  />
                </div>

                {/* Right: section content */}
                <div className="flex-1 pb-2">

                  {/* Period label */}
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className={`
                        inline-flex items-center gap-1.5 rounded-full px-3 py-1
                        text-xs font-semibold tracking-wide
                        ${colors.badge}
                      `}
                    >
                      <PeriodIcon size={11} />
                      {section.period}
                    </span>
                    <div className="flex-1 h-px bg-secondary-100" />
                  </div>

                  {/* Activity cards */}
                  {section.activities.length > 0 ? (
                    <div className="space-y-2.5">
                      {section.activities.map((activity, aIdx) => (
                        <ActivityCard
                          key={`${day}-${section.period}-${aIdx}`}
                          activity={activity}
                          index={aIdx}
                          colors={colors}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm italic text-secondary-400">
                      No activities listed.
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </motion.article>
  );
}

export default DayTimeline;
