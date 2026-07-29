import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600">
                <Compass size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">AI Travel</h2>
                <p className="text-sm text-secondary-400">
                  Plan Smarter
                </p>
              </div>
            </div>

            <p className="leading-7 text-secondary-400">
              Discover incredible destinations and let AI create
              personalized itineraries based on your interests,
              budget and travel style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="transition hover:text-primary-400"
              >
                Home
              </Link>

              <Link
                to="/planner"
                className="transition hover:text-primary-400"
              >
                AI Planner
              </Link>

              <Link
                to="/saved-trips"
                className="transition hover:text-primary-400"
              >
                Saved Trips
              </Link>

              <Link
                to="/profile"
                className="transition hover:text-primary-400"
              >
                Profile
              </Link>

              <Link
                to="/login"
                className="transition hover:text-primary-400"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-primary-400"
                />
                <span className="text-secondary-300">
                  support@aitravel.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-primary-400"
                />
                <span className="text-secondary-300">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-primary-400"
                />
                <span className="text-secondary-300">
                  Pune, India
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Stay Updated
            </h3>

            <p className="mb-5 text-secondary-400">
              Subscribe for travel inspiration and AI planning
              tips.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-xl border border-secondary-700 bg-secondary-800 px-4 py-3 outline-none focus:border-primary-500"
              />

              <button className="rounded-r-xl bg-primary-600 px-4 hover:bg-primary-700">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-secondary-800 pt-8 md:flex-row">
          <p className="text-sm text-secondary-500">
            © 2026 AI Travel Planner. All rights reserved.
          </p>

          <div className="flex gap-3">
            <div className="rounded-xl bg-secondary-800 p-3 hover:bg-primary-600 transition">
              <Globe size={20} />
            </div>

            <div className="rounded-xl bg-secondary-800 p-3 hover:bg-primary-600 transition">
              <Compass size={20} />
            </div>

            <div className="rounded-xl bg-secondary-800 p-3 hover:bg-primary-600 transition">
              <Mail size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;