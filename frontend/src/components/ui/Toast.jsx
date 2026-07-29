import { Toaster, toast } from "react-hot-toast";
import { cn } from "../../lib/cn";

const toastStyles = {
  className: cn(
    "!rounded-xl !border !border-border !bg-surface !px-4 !py-3 !text-body-sm !text-secondary-800 !shadow-lg",
  ),
  success: {
    iconTheme: { primary: "#059669", secondary: "#ffffff" },
  },
  error: {
    iconTheme: { primary: "#dc2626", secondary: "#ffffff" },
  },
};

function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "0.75rem",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          color: "var(--color-secondary-800)",
          boxShadow: "var(--shadow-lg)",
          fontSize: "0.875rem",
        },
        success: toastStyles.success,
        error: toastStyles.error,
      }}
    />
  );
}

export { ToastProvider, toast };
