import { Bell, Search } from "lucide-react";
import Avatar from "../common/Avatar";

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-secondary-200 bg-white/90 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Search */}

        <div className="hidden w-full max-w-lg lg:block">

          <div className="flex items-center rounded-2xl border border-secondary-200 bg-secondary-50 px-4 py-3 transition focus-within:border-primary-400 focus-within:bg-white">

            <Search
              size={18}
              className="mr-3 text-secondary-400"
            />

            <input
              type="text"
              placeholder="Search destinations, cities..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-secondary-400"
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="ml-auto flex items-center gap-4">

          <button className="relative rounded-2xl bg-secondary-100 p-3 transition hover:bg-primary-100">

            <Bell
              size={20}
              className="text-secondary-700"
            />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          <Avatar name="Gautam" />

        </div>

      </div>

    </header>
  );
}

export default TopBar;