import { Link, NavLink } from "react-router-dom";

import BrandLogo from "../common/BrandLogo";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200/80 bg-white/90 backdrop-blur-md transition-all">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8 xl:px-10">

        {/* Logo */}

        <BrandLogo variant="full" size="md" clickable />

        {/* Navigation */}

        <nav aria-label="Main Navigation" className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-2 py-1 text-sm font-semibold transition-colors duration-200 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-base ${
                isActive ? "text-primary-600 font-bold" : "text-secondary-600"
              }`
            }
          >
            Home
          </NavLink>

          <a
            href="#features"
            className="rounded-lg px-2 py-1 text-sm font-semibold text-secondary-600 transition-colors duration-200 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-base"
          >
            Features
          </a>

          <a
            href="#destinations"
            className="rounded-lg px-2 py-1 text-sm font-semibold text-secondary-600 transition-colors duration-200 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-base"
          >
            Destinations
          </a>

          <a
            href="#testimonials"
            className="rounded-lg px-2 py-1 text-sm font-semibold text-secondary-600 transition-colors duration-200 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-base"
          >
            Reviews
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-secondary-700 transition-all duration-200 hover:bg-secondary-100/80 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:text-sm"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-5 sm:py-2.5"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
