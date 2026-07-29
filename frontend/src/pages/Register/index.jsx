import { Sparkles } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join AI Travel Planner and start planning unforgettable journeys."
    >
      <div className="mb-8">

        <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-primary-700">
          <Sparkles size={16} />
          <span className="text-sm font-medium">
            Your journey starts here
          </span>
        </div>

      </div>

      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;