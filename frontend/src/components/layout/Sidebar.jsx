import { NavLink } from "react-router-dom";
import {
  Compass,
  House,
  Map,
  Bookmark,
  User,
  Settings,
} from "lucide-react";

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
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-secondary-200 bg-white">

      {/* Logo */}

      <div className="border-b border-secondary-100 p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100">
            <Compass className="text-primary-600" size={24} />
          </div>

          <div>

            <h1 className="text-lg font-bold text-secondary-900">
              AI Travel
            </h1>

            <p className="text-sm text-secondary-500">
              Plan smarter
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition-all duration-200 ${
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

      {/* Bottom Card */}

      <div className="border-t border-secondary-100 p-6">

        <div className="rounded-2xl bg-gradient-to-r from-primary-50 to-sky-50 p-5">

          <Map className="mb-3 text-primary-600" size={24} />

          <h3 className="font-semibold text-secondary-900">
            Ready to travel?
          </h3>

          <p className="mt-1 text-sm text-secondary-500">
            Plan your next adventure with AI.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;