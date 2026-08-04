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
    <aside className="fixed bottom-0 left-0 z-50 flex w-full flex-col border-t border-secondary-200 bg-white shadow-lg lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-r lg:border-t-0 lg:shadow-none">

      {/* Logo */}

      <div className="hidden border-b border-secondary-100 p-8 lg:block">

        <BrandLogo variant="full" size="md" />

      </div>

      {/* Navigation */}

      <nav className="flex w-full items-center gap-1 overflow-x-auto p-2 lg:flex-1 lg:flex-col lg:items-stretch lg:gap-2 lg:overflow-visible lg:p-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4 lg:flex lg:items-center lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3 lg:text-base ${
                  isActive
                    ? "bg-primary-50 text-primary-600 shadow-sm"
                    : "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900"
                }`
              }
            >
              <Icon size={20} />

              {item.name}

            </NavLink>
          );
        })}

      </nav>

      {/* Bottom CTA Card */}

      <div className="hidden border-t border-secondary-100 p-6 lg:block">

        <div className="rounded-2xl bg-gradient-to-br from-primary-50 via-sky-50 to-primary-100/50 p-5 ring-1 ring-primary-100">

          <Map className="mb-3 text-primary-600" size={24} />

          <h3 className="font-semibold text-secondary-900">
            Ready to travel?
          </h3>

          <p className="mt-1 text-sm text-secondary-500">
            Plan your next adventure with AI.
          </p>

          <button
            onClick={() => navigate("/planner")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/25 transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-1"
            aria-label="Plan your trip with AI Planner"
          >
            Plan Your Trip
            <ArrowRight size={15} />
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
