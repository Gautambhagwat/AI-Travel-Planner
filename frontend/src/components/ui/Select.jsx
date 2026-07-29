import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";

const Select = forwardRef(function Select(
  {
    label,
    id,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    error,
    helperText,
    disabled = false,
    required = false,
    className,
    ...props
  },
  ref,
) {
  const selectId = id || props.name;

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={selectId} className="text-label text-secondary-700">
          {label}
          {required && <span className="ml-0.5 text-error-600" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
          }
          className={cn(
            "w-full appearance-none rounded-lg border bg-surface px-3 py-2.5 pr-10 text-body text-secondary-800",
            "transition-default hover:border-secondary-300",
            "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
            "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
            error
              ? "border-error-500 focus:border-error-500 focus:ring-error-500/20"
              : "border-border",
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value ?? option}
              value={option.value ?? option}
            >
              {option.label ?? option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p id={`${selectId}-error`} className="text-caption text-error-600" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${selectId}-helper`} className="text-caption text-secondary-500">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Select;
