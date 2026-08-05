import { useState, useEffect, useContext } from "react";
import { updateUserByEmail } from "../../services/userService";
import {
  User,
  MapPin,
  Plane,
  CalendarDays,
  Wallet,
  Sparkles,
  Compass,
  Settings,
  X,
  Globe,
  Clock,
  Star,
  Zap,
  Camera,
  Mail,
  Shield,
  TrendingUp,
  Check,
  ChevronRight,
  Mountain,
  Utensils,
  Coffee,
  Heart,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import { AuthContext } from "../../context/AuthContext";
import { getUserByEmail } from "../../services/userService";
import { toast } from "../../components/ui/Toast";
import {
  getPreferences,
  updatePreferences,
} from "../../services/preferenceService";
import { getTripStats } from "../../services/tripService";

/* ─── Interest icon map ───────────────────────────────────── */
const INTEREST_ICONS = {
  Beach: { icon: Globe, color: "bg-cyan-100 text-cyan-700" },
  Mountains: { icon: Mountain, color: "bg-emerald-100 text-emerald-700" },
  Culture: { icon: Sparkles, color: "bg-purple-100 text-purple-700" },
  Food: { icon: Utensils, color: "bg-orange-100 text-orange-700" },
  Adventure: { icon: Zap, color: "bg-yellow-100 text-yellow-700" },
  Coffee: { icon: Coffee, color: "bg-amber-100 text-amber-700" },
};

const PREF_META = {
  travelStyle: {
    label: "Travel Style",
    icon: Compass,
    color: "bg-primary-100 text-primary-700",
    gradient: "from-primary-50 to-white",
  },
  budget: {
    label: "Budget Range",
    icon: Wallet,
    color: "bg-success-100 text-success-700",
    gradient: "from-success-50 to-white",
  },
};

/* ─── Edit Profile Modal ──────────────────────────────────── */
function EditProfileModal({ user, onClose, onSave }) {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: user.name || "",
    bio: user.bio || "",
    travelStyle: user.travelStyle || "Mid-range",
    budget: user.budget || "Medium",
    interests: user.interests || [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function toggleInterest(tag) {
    setForm((prev) => {
      const exists = prev.interests.includes(tag);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== tag)
          : [...prev.interests, tag],
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Display name is required.");
      return;
    }

    if (!user.email) {
      toast.error("User email not found.");
      return;
    }

    try {
      setSaving(true);

      // UserService: only fullName supported by backend
      const userPayload = {
        fullName: form.name.trim(),
      };

      // Store bio in localStorage under key bio_<userId>
      const bioKey = `bio_${user.id}`;
      if (form.bio) {
        localStorage.setItem(bioKey, form.bio.trim());
      } else {
        localStorage.removeItem(bioKey);
      }

      // PreferenceService: budget + travelStyle + interests
      const prefPayload = {
        budget: form.budget,
        travelStyle: form.travelStyle,
        interests: form.interests,
      };

      const [updatedProfile] = await Promise.all([
        updateUserByEmail(user.email, userPayload),
        updatePreferences(user.id, prefPayload),
      ]);

      const merged = {
        ...updatedProfile,
        name: updatedProfile.fullName || updatedProfile.name,
        bio: form.bio.trim(),
        budget: form.budget,
        travelStyle: form.travelStyle,
        interests: form.interests,
      };

      onSave(merged);

      // Sync AuthContext / localStorage
      const stored = localStorage.getItem("user");
      if (stored) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...JSON.parse(stored), ...updatedProfile, bio: form.bio.trim() })
        );
      }

      toast.success("Profile updated successfully.");
      onClose();
    } catch (err) {
      toast.error(err.message || "Unable to update profile.");
    } finally {
      setSaving(false);
    }
  }

  const INTEREST_OPTIONS = [
    "Beach",
    "Mountains",
    "Culture",
    "Food",
    "Adventure",
    "Coffee",
  ];

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Drawer / Sheet */}
      <div
        className="w-full max-w-lg rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        style={{ animation: "slideUpIn 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-secondary-100 px-6 py-5">
          <div>
            <h2 id="edit-profile-title" className="text-xl font-bold text-secondary-900">
              Edit Profile
            </h2>
            <p className="mt-0.5 text-xs text-secondary-400">
              Updates are saved to UserService &amp; PreferenceService
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close edit profile modal"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-secondary-400 transition-all duration-150 hover:bg-secondary-100 hover:text-secondary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto px-6 py-6">
          {/* Avatar placeholder */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-cyan-500 text-white shadow-lg">
              <User size={36} />
              <button
                type="button"
                aria-label="Change avatar"
                className="absolute -bottom-1 -right-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-primary-600 text-white transition-transform hover:scale-110"
              >
                <Camera size={12} />
              </button>
            </div>
            <p className="text-xs text-secondary-400">Avatar upload coming soon</p>
          </div>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="edit-name" className="mb-1.5 block text-sm font-medium text-secondary-700">
                Display Name
              </label>
              <input
                id="edit-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-secondary-200 bg-secondary-50 px-4 py-2.5 text-sm text-secondary-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              />
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="edit-bio" className="mb-1.5 block text-sm font-medium text-secondary-700">
                Bio
              </label>
              <textarea
                id="edit-bio"
                name="bio"
                rows={2}
                value={form.bio}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-secondary-200 bg-secondary-50 px-4 py-2.5 text-sm text-secondary-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              />
            </div>

            {/* Travel Style */}
            <div>
              <label htmlFor="edit-style" className="mb-1.5 block text-sm font-medium text-secondary-700">
                Travel Style
              </label>
              <select
                id="edit-style"
                name="travelStyle"
                value={form.travelStyle}
                onChange={handleChange}
                className="w-full rounded-xl border border-secondary-200 bg-secondary-50 px-4 py-2.5 text-sm text-secondary-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              >
                {["Budget", "Mid-range", "Luxury", "Backpacker", "Family"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="edit-budget" className="mb-1.5 block text-sm font-medium text-secondary-700">
                Budget Range
              </label>
              <select
                id="edit-budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-secondary-200 bg-secondary-50 px-4 py-2.5 text-sm text-secondary-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
              >
                {["Low", "Medium", "High", "Flexible"].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Interests */}
            <div>
              <p className="mb-2 text-sm font-medium text-secondary-700">Interests</p>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((tag) => {
                  const selected = form.interests.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleInterest(tag)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-150 hover:scale-105 ${
                        selected
                          ? "bg-primary-600 text-white shadow-sm"
                          : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex gap-3 border-t border-secondary-100 px-6 py-4">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="flex-1 gap-2"
            disabled={saving}
            onClick={handleSubmit}
          >
            <Check size={15} />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── Stat Card ───────────────────────────────────────────── */
function ProfileStatCard({ icon: Icon, value, label, color, gradient, trend }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-secondary-100 bg-gradient-to-br ${gradient} p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-6`}
    >
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/40 blur-xl" />

      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${color} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={20} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-xs font-semibold text-success-700">
            <TrendingUp size={11} />
            {trend}
          </div>
        )}
      </div>

      <p className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
        {value ?? "—"}
      </p>
      <p className="mt-1 text-sm font-medium text-secondary-500">{label}</p>
    </div>
  );
}

/* ─── Preference Card ─────────────────────────────────────── */
function PrefCard({ icon: Icon, label, value, color, gradient }) {
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border border-secondary-100 bg-gradient-to-r ${gradient} p-4 transition-all duration-200 hover:-translate-x-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-primary-200`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color} transition-transform duration-200 group-hover:scale-110`}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary-400">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-secondary-800">
          {value}
        </p>
      </div>
      <ChevronRight size={15} className="shrink-0 text-secondary-300 transition-transform duration-200 group-hover:translate-x-0.5" />
    </div>
  );
}

/* ─── Interest Chip ───────────────────────────────────────── */
function InterestChip({ label }) {
  const meta = INTEREST_ICONS[label] || { icon: Globe, color: "bg-secondary-100 text-secondary-600" };
  const IconComp = meta.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${meta.color} px-3 py-1.5 text-xs font-semibold transition-all duration-150 hover:scale-105 hover:shadow-sm`}
    >
      <IconComp size={12} />
      {label}
    </span>
  );
}

/* ─── Activity Item ───────────────────────────────────────── */
function ActivityItem({ item }) {
  const statusColor =
    item.status === "completed"
      ? "bg-success-100 text-success-600"
      : "bg-primary-100 text-primary-600";

  return (
    <div className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-200 hover:bg-secondary-50">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${statusColor} transition-transform duration-200 group-hover:scale-110`}
      >
        <Plane size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-secondary-800">{item.title}</p>
        {item.subtitle && (
          <p className="mt-0.5 text-xs text-secondary-400">{item.subtitle}</p>
        )}
      </div>
      <div className="shrink-0 flex flex-col items-end gap-1">
        {item.status === "completed" && (
          <span className="rounded-full bg-success-100 px-2 py-0.5 text-xs font-semibold text-success-700">
            Done
          </span>
        )}
        <span className="text-xs text-secondary-400">{item.time}</span>
      </div>
    </div>
  );
}

/* ─── Main Profile Component ──────────────────────────────── */
function Profile() {
  const { user: authUser } = useContext(AuthContext);

  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({ tripsPlanned: null, countriesVisited: null, travelDays: null, recentActivity: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);

  // Load UserService + PreferenceService in parallel
  useEffect(() => {
    async function loadProfile() {
      if (!authUser?.email) {
        setLoading(false);
        return;
      }

      try {
        const backendProfile = await getUserByEmail(authUser.email);

        let preferences = {};
        try {
          preferences = await getPreferences(backendProfile.id);
        } catch {
          // Preference record may not exist yet — safe to skip
        }

        const localBio = localStorage.getItem(`bio_${backendProfile.id}`) || backendProfile.bio || "";

        setProfile({
          id: backendProfile.id,
          name: backendProfile.fullName || backendProfile.name || "",
          email: backendProfile.email || authUser.email,
          bio: localBio,
          joined: backendProfile.createdAt
            ? new Date(backendProfile.createdAt).toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })
            : null,
          travelStyle: preferences.travelStyle || null,
          budget: preferences.budget || null,
          interests: preferences.interests || [],
        });
      } catch {
        toast.error("Unable to load profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [authUser]);

  // Load TripService statistics separately so the page renders fast
  useEffect(() => {
    async function loadStats() {
      const userId = authUser?.id;
      if (!userId) {
        setStatsLoading(false);
        return;
      }

      try {
        const data = await getTripStats(userId);
        setStats(data);
      } catch {
        // Stats unavailable — show empty state gracefully
      } finally {
        setStatsLoading(false);
      }
    }

    loadStats();
  }, [authUser]);

  function handleSave(updates) {
    setProfile((prev) => ({ ...prev, ...updates }));
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
            <p className="mt-4 text-secondary-500">Loading profile...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const displayName = profile?.name || authUser?.fullName || "Traveler";
  const displayEmail = profile?.email || authUser?.email || "";
  const displayBio = profile?.bio || "";
  const displayJoined = profile?.joined;

  return (
    <DashboardLayout>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        aria-label="Profile hero"
        className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-700 via-primary-600 to-cyan-500 p-6 text-white shadow-xl sm:mb-10 sm:rounded-3xl sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-64 rounded-full bg-cyan-300/20 blur-2xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: Avatar + Info */}
          <div className="flex items-end gap-5 sm:gap-6">
            <div className="relative shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 ring-4 ring-white/30 backdrop-blur-sm sm:h-24 sm:w-24 sm:rounded-3xl">
                <User size={44} className="text-white" aria-hidden="true" />
              </div>
              <span
                aria-label="Online"
                className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400"
              />
            </div>

            <div className="min-w-0">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/20">
                <Sparkles size={12} aria-hidden="true" />
                Itinera Explorer
              </div>

              <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {displayName}
              </h1>

              {displayBio && (
                <p className="mt-1 text-sm text-sky-100 sm:text-base">{displayBio}</p>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-sky-100">
                {displayEmail && (
                  <span className="flex items-center gap-1">
                    <Mail size={12} aria-hidden="true" />
                    {displayEmail}
                  </span>
                )}
                {displayEmail && displayJoined && (
                  <span className="h-1 w-1 rounded-full bg-sky-300" />
                )}
                {displayJoined && (
                  <span className="flex items-center gap-1">
                    <Clock size={12} aria-hidden="true" />
                    Member since {displayJoined}
                  </span>
                )}
                <span className="h-1 w-1 rounded-full bg-sky-300" />
                <span className="flex items-center gap-1">
                  <Shield size={12} aria-hidden="true" />
                  <span className="rounded-full bg-emerald-400/30 px-2 py-0.5 text-emerald-100 ring-1 ring-emerald-300/30">
                    Active
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsEditing(true)}
              aria-label="Open edit profile modal"
              className="gap-2 border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
            >
              <Settings size={16} aria-hidden="true" />
              Edit Profile
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section aria-label="Travel statistics" className="mb-8 grid gap-4 sm:gap-5 md:grid-cols-3">
        <ProfileStatCard
          icon={Plane}
          value={statsLoading ? "…" : stats.tripsPlanned}
          label="Trips Planned"
          color="bg-primary-100 text-primary-700"
          gradient="from-primary-50 via-white to-white"
        />
        <ProfileStatCard
          icon={MapPin}
          value={statsLoading ? "…" : stats.countriesVisited}
          label="Destinations Visited"
          color="bg-accent-100 text-accent-700"
          gradient="from-cyan-50 via-white to-white"
        />
        <ProfileStatCard
          icon={CalendarDays}
          value={statsLoading ? "…" : stats.travelDays}
          label="Travel Days"
          color="bg-success-100 text-success-700"
          gradient="from-emerald-50 via-white to-white"
        />
      </section>

      {/* ── Bottom Grid ───────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* ── Travel Preferences ────────────────────────── */}
        <section
          aria-label="Travel preferences"
          className="rounded-2xl border border-secondary-100 bg-white p-5 shadow-card sm:rounded-3xl sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-secondary-900">Travel Preferences</h2>
              <p className="mt-0.5 text-xs text-secondary-400">Your personalised travel profile</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <Compass size={17} aria-hidden="true" />
            </div>
          </div>

          {/* Preference cards */}
          <div className="space-y-2.5">
            {Object.entries(PREF_META).map(([key, meta]) => (
              <PrefCard
                key={key}
                icon={meta.icon}
                label={meta.label}
                value={profile?.[key] || "—"}
                color={meta.color}
                gradient={meta.gradient}
              />
            ))}
          </div>

          {/* Interests */}
          <div className="mt-5 border-t border-secondary-100 pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary-400">
              Interests
            </p>
            {profile?.interests && profile.interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((tag) => (
                  <InterestChip key={tag} label={tag} />
                ))}
              </div>
            ) : (
              <p className="text-sm italic text-secondary-400">
                No interests added yet. Edit your profile to add some.
              </p>
            )}
          </div>
        </section>

        {/* ── Recent Activity ────────────────────────────── */}
        <section
          aria-label="Recent activity"
          className="rounded-2xl border border-secondary-100 bg-white p-5 shadow-card sm:rounded-3xl sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-secondary-900">Recent Activity</h2>
              <p className="mt-0.5 text-xs text-secondary-400">Your latest travel moments</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
              <Clock size={17} aria-hidden="true" />
            </div>
          </div>

          {statsLoading ? (
            <div className="flex items-center justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
            </div>
          ) : stats.recentActivity.length > 0 ? (
            <ul role="list" className="divide-y divide-secondary-50">
              {stats.recentActivity.map((item) => (
                <li key={item.id}>
                  <ActivityItem item={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary-50 py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-400">
                <Globe size={24} aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-semibold text-secondary-600">No activity yet</p>
              <p className="mt-1 text-xs text-secondary-400">
                Start planning a trip to see your activity here.
              </p>
            </div>
          )}

          {stats.recentActivity.length > 0 && (
            <button
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold text-primary-600 transition-all duration-150 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400"
              aria-label="View all activity"
            >
              View all activity
              <ChevronRight size={14} />
            </button>
          )}
        </section>
      </div>

      {/* ── Edit Modal ────────────────────────────────────── */}
      {isEditing && profile && (
        <EditProfileModal
          user={profile}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}

      <style>{`
        @keyframes slideUpIn {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </DashboardLayout>
  );
}

export default Profile;
