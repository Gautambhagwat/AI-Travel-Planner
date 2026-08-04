import { Link, NavLink } from "react-router-dom";

import BrandLogo from "../common/BrandLogo";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200/60 bg-white/85 backdrop-blur-xl transition-all">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:h-20 lg:px-8 xl:px-10">

        {/* Logo */}

        <BrandLogo variant="full" size="md" clickable />

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className="text-sm font-semibold text-secondary-600 transition hover:text-primary-600 lg:text-base"
          >
            Home
          </NavLink>

          <a
            href="#features"
            className="text-sm font-semibold text-secondary-600 transition hover:text-primary-600 lg:text-base"
          >
            Features
          </a>

          <a
            href="#destinations"
            className="text-sm font-semibold text-secondary-600 transition hover:text-primary-600 lg:text-base"
          >
            Destinations
          </a>

          <a
            href="#testimonials"
            className="text-sm font-semibold text-secondary-600 transition hover:text-primary-600 lg:text-base"
          >
            Reviews
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-secondary-700 transition hover:bg-secondary-100/80 hover:text-primary-600 lg:text-sm"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary-500/20 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg sm:px-5 sm:py-2.5"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
