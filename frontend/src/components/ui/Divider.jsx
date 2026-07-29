import { cn } from "../../lib/cn";

function Divider({
  label,
  className,
  orientation = "horizontal",
}) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("mx-2 w-px self-stretch bg-border", className)}
      />
    );
  }

  if (label) {
    return (
      <div className={cn("relative flex items-center py-2", className)}>
        <div className="grow border-t border-border" />
        <span className="mx-4 shrink-0 text-caption font-medium uppercase tracking-wide text-secondary-400">
          {label}
        </span>
        <div className="grow border-t border-border" />
      </div>
    );
  }

  return (
    <hr
      className={cn("border-0 border-t border-border", className)}
    />
  );
}

export default Divider;
