import { useState } from "react";
import { cn } from "../../lib/cn";

function Tooltip({
  content,
  children,
  position = "top",
  className,
}) {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
  };

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && content && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 whitespace-nowrap rounded-lg bg-secondary-900 px-2.5 py-1.5 text-caption text-white shadow-lg",
            positionClasses[position],
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}

export default Tooltip;
