import { cn } from "../../lib/cn";

function RadioGroup({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  disabled = false,
  className,
  direction = "vertical",
}) {
  return (
    <fieldset
      disabled={disabled}
      className={cn("flex flex-col gap-3", className)}
    >
      {label && (
        <legend className="text-label text-secondary-700">{label}</legend>
      )}

      <div
        className={cn(
          "flex gap-4",
          direction === "vertical" ? "flex-col" : "flex-row flex-wrap",
        )}
      >
        {options.map((option) => {
          const optionValue = option.value ?? option;
          const optionLabel = option.label ?? option;
          const optionId = `${name}-${optionValue}`;

          return (
            <label
              key={optionValue}
              htmlFor={optionId}
              className={cn(
                "inline-flex cursor-pointer items-center gap-3",
                disabled && "cursor-not-allowed opacity-60",
              )}
            >
              <input
                type="radio"
                id={optionId}
                name={name}
                value={optionValue}
                checked={value === optionValue}
                onChange={(event) => onChange?.(event.target.value)}
                className="h-4 w-4 border-border-strong text-primary-600 focus:ring-2 focus:ring-primary-500/20"
              />
              <span className="text-body-sm text-secondary-700">{optionLabel}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="text-caption text-error-600" role="alert">{error}</p>
      )}
    </fieldset>
  );
}

export default RadioGroup;
