import { forwardRef } from "react";
import { cn } from "../../lib/cn";

const Input = forwardRef(function Input(
  {
    label,
    id,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    helperText,
    disabled = false,
    required = false,
    leftIcon,
    rightIcon,
    className,
    inputClassName,
    ...props
  },
  ref,
) {
  const inputId = id || props.name;

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-label text-secondary-700"
        >
          {label}
          {required && <span className="ml-0.5 text-error-600" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          className={cn(
            "w-full rounded-lg border bg-surface px-3 py-2.5 text-body text-secondary-800",
            "placeholder:text-secondary-400 transition-default",
            "hover:border-secondary-300",
            "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
            "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
            error
              ? "border-error-500 focus:border-error-500 focus:ring-error-500/20"
              : "border-border",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            inputClassName,
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="text-caption text-error-600" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className="text-caption text-secondary-500">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
