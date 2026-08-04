import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentTrips from "../../components/dashboard/RecentTrips";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
import { getSavedTrips } from "../../services/tripService";

function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(getSavedTrips());
  }, []);

  const totalEstimatedCost = trips.reduce(
    (total, trip) => total + trip.totalCost,
    0
  );

  const destinations = new Set(
    trips.map((trip) => trip.destination)
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

        <StatCard
          title="Saved Trips"
          value={trips.length}
        />

        <StatCard
          title="Destinations"
          value={destinations}
        />

        <StatCard
          title="Estimated Budget"
          value={formattedCost}
        />

      </section>

      <QuickActions />

      <section
        aria-label="Trip Activity and Insights"
        className="grid gap-5 lg:grid-cols-2"
      >

        <RecentTrips trips={trips} />

        <AIRecommendations />

      </section>

    </DashboardLayout>
  );
}

export default Dashboard;
