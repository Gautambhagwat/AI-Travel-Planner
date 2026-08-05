import { useState, useEffect, useContext } from "react";
import {
  Brain,
  Check,
  ChevronRight,
  Compass,
  CreditCard,
  Edit2,
  Lock,
  Mail,
  Plane,
  Sparkles,
  Settings as SettingsIcon,
  User,
  X,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import { AuthContext } from "../../context/AuthContext";
import { getUserByEmail, updateUserByEmail } from "../../services/userService";
import { getPreferences, updatePreferences } from "../../services/preferenceService";
import { toast } from "../../components/ui/Toast";

const TRAVEL_STYLE_OPTS = ["Budget", "Mid-range", "Luxury", "Backpacker", "Family"];
const TRANSPORT_OPTS = ["Flight", "Train", "Road Trip", "Cruise", "Mixed"];
const BUDGET_OPTS = ["Low", "Medium", "High", "Flexible"];

/* ─────────────────────────────────────────────────────────────
   Section wrapper
───────────────────────────────────────────────────────────── */
function SettingsSection({ icon: Icon, iconColor, title, description, headerAction, children }) {
  return (
    <section
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="overflow-hidden rounded-2xl border border-secondary-100 bg-white shadow-card transition-shadow duration-200 hover:shadow-md sm:rounded-3xl"
    >
      <div className="flex items-center justify-between border-b border-secondary-100 bg-secondary-50/60 px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-4 min-w-0 flex-1">
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
        {headerAction && <div className="shrink-0 ml-4">{headerAction}</div>}
      </div>
      <div className="px-6 py-2 sm:px-8">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Setting Row (read-only display)
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
          <span className="text-sm font-semibold text-secondary-700">{value || "—"}</span>
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
   Input Row (editable text field)
───────────────────────────────────────────────────────────── */
function InputRow({ id, icon: Icon, label, description, value, onChange, disabled = false, last = false }) {
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

      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        aria-label={label}
        className={`w-48 sm:w-64 rounded-xl border border-secondary-200 bg-secondary-50 px-3.5 py-2 text-sm font-semibold text-secondary-800 shadow-sm outline-none transition-all duration-150 ${
          disabled
            ? "cursor-not-allowed opacity-60 bg-secondary-100"
            : "hover:border-primary-300 focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
        }`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Select Row (editable select field)
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
   Main Settings Component
───────────────────────────────────────────────────────────── */
function Settings() {
  const { user: authUser, setUser } = useContext(AuthContext);

  const [accountInfo, setAccountInfo] = useState({ name: "", bio: "", email: "" });
  const [editAccountForm, setEditAccountForm] = useState({ name: "", bio: "" });
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [savingAccount, setSavingAccount] = useState(false);

  const [prefs, setPrefs] = useState({ travelStyle: "Mid-range", transport: "Flight", budget: "Medium" });
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingPrefs, setSavingPrefs] = useState(false);
  const [prefsDirty, setPrefsDirty] = useState(false);

  // Load user + preferences on mount
  useEffect(() => {
    async function load() {
      if (!authUser?.email) {
        setLoading(false);
        return;
      }

      try {
        const profile = await getUserByEmail(authUser.email);
        const fetchedName = profile.fullName || profile.name || "";
        const localBio = localStorage.getItem(`bio_${profile.id}`) || profile.bio || "";
        const fetchedEmail = profile.email || authUser.email;

        setAccountInfo({
          name: fetchedName,
          bio: localBio,
          email: fetchedEmail,
        });
        setUserId(profile.id);

        try {
          const p = await getPreferences(profile.id);
          setPrefs({
            travelStyle: p.travelStyle || "Mid-range",
            transport: p.transport || "Flight",
            budget: p.budget || "Medium",
          });
        } catch {
          // Preference record may not exist yet
        }
      } catch {
        toast.error("Unable to load settings.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [authUser]);

  function handleStartEditingAccount() {
    setEditAccountForm({
      name: accountInfo.name,
      bio: accountInfo.bio,
    });
    setIsEditingAccount(true);
  }

  function handleCancelEditingAccount() {
    setIsEditingAccount(false);
  }

  async function handleSaveAccount() {
    if (!editAccountForm.name.trim()) {
      toast.error("Full Name is required.");
      return;
    }

    if (!accountInfo.email) {
      toast.error("User email not found.");
      return;
    }

    try {
      setSavingAccount(true);

      // Only send fields supported by UserService backend (fullName)
      const payload = {
        fullName: editAccountForm.name.trim(),
      };

      const updatedProfile = await updateUserByEmail(accountInfo.email, payload);

      // Save bio in localStorage under key bio_<userId>
      const newBio = editAccountForm.bio.trim();
      if (userId) {
        if (newBio) {
          localStorage.setItem(`bio_${userId}`, newBio);
        } else {
          localStorage.removeItem(`bio_${userId}`);
        }
      }

      const newAccountInfo = {
        ...accountInfo,
        name: updatedProfile.fullName || updatedProfile.name || editAccountForm.name.trim(),
        bio: newBio,
      };

      setAccountInfo(newAccountInfo);

      // Update AuthContext & localStorage user object
      const updatedUser = {
        ...authUser,
        ...updatedProfile,
        fullName: newAccountInfo.name,
        bio: newBio,
      };

      if (setUser) {
        setUser(updatedUser);
      }
      localStorage.setItem("user", JSON.stringify(updatedUser));

      toast.success("Account information updated successfully.");
      setIsEditingAccount(false);
    } catch (err) {
      toast.error(err.message || "Failed to update account information.");
    } finally {
      setSavingAccount(false);
    }
  }

  function handlePrefChange(key, value) {
    setPrefs((prev) => ({ ...prev, [key]: value }));
    setPrefsDirty(true);
  }

  async function handleSavePrefs() {
    if (!userId) return;

    try {
      setSavingPrefs(true);
      await updatePreferences(userId, {
        travelStyle: prefs.travelStyle,
        budget: prefs.budget,
        interests: [],
      });
      setPrefsDirty(false);
      toast.success("AI preferences saved.");
    } catch (err) {
      toast.error(err.message || "Failed to save preferences.");
    } finally {
      setSavingPrefs(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
            <p className="mt-4 text-secondary-500">Loading settings...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        aria-label="Settings header"
        className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-700 via-primary-600 to-cyan-500 p-6 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 left-1/3 h-28 w-56 rounded-full bg-cyan-300/20 blur-2xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-4 ring-white/20 backdrop-blur-sm">
            <SettingsIcon size={28} aria-hidden="true" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/20">
              <Sparkles size={11} aria-hidden="true" />
              Personalize Your Experience
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Settings
            </h1>
            <p className="mt-1.5 max-w-xl text-sm text-sky-100">
              Manage your account details and AI travel preferences.
            </p>
          </div>
        </div>
      </section>

      {/* ── Settings grid ─────────────────────────────── */}
      <div className="grid gap-5">

        {/* ── Account ─────────────────────────────────── */}
        <SettingsSection
          icon={User}
          iconColor="bg-primary-100 text-primary-700"
          title="Account"
          description="Your personal information and credentials"
          headerAction={
            !isEditingAccount ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleStartEditingAccount}
                className="gap-1.5 text-xs font-semibold"
              >
                <Edit2 size={13} />
                Edit Account
              </Button>
            ) : null
          }
        >
          {isEditingAccount ? (
            <>
              <InputRow
                id="edit-account-name"
                icon={User}
                label="Display Name"
                description="How you appear across the app"
                value={editAccountForm.name}
                onChange={(val) => setEditAccountForm((prev) => ({ ...prev, name: val }))}
              />
              <InputRow
                id="edit-account-bio"
                icon={User}
                label="Bio"
                description="A short description about yourself"
                value={editAccountForm.bio}
                onChange={(val) => setEditAccountForm((prev) => ({ ...prev, bio: val }))}
              />
              <InputRow
                id="edit-account-email"
                icon={Mail}
                label="Email Address"
                description="Used for login and notifications (Read-only)"
                value={accountInfo.email}
                onChange={() => {}}
                disabled
              />
              <SettingRow
                icon={Lock}
                label="Password"
                description="Last changed never"
                value="••••••••"
                last
              />

              <div className="flex gap-3 py-4 border-t border-secondary-100 mt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCancelEditingAccount}
                  disabled={savingAccount}
                  className="gap-1.5"
                >
                  <X size={14} />
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSaveAccount}
                  disabled={savingAccount}
                  className="gap-1.5"
                >
                  <Check size={14} />
                  {savingAccount ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </>
          ) : (
            <>
              <SettingRow
                icon={User}
                label="Display Name"
                description="How you appear across the app"
                value={accountInfo.name}
              />
              {accountInfo.bio && (
                <SettingRow
                  icon={User}
                  label="Bio"
                  description="A short description about yourself"
                  value={accountInfo.bio}
                />
              )}
              <SettingRow
                icon={Mail}
                label="Email Address"
                description="Used for login and notifications"
                value={accountInfo.email}
              />
              <SettingRow
                icon={Lock}
                label="Password"
                description="Last changed never"
                value="••••••••"
                last
              />
            </>
          )}
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
            value={prefs.travelStyle}
            options={TRAVEL_STYLE_OPTS}
            onChange={(v) => handlePrefChange("travelStyle", v)}
          />
          <SelectRow
            id="setting-transport"
            icon={Plane}
            label="Preferred Transport"
            description="Your default mode of getting around"
            value={prefs.transport}
            options={TRANSPORT_OPTS}
            onChange={(v) => handlePrefChange("transport", v)}
          />
          <SelectRow
            id="setting-budget"
            icon={CreditCard}
            label="Default Budget"
            description="Controls cost estimates in suggestions"
            value={prefs.budget}
            options={BUDGET_OPTS}
            onChange={(v) => handlePrefChange("budget", v)}
            last
          />

          {/* Save button — only shown when user has made changes */}
          {prefsDirty && (
            <div className="pb-4 pt-2">
              <Button
                id="save-ai-prefs-btn"
                variant="primary"
                onClick={handleSavePrefs}
                disabled={savingPrefs}
                className="gap-2"
              >
                <Check size={15} />
                {savingPrefs ? "Saving…" : "Save AI Preferences"}
              </Button>
            </div>
          )}
        </SettingsSection>

      </div>

      <div className="h-8" />
    </DashboardLayout>
  );
}

export default Settings;
