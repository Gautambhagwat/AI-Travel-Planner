import { forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

const Checkbox = forwardRef(function Checkbox(
  {
    label,
    id,
    checked,
    onChange,
    disabled = false,
    error,
    className,
    ...props
  },
  ref,
) {
  const checkboxId = id || props.name;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={checkboxId}
        className={cn(
          "inline-flex cursor-pointer items-start gap-3",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <span className="relative mt-0.5 flex shrink-0">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <span
            aria-hidden="true"
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-md border transition-default",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
              checked
                ? "border-primary-600 bg-primary-600"
                : error
                  ? "border-error-500 bg-surface"
                  : "border-border-strong bg-surface",
            )}
          >
            {checked && (
              <Check size={14} className="text-white" strokeWidth={3} />
            )}
          </span>
        </span>

        {label && (
          <span className="text-body-sm text-secondary-700">{label}</span>
        )}
      </label>

      {error && (
        <p className="text-caption text-error-600" role="alert">{error}</p>
      )}
    </div>
  );
});

export default Checkbox;
