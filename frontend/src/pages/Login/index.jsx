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
      <div className="mb-8">

        <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-primary-700">
          <Sparkles size={16} />
          <span className="text-sm font-medium">
            AI Powered Travel Planner
          </span>
        </div>

      </div>

      {state?.registrationSuccess && (
        <div
          className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4"
          role="status"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <LogIn size={18} className="text-green-700" />
            </div>

            <div>
              <p className="font-semibold text-green-800">
                Account created successfully
              </p>

              <p className="text-sm text-green-700">
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