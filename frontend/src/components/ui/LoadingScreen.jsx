import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

function LoadingScreen({
  title = "AI is generating your trip...",
  description = "Please wait a few seconds.",
  className,
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex min-h-[300px] flex-col items-center justify-center px-6 text-center",
        className,
      )}
    >
      <Spinner size="xl" className="mb-5 text-primary-600" />
      <h2 className="text-h3 text-secondary-900">{title}</h2>
      {description && (
        <p className="mt-2 max-w-sm text-body-sm text-secondary-500">{description}</p>
      )}
    </div>
  );
}

export default LoadingScreen;
