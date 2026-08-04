import { useEffect, useState } from "react";

import {
  User,
  MapPin,
  Plane,
  CalendarDays,
  Wallet,
  Sparkles,
  Compass,
  Settings,
} from "lucide-react";

import { getUserByEmail } from "../../services/userService";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import EditProfileModal from "../../components/profile/EditProfileModal";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const loadProfile = async () => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));

      if (!loggedInUser?.email) return;

      const profile = await getUserByEmail(loggedInUser.email);

      setUser(profile);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  if (!user) {
    return (
        <DashboardLayout>
          <div className="p-8">
            Loading profile...
          </div>
        </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Hero */}

      <section className="mb-10 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <User size={42} />
            </div>

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
                <Sparkles size={16} />
                <span className="text-sm font-medium">
                  AI Travel Explorer
                </span>
              </div>

              <h1 className="text-4xl font-bold">
                {user.fullName}
              </h1>

              <p className="mt-2 text-sky-100">
                {user.email}
              </p>
            </div>
          </div>

          <Button onClick={() => setIsEditOpen(true)}>
            <Settings size={18} />
            Edit Profile
          </Button>
        </div>
      </section>

      {/* Stats */}

      <section className="mb-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card">
          <Plane className="text-primary-600" size={28} />
          <h2 className="mt-4 text-3xl font-bold">
            {user.trips}
          </h2>
          <p className="mt-2 text-secondary-500">
            Trips Planned
          </p>
        </div>

        <div className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card">
          <MapPin className="text-primary-600" size={28} />
          <h2 className="mt-4 text-3xl font-bold">
            {user.countries}
          </h2>
          <p className="mt-2 text-secondary-500">
            Destinations
          </p>
        </div>

        <div className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card">
          <CalendarDays className="text-primary-600" size={28} />
          <h2 className="mt-4 text-3xl font-bold">
            {user.days}
          </h2>
          <p className="mt-2 text-secondary-500">
            Travel Days
          </p>
        </div>

      </section>

      {/* Preferences */}

      <section className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-bold text-secondary-900">
            Travel Preferences
          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between border-b border-secondary-100 pb-4">
              <span className="flex items-center gap-3 text-secondary-600">
                <Compass size={18} />
                Travel Style
              </span>

              <span className="font-semibold">
                {user.travelStyle}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-secondary-100 pb-4">
              <span className="flex items-center gap-3 text-secondary-600">
                <Plane size={18} />
                Transport
              </span>

              <span className="font-semibold">
                {user.preferredTransport}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-secondary-600">
                <Wallet size={18} />
                Budget
              </span>

              <span className="font-semibold">
                {user.budget}
              </span>
            </div>

          </div>
        </div>

        <div className="rounded-3xl border border-secondary-200 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-bold text-secondary-900">
            Account
          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex justify-between border-b border-secondary-100 pb-4">
              <span className="text-secondary-600">
                Member Since
              </span>

              <span className="font-semibold">
                {user.joined}
              </span>
            </div>

            <div className="flex justify-between border-b border-secondary-100 pb-4">
              <span className="text-secondary-600">
                Email
              </span>

              <span className="font-semibold break-all">
                {user.email}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-secondary-600">
                Account Status
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                Active
              </span>
            </div>

          </div>
        </div>

      </section>

      <EditProfileModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          user={user}
          onProfileUpdated={loadProfile}
      />
    </DashboardLayout>
  );
}

export default Profile;