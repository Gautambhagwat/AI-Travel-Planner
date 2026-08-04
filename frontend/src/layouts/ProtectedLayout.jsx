import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

function ProtectedLayout() {
  return (
    <div className="min-w-0 bg-background lg:flex">
      <Sidebar />

      <main className="flex-1 min-w-0 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default ProtectedLayout;
