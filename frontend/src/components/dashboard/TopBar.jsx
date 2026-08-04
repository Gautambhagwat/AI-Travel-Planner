import { Bell, Search } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 bg-white/90 backdrop-blur-xl">

      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Search */}

        <div className="hidden w-full max-w-md lg:block xl:max-w-lg">

          <div className="flex items-center rounded-xl border border-secondary-200 bg-secondary-50 px-3.5 py-2.5 transition focus-within:border-primary-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100">

            <Search
              size={16}
              className="mr-2.5 text-secondary-400"
            />

            <input
              type="text"
              placeholder="Search destinations, cities..."
              aria-label="Search destinations"
              className="w-full bg-transparent text-sm outline-none placeholder:text-secondary-400"
            />

            <kbd className="hidden rounded border border-secondary-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-secondary-400 shadow-sm xl:inline-block">
              ⌘K
            </kbd>

          </div>

        </div>

        {/* Right Side */}

        <div className="ml-auto flex items-center gap-3 sm:gap-4">

          <button
            aria-label="View notifications"
            className="relative rounded-xl bg-secondary-100 p-2.5 transition hover:bg-primary-100"
          >

            <Bell
              size={18}
              className="text-secondary-700"
            />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

          </button>

          {/* Profile avatar with dropdown */}
          <ProfileDropdown />

        </div>

      </div>

    </header>
  );
}

export default TopBar;
