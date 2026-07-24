import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentTrips from "../../components/dashboard/RecentTrips";
import AIRecommendations from "../../components/dashboard/AIRecommendations";

function Dashboard() {
  return (
    <DashboardLayout>

      <WelcomeBanner />

      <div className="mb-8 grid gap-6 md:grid-cols-3">

        <StatCard
          title="Trips"
          value="12"
        />

        <StatCard
          title="Countries"
          value="6"
        />

        <StatCard
          title="Saved"
          value="₹45,000"
        />

      </div>

      <div className="mb-8">

        <QuickActions />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentTrips />

        <AIRecommendations />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;