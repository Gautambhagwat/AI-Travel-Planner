import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow">

      <h1 className="text-xl font-bold">
        AI Travel Planner
      </h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </nav>
  );
}

export default Navbar;