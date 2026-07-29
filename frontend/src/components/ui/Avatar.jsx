import { cn } from "../../lib/cn";

function Avatar({
  name = "User",
  src,
  size = "md",
  className,
}) {
  const sizes = {
    xs: "h-8 w-8 text-caption",
    sm: "h-10 w-10 text-body-sm",
    md: "h-12 w-12 text-body",
    lg: "h-16 w-16 text-h4",
    xl: "h-20 w-20 text-h3",
  };

  const initial = name?.charAt(0)?.toUpperCase() || "?";

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          "rounded-full object-cover ring-2 ring-surface shadow-sm",
          sizes[size],
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      className={cn(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 font-semibold text-white shadow-sm",
        sizes[size],
        className,
      )}
    >
      {initial}
    </div>
  );
}

export default Avatar;
