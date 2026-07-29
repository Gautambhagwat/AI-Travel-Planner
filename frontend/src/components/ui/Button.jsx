import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

const variants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md",
  secondary:
    "bg-secondary-100 text-secondary-800 hover:bg-secondary-200 active:bg-secondary-300",
  outline:
    "border border-border-strong bg-surface text-secondary-700 hover:bg-surface-muted hover:border-secondary-400",
  ghost:
    "bg-transparent text-secondary-700 hover:bg-secondary-100 active:bg-secondary-200",
  danger:
    "bg-error-600 text-white hover:bg-error-700 active:bg-error-700 shadow-sm",
  success:
    "bg-success-600 text-white hover:bg-success-700 active:bg-success-700 shadow-sm",
};

const sizes = {
  sm: "h-8 px-3 text-body-sm gap-1.5 rounded-md",
  md: "h-10 px-4 text-body-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-body gap-2.5 rounded-lg",
  xl: "h-14 px-8 text-body gap-3 rounded-xl",
};

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-default",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size="sm" className={variant === "outline" || variant === "ghost" ? "text-primary-600" : "text-white"} />
          <span>{children}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}

export default Button;
