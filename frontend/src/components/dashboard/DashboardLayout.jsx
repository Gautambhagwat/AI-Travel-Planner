import TopBar from "./TopBar";

function DashboardLayout({ children }) {
  return (
    <div className="flex-1 min-w-0">
      <TopBar />

      <main className="min-h-screen bg-background px-4 py-5 pb-24 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:py-6 lg:pb-10 xl:px-12">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
