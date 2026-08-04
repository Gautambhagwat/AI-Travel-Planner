import { Link } from "react-router-dom";

const sizeClasses = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl lg:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

function BrandLogo({
  variant = "full",
  size = "md",
  className = "",
  clickable = false,
}) {
  const wordmarkClassName = [
    "font-brand block whitespace-nowrap font-bold italic leading-none text-primary-800",
    sizeClasses[size],
    variant === "icon" ? "tracking-[-0.08em]" : "tracking-[-0.04em]",
  ]
    .filter(Boolean)
    .join(" ");

  const wordmark = <span className={wordmarkClassName}>Itinera</span>;

  if (clickable) {
    return (
      <Link
        to="/"
        aria-label="Itinera - AI Travel Planner home"
        className={`inline-flex shrink-0 cursor-pointer items-center transition-opacity hover:opacity-85 ${className}`}
      >
        {wordmark}
      </Link>
    );
  }

  return (
    <div className={`inline-flex shrink-0 items-center ${className}`}>
      {wordmark}
    </div>
  );
}

export default BrandLogo;
