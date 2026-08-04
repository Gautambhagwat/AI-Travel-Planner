import { useState } from "react";
import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  CheckCircle,
  Share2,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

import BrandLogo from "../common/BrandLogo";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");

    // Reset success state after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-secondary-800 bg-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <BrandLogo variant="full" size="md" />

            <p className="text-sm leading-relaxed text-secondary-400">
              Discover incredible destinations and let AI create
              personalized itineraries based on your interests,
              budget and travel style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2.5 text-sm font-medium text-secondary-300">
              <Link
                to="/"
                className="transition hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                Home
              </Link>

              <Link
                to="/planner"
                className="transition hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                AI Planner
              </Link>

              <Link
                to="/saved-trips"
                className="transition hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                Saved Trips
              </Link>

              <Link
                to="/profile"
                className="transition hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                Profile
              </Link>

              <Link
                to="/login"
                className="transition hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-secondary-300">
              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-primary-400 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  support@aitravel.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-primary-400 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-primary-400 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Pune, India
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm text-secondary-400">
              Subscribe for travel inspiration and AI planning
              tips.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-900/40 px-4 py-3 text-sm font-medium text-emerald-300">
                <CheckCircle size={18} className="shrink-0 text-emerald-400" aria-hidden="true" />
                <span>You&apos;re subscribed! Welcome aboard. 🎉</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <div className="flex min-w-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Your email"
                    aria-label="Email address for newsletter"
                    className="min-w-0 flex-1 rounded-l-xl border border-secondary-700 bg-secondary-800 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-secondary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="rounded-r-xl bg-primary-600 px-3.5 text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </div>

                {error && (
                  <p className="mt-2 text-xs text-error-400">{error}</p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-800 pt-8 sm:flex-row">
          <p className="text-xs text-secondary-500">
            © 2026 Itinera. All rights reserved.
          </p>

          <div className="flex gap-2.5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="rounded-lg bg-secondary-800 p-2.5 text-secondary-400 transition-all hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <Share2 size={18} aria-hidden="true" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="rounded-lg bg-secondary-800 p-2.5 text-secondary-400 transition-all hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <Globe size={18} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="rounded-lg bg-secondary-800 p-2.5 text-secondary-400 transition-all hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <Compass size={18} aria-hidden="true" />
            </a>

            <a
              href="mailto:support@aitravel.com"
              aria-label="Email us"
              className="rounded-lg bg-secondary-800 p-2.5 text-secondary-400 transition-all hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <MessageSquare size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
