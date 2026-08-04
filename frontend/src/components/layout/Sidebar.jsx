import { NavLink, useNavigate } from "react-router-dom";
import {
  Compass,
  House,
  Map,
  Bookmark,
  User,
  Settings,
  ArrowRight,
} from "lucide-react";

import BrandLogo from "../common/BrandLogo";

const menuItems = [
  {
    name: "Home",
    path: "/dashboard",
    icon: House,
  },
  {
    name: "AI Planner",
    path: "/planner",
    icon: Compass,
  },
  {
    name: "Saved Trips",
    path: "/saved-trips",
    icon: Bookmark,
  },
  {
    name: "My Account",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="fixed bottom-0 left-0 z-50 flex w-full flex-col border-t border-secondary-200 bg-white/95 shadow-lg backdrop-blur-md lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-r lg:border-t-0 lg:bg-white lg:shadow-none">

      {/* Logo */}

      <div className="hidden border-b border-secondary-100 p-6 lg:block">

        <BrandLogo variant="full" size="md" />

      </div>

      {/* Navigation */}

      <nav aria-label="Sidebar Navigation" className="flex w-full items-center justify-around gap-1 p-2 pb-safe lg:flex-1 lg:flex-col lg:items-stretch lg:justify-start lg:gap-2 lg:p-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex shrink-0 items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-4 sm:text-sm lg:justify-start lg:rounded-2xl lg:px-4 lg:py-3 lg:text-base ${
                  isActive
                    ? "bg-primary-50 text-primary-700 shadow-sm font-bold"
                    : "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900"
                }`
              }
            >
              <Icon size={20} className="shrink-0" />

              <span>{item.name}</span>

            </NavLink>
          );
        })}

      </nav>

      {/* Bottom CTA Card */}

      <div className="hidden border-t border-secondary-100 p-6 lg:block">

        <div className="rounded-2xl bg-gradient-to-br from-primary-50 via-sky-50 to-primary-100/50 p-5 ring-1 ring-primary-100 shadow-sm">

          <Map className="mb-3 text-primary-600" size={24} aria-hidden="true" />

          <h3 className="font-bold text-secondary-900">
            Ready to travel?
          </h3>

          <p className="mt-1 text-xs text-secondary-500 leading-relaxed">
            Plan your next adventure with AI.
          </p>

          <button
            onClick={() => navigate("/planner")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-2.5 text-sm font-bold text-white shadow-md shadow-primary-500/25 transition-all duration-200 hover:bg-primary-700 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            aria-label="Plan your trip with AI Planner"
          >
            Plan Your Trip
            <ArrowRight size={15} aria-hidden="true" />
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
