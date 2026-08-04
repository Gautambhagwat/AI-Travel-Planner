/**
 * AIOptimizationCard.jsx
 *
 * The "✨ AI Optimized" info card shown in the top-right of each day.
 * Communicates that activities are arranged for minimal travel.
 */

import { Sparkles, Route, Clock } from "lucide-react";

function AIOptimizationCard() {
  return (
    <div className="flex-shrink-0 w-full md:w-56 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-sky-50 p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 shadow-sm">
          <Sparkles size={14} className="text-white" />
        </div>
        <span className="text-sm font-bold text-primary-700">AI Optimized</span>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <Route size={13} className="mt-0.5 flex-shrink-0 text-primary-500" />
          <p className="text-xs leading-5 text-secondary-600">
            Activities arranged for efficient travel.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={13} className="mt-0.5 flex-shrink-0 text-primary-500" />
          <p className="text-xs leading-5 text-secondary-600">
            Walking &amp; driving time minimized.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AIOptimizationCard;
