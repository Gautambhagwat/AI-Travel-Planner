import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

function Dropdown({
  trigger,
  items = [],
  align = "right",
  className,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const alignClasses = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <div onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </div>

      {open && (
        <div
          role="menu"
          className={cn(
            "absolute z-50 mt-2 min-w-[12rem] overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg",
            alignClasses[align],
          )}
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2 px-4 py-2.5 text-left text-body-sm transition-default",
                item.danger
                  ? "text-error-600 hover:bg-error-50"
                  : "text-secondary-700 hover:bg-surface-muted",
                item.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
