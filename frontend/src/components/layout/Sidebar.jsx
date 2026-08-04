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
    name: "Recent Trips",
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

      <div className="hidden border-t border-secondary-100 p-6 lg:block">
  <div className="flex items-center gap-3 text-secondary-500">
    <Map className="text-primary-500" size={18} />
    <span className="text-sm">
      Personalized travel recommendations.
    </span>
  </div>
</div>

    </aside>
  );
}

export default Sidebar;
