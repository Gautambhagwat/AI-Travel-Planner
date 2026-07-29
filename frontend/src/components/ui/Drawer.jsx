import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

function Drawer({
  isOpen,
  title,
  description,
  children,
  onClose,
  side = "right",
  footer,
  className,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sideClasses = {
    right: "right-0 top-0 h-full w-full max-w-md translate-x-0 border-l",
    left: "left-0 top-0 h-full w-full max-w-md border-r",
    bottom: "bottom-0 left-0 right-0 max-h-[85vh] w-full rounded-t-2xl border-t",
  };

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        aria-label="Close drawer overlay"
        className="absolute inset-0 bg-secondary-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "drawer-title" : undefined}
        className={cn(
          "absolute flex flex-col border-border bg-surface shadow-xl",
          sideClasses[side],
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            {title && (
              <h2 id="drawer-title" className="text-h4 text-secondary-900">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-body-sm text-secondary-500">{description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-secondary-400 transition-default hover:bg-surface-muted hover:text-secondary-700"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>

        {footer && (
          <div className="border-t border-border px-5 py-4">{footer}</div>
        )}
      </aside>
    </div>
  );
}

export default Drawer;
