/**
 * ActivityCard.jsx
 *
 * A single activity within a period section.
 * Animated with Framer Motion — slides up + fades in.
 *
 * Props
 * ─────
 *  activity    string  — raw activity text from the parsed itinerary
 *  index       number  — used for staggered animation delay
 *  colors      object  — period color tokens from getPeriodColors()
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { getActivityIcon } from "./getActivityIcon.js";

function ActivityCard({ activity, index, colors }) {
  const ActivityIcon = getActivityIcon(activity.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -2, scale: 1.005 }}
      className={`
        group relative cursor-default rounded-xl border bg-white p-4
        shadow-sm transition-shadow duration-200
        hover:shadow-md
        ${colors.border}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Activity-type icon */}
        <div
          className={`
            mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center
            rounded-lg ${colors.bg} ${colors.icon}
          `}
        >
          <ActivityIcon size={15} />
        </div>

        {/* Text */}
        <p className="flex-1 text-sm font-medium leading-6 text-secondary-800">
          {activity.title}
        </p>

        {/* Status check */}
        <CheckCircle2
          size={16}
          className={`mt-0.5 flex-shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${colors.icon}`}
        />
      </div>
    </motion.div>
  );
}

export default ActivityCard;
