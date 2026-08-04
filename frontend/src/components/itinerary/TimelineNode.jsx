/**
 * TimelineNode.jsx
 *
 * The left-column element in the timeline: a period icon inside a
 * colored circle, connected to the next item by a vertical line.
 *
 * Props
 * ─────
 *  icon       Lucide icon component
 *  colors     Object from getPeriodColors()
 *  isLast     If true, the connector line is hidden
 */

function TimelineNode({ icon: Icon, colors, isLast }) {
  return (
    <div className="flex flex-col items-center">
      {/* Icon circle */}
      <div
        className={`
          relative z-10 flex h-9 w-9 flex-shrink-0
          items-center justify-center rounded-full
          border-2 border-white shadow-md
          ${colors.bg} ${colors.icon}
        `}
      >
        <Icon size={16} />
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className={`mt-1 w-px flex-1 min-h-[2rem] ${colors.line} opacity-60`} />
      )}
    </div>
  );
}

export default TimelineNode;
