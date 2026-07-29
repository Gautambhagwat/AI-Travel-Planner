import { MapPin, Star } from "lucide-react";
import { cn } from "../../../lib/cn";
import Badge from "../Badge";

function DestinationCard({
  name,
  country,
  image,
  rating,
  priceRange,
  badge,
  onClick,
  className,
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-default",
        onClick && "cursor-pointer hover:border-border-strong hover:shadow-card-hover",
        className,
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => event.key === "Enter" && onClick() : undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-default group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-secondary-400">
            <MapPin size={32} />
          </div>
        )}

        {badge && (
          <div className="absolute left-3 top-3">
            <Badge variant="primary" size="sm">{badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-h4 text-secondary-900">{name}</h3>

        {country && (
          <p className="mt-1 flex items-center gap-1 text-body-sm text-secondary-500">
            <MapPin size={14} />
            {country}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          {rating && (
            <span className="flex items-center gap-1 text-body-sm font-medium text-secondary-700">
              <Star size={14} className="fill-warning-500 text-warning-500" />
              {rating}
            </span>
          )}
          {priceRange && (
            <span className="text-body-sm text-secondary-500">{priceRange}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
