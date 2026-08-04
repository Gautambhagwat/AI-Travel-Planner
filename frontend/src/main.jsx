import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import AuthProvider from "./context/AuthContext";
import PlannerProvider from "./context/PlannerContext";
import ItineraryProvider from "./context/ItineraryContext";
import { ToastProvider } from "./components/ui/Toast";

createRoot(document.getElementById("root")).render(
   <StrictMode>
    <AuthProvider>
      <PlannerProvider>
        <ItineraryProvider>
          <App />
          <ToastProvider />
        </ItineraryProvider>
      </PlannerProvider>
    </AuthProvider>
  </StrictMode>
);