import { useContext, useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentTrips from "../../components/dashboard/RecentTrips";
import AIRecommendations from "../../components/dashboard/AIRecommendations";

import { AuthContext } from "../../context/AuthContext";
import { getTripsByUserId } from "../../services/tripService";

function Dashboard() {
  const { user: authUser } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadTrips() {
      const userId = authUser?.id;
      if (!userId) return;

      try {
        const response = await getTripsByUserId(userId);
        setTrips(response);
      } catch {
        // Trip load failure is non-critical; show empty state silently
      }
    }

    loadTrips();
  }, [authUser]);

  const totalEstimatedCost = trips.reduce(
    (total, trip) => total + Number(trip.totalPrice || 0),
    0
  );

    const destinations = new Set(
        trips
            .map((trip) =>
                trip.tripName
                    ?.replace(" AI Trip", "")
                    ?.replace(" Trip", "")
                    ?.trim()
            )
            .filter(Boolean)
    ).size;

  const formattedCost = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(totalEstimatedCost);

  return (
    <DashboardLayout>
      <WelcomeBanner />

      <section
        aria-label="Dashboard Statistics"
        className="mb-6 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <StatCard title="Total Trips" value={trips.length} />
        <StatCard title="Destinations" value={destinations} />
        <StatCard title="Estimated Budget" value={formattedCost} />
      </section>

      <section className="mb-6">
        <QuickActions />
      </section>

      <section
        aria-label="Trip Activity and Insights"
        className="grid gap-6 lg:grid-cols-2"
      >
        <RecentTrips trips={trips} />
          <AIRecommendations trips={trips} />
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;