import { cn } from "../../lib/cn";

function Switch({
  label,
  id,
  checked,
  onChange,
  disabled = false,
  className,
  ...props
}) {
  const switchId = id || props.name;

  return (
    <label
      htmlFor={switchId}
      className={cn(
        "inline-flex cursor-pointer items-center gap-3",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}
    >
      <span className="relative inline-flex shrink-0">
        <input
          type="checkbox"
          role="switch"
          id={switchId}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          aria-hidden="true"
          className={cn(
            "block h-6 w-11 rounded-full transition-default",
            "bg-secondary-300 peer-checked:bg-primary-600",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-default",
            "peer-checked:translate-x-5",
          )}
        />
      </span>

      {label && (
        <span className="text-body-sm text-secondary-700">{label}</span>
      )}
    </label>
  );
}

export default Switch;
