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

      <section className="my-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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

      <section className="mb-10">

        <QuickActions />

      </section>

      <section className="grid gap-6 lg:grid-cols-2">

        <RecentTrips trips={trips} />

        <AIRecommendations />

      </section>

    </DashboardLayout>
  );
}

export default Dashboard;