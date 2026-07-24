import TopBar from "./TopBar";

function DashboardLayout({ children }) {
  return (
    <div className="flex-1">
      <TopBar />

      <main className="p-8 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;