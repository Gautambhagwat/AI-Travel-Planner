import { useForm } from "react-hook-form";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../common/Button";

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const submit = (_data) => {
    // TODO: Wire to auth-service password reset endpoint when available
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6"
    >
      <div>

        <label className="mb-2 block text-sm font-semibold text-secondary-700">
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
          />

          <input
            type="email"
            placeholder="Enter your registered email"
            autoComplete="email"
            {...register("email")}
            className="
              w-full
              rounded-2xl
              border
              border-secondary-200
              bg-white
              py-3
              pl-12
              pr-4
              outline-none
              transition
              focus:border-primary-500
              focus:ring-4
              focus:ring-primary-100
            "
          />

        </div>

      </div>

      <Button
        type="submit"
        className="w-full"
      >
        Send Reset Link
      </Button>

      <div className="text-center">

        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>

      </div>

    </form>
  );
}

export default ForgotPasswordForm;