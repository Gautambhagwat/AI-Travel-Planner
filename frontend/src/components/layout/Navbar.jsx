import { Link, NavLink } from "react-router-dom";
import { Compass } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 shadow-lg">

            <Compass
              size={24}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-lg font-bold text-secondary-900">
              AI Travel
            </h1>

            <p className="text-xs text-secondary-500">
              Plan smarter
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className="font-medium text-secondary-600 transition hover:text-primary-600"
          >
            Home
          </NavLink>

          <a
            href="#features"
            className="font-medium text-secondary-600 transition hover:text-primary-600"
          >
            Features
          </a>

          <a
            href="#destinations"
            className="font-medium text-secondary-600 transition hover:text-primary-600"
          >
            Destinations
          </a>

          <a
            href="#testimonials"
            className="font-medium text-secondary-600 transition hover:text-primary-600"
          >
            Reviews
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="rounded-xl px-5 py-2.5 font-semibold text-secondary-700 transition hover:bg-secondary-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-2xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-700"
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;