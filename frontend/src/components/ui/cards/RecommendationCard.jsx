import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "../../../lib/cn";
import Badge from "../Badge";

function RecommendationCard({
  title,
  description,
  destination,
  image,
  badge,
  onAction,
  actionLabel = "Explore",
  className,
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary-50 to-surface shadow-card",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row">
        {image && (
          <div className="aspect-video shrink-0 overflow-hidden bg-surface-muted sm:aspect-auto sm:w-40">
            <img src={image} alt={destination || title} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start gap-2">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-primary-500" />
            <div className="min-w-0 flex-1">
              {badge && (
                <Badge variant="primary" size="sm" className="mb-2">{badge}</Badge>
              )}
              <h3 className="text-h4 text-secondary-900">{title}</h3>
              {destination && (
                <p className="mt-1 text-body-sm font-medium text-primary-600">{destination}</p>
              )}
              {description && (
                <p className="mt-2 text-body-sm text-secondary-600">{description}</p>
              )}
            </div>
          </div>

          {onAction && (
            <button
              type="button"
              onClick={onAction}
              className="mt-4 inline-flex items-center gap-1.5 self-start text-body-sm font-medium text-primary-600 transition-default hover:text-primary-700"
            >
              {actionLabel}
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default RecommendationCard;
