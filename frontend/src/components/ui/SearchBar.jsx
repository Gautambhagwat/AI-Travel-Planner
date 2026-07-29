import { Search, X } from "lucide-react";
import { cn } from "../../lib/cn";

function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onClear,
  onSubmit,
  size = "md",
  className,
  ...props
}) {
  const sizes = {
    sm: "h-9 text-body-sm",
    md: "h-12 text-body-sm",
    lg: "h-12 text-body",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      <Search
        size={18}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400"
        aria-hidden="true"
      />

      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={placeholder}
        className={cn(
          "w-full rounded-xl border border-border bg-surface pl-10 pr-10 text-secondary-800",
          "placeholder:text-secondary-400 transition-default",
          "hover:border-secondary-300",
          "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
          sizes[size],
        )}
        {...props}
      />

      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-secondary-400 transition-default hover:text-secondary-600"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </form>
  );
}

export default SearchBar;
