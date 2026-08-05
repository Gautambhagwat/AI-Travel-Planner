import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "../ui";
import { toast } from "../ui/Toast";
import { cn } from "../../lib/cn";

// ─── Menu items ───────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  {
    id: "account",
    label: "My Account",
    icon: User,
    path: "/profile",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

// ─── ProfileDropdown ──────────────────────────────────────────────────────────
function ProfileDropdown() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const firstItemRef = useRef(null);

  // ── Derived display values ─────────────────────────────────────────────────
  const displayName =
    user?.fullName ||
    user?.name ||
    user?.username ||
    "Traveler";

  const displayEmail = user?.email || "";

  // ── Close on outside click ─────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  // ── Close on Escape ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // ── Focus first menu item when dropdown opens ──────────────────────────────
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => firstItemRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [open]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  function handleNavigate(path) {
    setOpen(false);
    navigate(path);
  }

  function handleLogout() {
    logout();
    setOpen(false);
    toast.success("Logged out successfully.");
    navigate("/");
  }

  function handleMenuKeyDown(e, action) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative">
      {/* ── Trigger button ── */}
      <button
        ref={triggerRef}
        id="profile-menu-trigger"
        type="button"
        onClick={toggleOpen}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="profile-menu"
        aria-label={`Account menu for ${displayName}`}
        className={cn(
          "flex items-center gap-2 rounded-xl px-1.5 py-1 transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
          open
            ? "bg-primary-50 ring-2 ring-primary-200"
            : "hover:bg-secondary-100"
        )}
      >
        <Avatar name={displayName} size="sm" />

        <ChevronDown
          size={14}
          className={cn(
            "hidden text-secondary-400 transition-transform duration-200 sm:block",
            open && "rotate-180 text-primary-600"
          )}
          aria-hidden="true"
        />
      </button>

      {/* ── Dropdown ── */}
      {open && (
        <div
          id="profile-menu"
          role="menu"
          aria-labelledby="profile-menu-trigger"
          className={cn(
            "absolute right-0 top-[calc(100%+8px)] z-50",
            "w-60 sm:w-64",
            "overflow-hidden rounded-2xl border border-secondary-200/80 bg-white",
            "shadow-xl",
            "animate-dropdown"
          )}
        >
          {/* ── User Header ── */}
          <div className="flex items-center gap-3 border-b border-secondary-100 bg-gradient-to-br from-primary-50/60 to-sky-50/40 px-4 py-3.5">
            <Avatar name={displayName} size="md" />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-secondary-900">
                {displayName}
              </p>

              {displayEmail && (
                <p className="mt-0.5 truncate text-xs text-secondary-500">
                  {displayEmail}
                </p>
              )}
            </div>
          </div>

          {/* ── Menu Items ── */}
          <div className="p-1.5">
            {MENU_ITEMS.map((item, idx) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  id={`profile-menu-item-${item.id}`}
                  role="menuitem"
                  ref={idx === 0 ? firstItemRef : undefined}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  onKeyDown={(e) =>
                    handleMenuKeyDown(e, () => handleNavigate(item.path))
                  }
                  tabIndex={0}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                    "text-secondary-700 transition-all duration-150",
                    "hover:bg-primary-50 hover:text-primary-700",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-inset"
                  )}
                >
                  <Icon
                    size={16}
                    className="shrink-0 text-secondary-400"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mx-3 border-t border-secondary-100" />

          {/* ── Logout ── */}
          <div className="p-1.5">
            <button
              id="profile-menu-item-logout"
              role="menuitem"
              type="button"
              onClick={handleLogout}
              onKeyDown={(e) => handleMenuKeyDown(e, handleLogout)}
              tabIndex={0}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                "text-error-600 transition-all duration-150",
                "hover:bg-error-50 hover:text-error-700",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error-400 focus-visible:ring-inset"
              )}
            >
              <LogOut size={16} className="shrink-0" aria-hidden="true" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;