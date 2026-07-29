import { Calendar, MapPin, Users } from "lucide-react";
import { cn } from "../../../lib/cn";
import Badge from "../Badge";

function TripCard({
  title,
  destination,
  startDate,
  endDate,
  travelers,
  budget,
  status,
  image,
  actions,
  onClick,
  className,
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-default",
        onClick && "cursor-pointer hover:border-border-strong hover:shadow-card-hover",
        className,
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => event.key === "Enter" && onClick() : undefined}
    >
      {image && (
        <div className="aspect-[21/9] overflow-hidden bg-surface-muted">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-h4 text-secondary-900">{title}</h3>
            {destination && (
              <p className="mt-1 flex items-center gap-1 text-body-sm text-secondary-500">
                <MapPin size={14} />
                {destination}
              </p>
            )}
          </div>

          {status && <Badge variant="accent" size="sm">{status}</Badge>}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-body-sm text-secondary-600">
          {(startDate || endDate) && (
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {startDate}{endDate ? ` – ${endDate}` : ""}
            </span>
          )}
          {travelers && (
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              {travelers} travelers
            </span>
          )}
          {budget && (
            <span className="font-medium text-secondary-800">{budget}</span>
          )}
        </div>

        {actions && (
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            {actions}
          </div>
        )}
      </div>
    </article>
  );
}

export default TripCard;
