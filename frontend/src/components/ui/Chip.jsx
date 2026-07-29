import { X } from "lucide-react";
import { cn } from "../../lib/cn";

const variants = {
  default: "bg-secondary-100 text-secondary-700 hover:bg-secondary-200",
  primary: "bg-primary-50 text-primary-700 hover:bg-primary-100",
  accent: "bg-accent-50 text-accent-700 hover:bg-accent-100",
  outline: "border border-border bg-surface text-secondary-700 hover:bg-surface-muted",
};

function Chip({
  children,
  variant = "default",
  onRemove,
  selected = false,
  onClick,
  className,
}) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-body-sm font-medium transition-default",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
        variants[variant],
        selected && "ring-2 ring-primary-500 ring-offset-1",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}

      {onRemove && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          className="rounded-full p-0.5 text-secondary-500 transition-default hover:bg-black/5 hover:text-secondary-700"
          aria-label="Remove"
        >
          <X size={14} />
        </button>
      )}
    </Component>
  );
}

export default Chip;
