import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import ProtectedRoute from "./ProtectedRoute";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Planner from "../pages/Planner";
import SavedTrips from "../pages/SavedTrips";
import TripDetails from "../pages/TripDetails";
import Destination from "../pages/Destination";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/saved-trips" element={<SavedTrips />} />
          <Route path="/trip-details" element={<TripDetails />} />
          <Route path="/trip-details/:id" element={<TripDetails />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

          <Route
          path="/forgot-password"
          element={<ForgotPassword/>}
          />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
