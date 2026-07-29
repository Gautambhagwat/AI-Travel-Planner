import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-secondary-50">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        {children}

      </main>

    </div>
  );
}

export default MainLayout;