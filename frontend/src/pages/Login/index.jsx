import { LogIn, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  const { state } = useLocation();

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue planning your next adventure"
    >
      <div className="mb-6">

        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
          <Sparkles size={14} aria-hidden="true" />
          <span>AI Powered Travel Planner</span>
        </div>

      </div>

      {state?.registrationSuccess && (
        <div
          className="mb-6 rounded-2xl border border-success-200 bg-success-50 p-4 animate-[fadeSlideIn_0.3s_ease-out]"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
              <LogIn size={18} aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-bold text-success-900">
                Account created successfully
              </p>

              <p className="mt-0.5 text-xs text-success-700">
                You can now sign in and start planning your trips.
              </p>
            </div>
          </div>
        </div>
      )}

      <LoginForm />
    </AuthLayout>
  );
}

export default Login;