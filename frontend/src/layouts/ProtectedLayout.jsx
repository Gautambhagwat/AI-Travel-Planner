import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

function ProtectedLayout() {
  return (
    <div className="min-w-0 lg:flex">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default ProtectedLayout;
