import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Dashboard
      </h2>

      <div className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/planner">Planner</Link>

        <Link to="/saved-trips">Saved Trips</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/settings">Settings</Link>

      </div>

    </aside>
  );
}

export default Sidebar;