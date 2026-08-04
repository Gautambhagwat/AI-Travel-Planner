import { Sparkles } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Itinera and start planning unforgettable journeys."
    >
      <div className="mb-6">

        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
          <Sparkles size={14} aria-hidden="true" />
          <span>Your journey starts here</span>
        </div>

      </div>

      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;
