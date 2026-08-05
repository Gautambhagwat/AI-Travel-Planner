import { Bell, Search } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200/80 bg-white/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Search */}
        <div className="hidden w-full max-w-md lg:block xl:max-w-lg">
          <div className="flex items-center rounded-xl border border-secondary-200 bg-secondary-50/80 px-3.5 py-2 transition-all duration-200 focus-within:border-primary-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-200">
            <Search
              size={16}
              className="mr-2.5 shrink-0 text-secondary-400"
              aria-hidden="true"
            />

            <input
              type="text"
              placeholder="Search destinations, cities..."
              aria-label="Global Search"
              className="w-full bg-transparent text-sm text-secondary-900 outline-none placeholder:text-secondary-400"
            />

            <kbd className="hidden rounded border border-secondary-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-secondary-400 shadow-xs xl:inline-block">
            </kbd>
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-3 sm:gap-4">
      

          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}

export default TopBar;