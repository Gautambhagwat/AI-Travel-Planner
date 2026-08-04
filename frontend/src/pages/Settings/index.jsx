import { useState } from "react";
import {
  Bell,
  Globe,
  Lock,
  Moon,
  Plane,
  Settings as SettingsIcon,
  Shield,
  Sparkles,
  User,
  Wallet,
  Sun,
  Monitor,
  ChevronRight,
  Info,
  Brain,
  Compass,
  CreditCard,
  Languages,
  Database,
  Mail,
  Smartphone,
  Megaphone,
  Check,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

/* ─────────────────────────────────────────────────────────────
   Local UI state – no backend touched
───────────────────────────────────────────────────────────── */
const INITIAL_TOGGLES = {
  tripReminders: true,
  travelUpdates: false,
  aiRecommendations: true,
  emailDigest: false,
  smsAlerts: false,
  marketingEmails: false,
  dataProtection: true,
  analyticsTracking: false,
};

const INITIAL_SELECTS = {
  travelStyle: "Luxury",
  transport: "Flight",
  budget: "Medium",
  theme: "Light",
  language: "English",
  currency: "USD",
};

const TRAVEL_STYLE_OPTS = ["Budget", "Mid-range", "Luxury", "Backpacker", "Family"];
const TRANSPORT_OPTS = ["Flight", "Train", "Road Trip", "Cruise", "Mixed"];
const BUDGET_OPTS = ["Low", "Medium", "High", "Flexible"];
const LANGUAGE_OPTS = ["English", "Spanish", "French", "German", "Japanese", "Hindi"];
const CURRENCY_OPTS = ["USD", "EUR", "GBP", "INR", "JPY", "AED"];

/* ─────────────────────────────────────────────────────────────
   Premium animated Toggle
───────────────────────────────────────────────────────────── */
function Toggle({ id, checked, onChange, label }) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
        checked
          ? "bg-primary-600 shadow-[0_0_0_1px_theme(colors.primary.600)]"
          : "bg-secondary-200 shadow-[0_0_0_1px_theme(colors.secondary.200)]"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section wrapper
───────────────────────────────────────────────────────────── */
function SettingsSection({ icon: Icon, iconColor, title, description, children }) {
  return (
    <section
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="overflow-hidden rounded-2xl border border-secondary-100 bg-white shadow-card transition-shadow duration-200 hover:shadow-md sm:rounded-3xl"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 border-b border-secondary-100 bg-secondary-50/60 px-6 py-4 sm:px-8 sm:py-5">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconColor}`}>
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <h2
            id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-base font-bold text-secondary-900"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-0.5 text-xs text-secondary-400">{description}</p>
          )}
        </div>
      </div>

      {/* Section body */}
      <div className="px-6 py-2 sm:px-8">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Setting Row (static display)
───────────────────────────────────────────────────────────── */
function SettingRow({ icon: Icon, label, description, value, pill, last = false }) {
  return (
    <div
      className={`group flex items-center justify-between gap-4 py-4 transition-colors duration-150 hover:bg-secondary-50/50 -mx-6 px-6 sm:-mx-8 sm:px-8 ${
        !last ? "border-b border-secondary-100" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {Icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-500 transition-colors duration-150 group-hover:bg-secondary-200">
            <Icon size={15} />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-secondary-800">{label}</p>
          {description && (
            <p className="mt-0.5 text-xs text-secondary-400">{description}</p>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {pill ? (
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${pill.color}`}>
            {value}
          </span>
        ) : (
          <span className="text-sm font-semibold text-secondary-700">{value}</span>
        )}
        <ChevronRight
          size={15}
          className="text-secondary-300 transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Toggle Row
───────────────────────────────────────────────────────────── */
function ToggleRow({ id, icon: Icon, label, description, checked, onChange, last = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 -mx-6 px-6 sm:-mx-8 sm:px-8 transition-colors duration-150 hover:bg-secondary-50/50 ${
        !last ? "border-b border-secondary-100" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {Icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-500">
            <Icon size={15} />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-secondary-800">{label}</p>
          {description && (
            <p className="mt-0.5 text-xs text-secondary-400">{description}</p>
          )}
        </div>
      </div>
      <Toggle id={id} checked={checked} onChange={onChange} label={label} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Select Row
───────────────────────────────────────────────────────────── */
function SelectRow({ id, icon: Icon, label, description, value, options, onChange, last = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 -mx-6 px-6 sm:-mx-8 sm:px-8 transition-colors duration-150 hover:bg-secondary-50/50 ${
        !last ? "border-b border-secondary-100" : ""
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {Icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-500">
            <Icon size={15} />
          </div>
        )}
        <div className="min-w-0">
          <label htmlFor={id} className="block text-sm font-medium text-secondary-800 cursor-pointer">
            {label}
          </label>
          {description && (
            <p className="mt-0.5 text-xs text-secondary-400">{description}</p>
          )}
        </div>
      </div>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="cursor-pointer appearance-none rounded-xl border border-secondary-200 bg-secondary-50 px-3.5 py-2 pr-8 text-sm font-semibold text-secondary-800 shadow-sm outline-none transition-all duration-150 hover:border-primary-300 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Theme Picker
───────────────────────────────────────────────────────────── */
function ThemePicker({ value, onChange }) {
  const themes = [
    { id: "Light", icon: Sun, label: "Light" },
    { id: "Dark", icon: Moon, label: "Dark" },
    { id: "System", icon: Monitor, label: "System" },
  ];

  return (
    <div className="py-4 -mx-6 px-6 sm:-mx-8 sm:px-8">
      <p className="mb-3 text-sm font-medium text-secondary-800">Theme</p>
      <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Theme selection">
        {themes.map(({ id, icon: Icon, label }) => {
          const active = value === id;
          return (
            <button
              key={id}
              role="radio"
              aria-checked={active}
              onClick={() => onChange(id)}
              className={`group relative flex flex-col items-center gap-2 rounded-2xl border-2 px-4 py-4 text-xs font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
                active
                  ? "border-primary-500 bg-primary-50 text-primary-700 shadow-sm"
                  : "border-secondary-200 bg-secondary-50 text-secondary-500 hover:border-secondary-300 hover:bg-white hover:shadow-sm"
              }`}
            >
              <Icon size={20} className={active ? "text-primary-600" : "text-secondary-400 group-hover:text-secondary-600"} />
              {label}
              {active && (
                <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600">
                  <Check size={9} className="text-white" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Demo disclaimer badge
───────────────────────────────────────────────────────────── */
function DemoBadge() {
  return (
    <div
      role="note"
      aria-label="Demo mode notice"
      className="flex items-start gap-2.5 rounded-xl border border-primary-100 bg-primary-50 px-4 py-3 text-xs text-primary-700"
    >
      <Info size={14} className="mt-0.5 shrink-0 text-primary-500" />
      <p>
        <span className="font-semibold">Demo mode — </span>
        Toggle and select changes update the local UI only. No data is sent to the backend.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Settings Component
───────────────────────────────────────────────────────────── */
function Settings() {
  const [toggles, setToggles] = useState(INITIAL_TOGGLES);
  const [selects, setSelects] = useState(INITIAL_SELECTS);

  function toggle(key) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function select(key, value) {
    setSelects((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <DashboardLayout>

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        aria-label="Settings header"
        className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-700 via-primary-600 to-cyan-500 p-6 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8 lg:p-10"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 left-1/3 h-28 w-56 rounded-full bg-cyan-300/20 blur-2xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          {/* Icon tile */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-4 ring-white/20 backdrop-blur-sm">
            <SettingsIcon size={28} aria-hidden="true" />
          </div>

          <div>
            {/* Badge */}
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/20">
              <Sparkles size={11} aria-hidden="true" />
              Personalize Your Experience
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Settings
            </h1>
            <p className="mt-1.5 max-w-xl text-sm text-sky-100">
              Manage your account, travel preferences, notifications, appearance and privacy in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ── Demo notice ───────────────────────────────── */}
      <div className="mb-6">
        <DemoBadge />
      </div>

      {/* ── Settings grid ─────────────────────────────── */}
      <div className="grid gap-5">

        {/* ── Account ─────────────────────────────────── */}
        <SettingsSection
          icon={User}
          iconColor="bg-primary-100 text-primary-700"
          title="Account"
          description="Your personal information and credentials"
        >
          <SettingRow
            icon={User}
            label="Display Name"
            description="How you appear across the app"
            value="Traveler"
          />
          <SettingRow
            icon={Mail}
            label="Email Address"
            description="Used for login and notifications"
            value="traveler@example.com"
          />
          <SettingRow
            icon={Lock}
            label="Password"
            description="Last changed never"
            value="••••••••"
            last
          />
        </SettingsSection>

        {/* ── AI Preferences ──────────────────────────── */}
        <SettingsSection
          icon={Brain}
          iconColor="bg-purple-100 text-purple-700"
          title="AI Preferences"
          description="Tune how the AI plans and suggests trips for you"
        >
          <SelectRow
            id="setting-travel-style"
            icon={Compass}
            label="Travel Style"
            description="Sets the tone for all AI-generated itineraries"
            value={selects.travelStyle}
            options={TRAVEL_STYLE_OPTS}
            onChange={(v) => select("travelStyle", v)}
          />
          <SelectRow
            id="setting-transport"
            icon={Plane}
            label="Preferred Transport"
            description="Your default mode of getting around"
            value={selects.transport}
            options={TRANSPORT_OPTS}
            onChange={(v) => select("transport", v)}
          />
          <SelectRow
            id="setting-budget"
            icon={CreditCard}
            label="Default Budget"
            description="Controls cost estimates in suggestions"
            value={selects.budget}
            options={BUDGET_OPTS}
            onChange={(v) => select("budget", v)}
            last
          />
        </SettingsSection>

        {/* ── Notifications ───────────────────────────── */}
        <SettingsSection
          icon={Bell}
          iconColor="bg-orange-100 text-orange-700"
          title="Notifications"
          description="Choose what you want to be notified about"
        >
          <ToggleRow
            id="toggle-trip-reminders"
            icon={Bell}
            label="Trip Reminders"
            description="Get reminders before your upcoming trips"
            checked={toggles.tripReminders}
            onChange={() => toggle("tripReminders")}
          />
          <ToggleRow
            id="toggle-travel-updates"
            icon={Globe}
            label="Travel Updates"
            description="Destination news, advisories and tips"
            checked={toggles.travelUpdates}
            onChange={() => toggle("travelUpdates")}
          />
          <ToggleRow
            id="toggle-ai-recs"
            icon={Sparkles}
            label="AI Recommendations"
            description="Personalised suggestions based on your preferences"
            checked={toggles.aiRecommendations}
            onChange={() => toggle("aiRecommendations")}
          />
          <ToggleRow
            id="toggle-email-digest"
            icon={Mail}
            label="Weekly Email Digest"
            description="A summary of new destinations and deals"
            checked={toggles.emailDigest}
            onChange={() => toggle("emailDigest")}
          />
          <ToggleRow
            id="toggle-sms"
            icon={Smartphone}
            label="SMS Alerts"
            description="Text messages for critical trip updates"
            checked={toggles.smsAlerts}
            onChange={() => toggle("smsAlerts")}
          />
          <ToggleRow
            id="toggle-marketing"
            icon={Megaphone}
            label="Marketing Emails"
            description="Promotions, offers and Itinera news"
            checked={toggles.marketingEmails}
            onChange={() => toggle("marketingEmails")}
            last
          />
        </SettingsSection>

        {/* ── Appearance ──────────────────────────────── */}
        <SettingsSection
          icon={Moon}
          iconColor="bg-indigo-100 text-indigo-700"
          title="Appearance"
          description="Adjust how the interface looks and feels"
        >
          <ThemePicker
            value={selects.theme}
            onChange={(v) => select("theme", v)}
          />
          <SelectRow
            id="setting-language"
            icon={Languages}
            label="Language"
            description="Display language for the entire app"
            value={selects.language}
            options={LANGUAGE_OPTS}
            onChange={(v) => select("language", v)}
          />
          <SelectRow
            id="setting-currency"
            icon={Wallet}
            label="Currency"
            description="Default currency for cost estimates"
            value={selects.currency}
            options={CURRENCY_OPTS}
            onChange={(v) => select("currency", v)}
            last
          />
        </SettingsSection>

        {/* ── Privacy & Security ──────────────────────── */}
        <SettingsSection
          icon={Shield}
          iconColor="bg-emerald-100 text-emerald-700"
          title="Privacy &amp; Security"
          description="Control your data, security and usage analytics"
        >
          <SettingRow
            icon={Lock}
            label="Data Protection"
            description="Your data is encrypted end-to-end"
            value="Enabled"
            pill={{ color: "bg-emerald-100 text-emerald-700" }}
          />
          <SettingRow
            icon={Database}
            label="Saved Trips"
            description="Where your itinerary data lives"
            value="Stored Locally"
          />
          <ToggleRow
            id="toggle-data-protection"
            icon={Shield}
            label="Enhanced Data Protection"
            description="Apply extra encryption to your profile data"
            checked={toggles.dataProtection}
            onChange={() => toggle("dataProtection")}
          />
          <ToggleRow
            id="toggle-analytics"
            icon={Globe}
            label="Usage Analytics"
            description="Help improve Itinera by sharing anonymous usage data"
            checked={toggles.analyticsTracking}
            onChange={() => toggle("analyticsTracking")}
            last
          />
        </SettingsSection>

      </div>

      {/* Bottom breathing room */}
      <div className="h-8" />
    </DashboardLayout>
  );
}

export default Settings;
