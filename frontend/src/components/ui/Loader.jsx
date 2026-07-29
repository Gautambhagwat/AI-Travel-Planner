import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

function Loader({ text = "Loading...", size = "lg", className }) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-10",
        className,
      )}
    >
      <Spinner size={size} className="text-primary-600" />
      {text && <p className="text-body-sm text-secondary-500">{text}</p>}
    </div>
  );
}

export default Loader;
