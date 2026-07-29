import { cn } from "../../lib/cn";

const variants = {
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
  accent: "bg-accent-100 text-accent-700",
  success: "bg-success-100 text-success-700",
  warning: "bg-warning-100 text-warning-700",
  error: "bg-error-100 text-error-700",
  info: "bg-info-100 text-info-700",
  gray: "bg-secondary-100 text-secondary-600",
};

const sizes = {
  sm: "px-2 py-0.5 text-caption",
  md: "px-2.5 py-0.5 text-body-sm",
  lg: "px-3 py-1 text-body-sm",
};

function Badge({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-current opacity-70"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
