import { forwardRef } from "react";
import { cn } from "../../lib/cn";

const Textarea = forwardRef(function Textarea(
  {
    label,
    id,
    placeholder,
    value,
    onChange,
    error,
    helperText,
    disabled = false,
    required = false,
    rows = 4,
    className,
    ...props
  },
  ref,
) {
  const textareaId = id || props.name;

  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={textareaId} className="text-label text-secondary-700">
          {label}
          {required && <span className="ml-0.5 text-error-600" aria-hidden="true">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={
          error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
        }
        className={cn(
          "w-full resize-y rounded-lg border bg-surface px-3 py-2.5 text-body text-secondary-800",
          "placeholder:text-secondary-400 transition-default",
          "hover:border-secondary-300",
          "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
          "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
          error
            ? "border-error-500 focus:border-error-500 focus:ring-error-500/20"
            : "border-border",
        )}
        {...props}
      />

      {error && (
        <p id={`${textareaId}-error`} className="text-caption text-error-600" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${textareaId}-helper`} className="text-caption text-secondary-500">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Textarea;
