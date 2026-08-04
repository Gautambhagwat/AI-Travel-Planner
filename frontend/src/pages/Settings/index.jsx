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
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import useAuth from "../../hooks/useAuth";

function Settings() {
  const { user } = useAuth();
  const userName = user?.fullName || user?.username || "Traveler";
  const userEmail = user?.email || "traveler@example.com";

  return (
    <DashboardLayout>
      {/* Hero */}
      <section className="mb-10 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-8 text-white shadow-xl">
        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
            <SettingsIcon size={34} />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                Personalize Your Experience
              </span>
            </div>

            <h1 className="text-4xl font-bold">
              Settings
            </h1>

            <p className="mt-2 text-sky-100">
              Manage your account, travel preferences, privacy and notifications.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-8">
        {/* Account */}
        <section className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <User className="text-primary-600" />
            <h2 className="text-2xl font-bold">
              Account
            </h2>
          </div>

          <div className="space-y-5">
            <SettingRow
              title="Name"
              value={userName}
            />

            <SettingRow
              title="Email"
              value={userEmail}
            />

            <SettingRow
              title="Password"
              value="••••••••"
            />
          </div>
        </section>

        {/* AI Preferences */}
        <section className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <Plane className="text-primary-600" />
            <h2 className="text-2xl font-bold">
              AI Preferences
            </h2>
          </div>

          <div className="space-y-5">
            <SettingRow
              title="Preferred Travel Style"
              value="Balanced Explorer"
            />

            <SettingRow
              title="Preferred Transport"
              value="Flexible"
            />

            <SettingRow
              title="Default Budget"
              value="Standard"
            />
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <Bell className="text-primary-600" />
            <h2 className="text-2xl font-bold">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            <ToggleRow
              title="Trip reminders"
              enabled
            />

            <ToggleRow
              title="Travel updates"
            />

            <ToggleRow
              title="AI recommendations"
              enabled
            />
          </div>
        </section>

        {/* Appearance */}
        <section className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <Moon className="text-primary-600" />
            <h2 className="text-2xl font-bold">
              Appearance
            </h2>
          </div>

          <SettingRow
            title="Theme"
            value="Light"
          />
        </section>

        {/* Privacy */}
        <section className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="text-primary-600" />
            <h2 className="text-2xl font-bold">
              Privacy & Security
            </h2>
          </div>

          <div className="space-y-5">
            <SettingRow
              title="Language"
              value="English"
              icon={<Globe size={18} />}
            />

            <SettingRow
              title="Data Protection"
              value="Enabled"
              icon={<Lock size={18} />}
            />

            <SettingRow
              title="Saved Trips"
              value="Cloud Synchronized"
              icon={<Wallet size={18} />}
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function SettingRow({ title, value, icon }) {
  return (
    <div className="flex items-center justify-between border-b border-secondary-100 pb-4 last:border-none">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-secondary-600">
          {title}
        </span>
      </div>

      <span className="font-semibold text-secondary-900">
        {value}
      </span>
    </div>
  );
}

function ToggleRow({ title, enabled = false }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-secondary-700">
        {title}
      </span>

      <button
        className={`relative h-7 w-12 rounded-full transition ${
          enabled ? "bg-primary-600" : "bg-secondary-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default Settings;