import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

function Modal({
  isOpen,
  title,
  description,
  children,
  onClose,
  size = "md",
  footer,
  className,
}) {
  const dialogRef = useRef(null);

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog overlay"
        className="absolute inset-0 bg-secondary-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
        className={cn(
          "relative z-10 w-full rounded-2xl border border-border bg-surface shadow-xl",
          sizes[size],
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
          <div className="min-w-0">
            {title && (
              <h2 id="modal-title" className="text-h4 text-secondary-900">
                {title}
              </h2>
            )}
            {description && (
              <p id="modal-description" className="mt-1 text-body-sm text-secondary-500">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-secondary-400 transition-default hover:bg-surface-muted hover:text-secondary-700"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5">{children}</div>

        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
