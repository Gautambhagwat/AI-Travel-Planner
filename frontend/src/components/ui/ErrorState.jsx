import { AlertCircle } from "lucide-react";
import { cn } from "../../lib/cn";
import Button from "./Button";

function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  onRetry,
  retryLabel = "Try again",
  className,
}) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center rounded-2xl border border-error-100 bg-error-50 px-6 py-12 text-center sm:px-12",
        className,
      )}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-error-100 text-error-600">
        <AlertCircle size={28} />
      </div>

      <h2 className="text-h3 text-secondary-900">{title}</h2>

      {description && (
        <p className="mt-3 max-w-md text-body-sm text-secondary-600">{description}</p>
      )}

      {onRetry && (
        <div className="mt-6">
          <Button variant="outline" onClick={onRetry}>
            {retryLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ErrorState;
