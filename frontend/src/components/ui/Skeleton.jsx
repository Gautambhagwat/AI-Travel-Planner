import { cn } from "../../lib/cn";

function Skeleton({ className, ...props }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-lg bg-secondary-200/70",
        className,
      )}
      {...props}
    />
  );
}

export default Skeleton;
