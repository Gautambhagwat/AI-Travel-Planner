import TopBar from "./TopBar";

function DashboardLayout({ children }) {
  return (
    <div className="flex-1">
      <TopBar />

      <main className="min-h-screen bg-background px-6 py-8 md:px-10 lg:px-12">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;