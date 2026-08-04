import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Loader2 } from "lucide-react";

import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import useAuth from "../../hooks/useAuth";
import { registerSchema } from "../../utils/validationSchemas";

function RegisterForm() {
  const [submissionError, setSubmissionError] = useState("");

  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const submit = async ({ name, email, password }) => {
    setSubmissionError("");

    try {
      await registerUser({ name, email, password });

      navigate("/login", {
        state: {
          registrationSuccess: true,
        },
      });
    } catch (error) {
      setSubmissionError(
        error.message || "Unable to create your account."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-5"
      noValidate
    >
      {/* Full Name */}

      <div>
        <label htmlFor="register-name" className="mb-2 block text-sm font-semibold text-secondary-700">
          Full Name
        </label>

        <div className="relative">

          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
            aria-hidden="true"
          />

          <input
            id="register-name"
            placeholder="Enter your full name"
            autoComplete="name"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "register-name-error" : undefined}
            className="w-full rounded-2xl border border-secondary-200 bg-white py-3 pl-12 pr-4 text-sm text-secondary-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 placeholder:text-secondary-400"
          />

        </div>

        {errors.name && (
          <p id="register-name-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label htmlFor="register-email" className="mb-2 block text-sm font-semibold text-secondary-700">
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
            aria-hidden="true"
          />

          <input
            id="register-email"
            type="email"
            inputMode="email"
            placeholder="Enter your email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "register-email-error" : undefined}
            className="w-full rounded-2xl border border-secondary-200 bg-white py-3 pl-12 pr-4 text-sm text-secondary-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 placeholder:text-secondary-400"
          />

        </div>

        {errors.email && (
          <p id="register-email-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div>
        <label htmlFor="register-password" className="mb-2 block text-sm font-semibold text-secondary-700">
          Password
        </label>

        <PasswordInput
          id="register-password"
          placeholder="Create a password"
          register={register}
          name="password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "register-password-error" : undefined}
        />

        {errors.password && (
          <p id="register-password-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}

      <div>
        <label htmlFor="register-confirm-password" className="mb-2 block text-sm font-semibold text-secondary-700">
          Confirm Password
        </label>

        <PasswordInput
          id="register-confirm-password"
          placeholder="Confirm your password"
          register={register}
          name="confirmPassword"
          aria-invalid={Boolean(errors.confirmPassword)}
          aria-describedby={errors.confirmPassword ? "register-confirm-password-error" : undefined}
        />

        {errors.confirmPassword && (
          <p id="register-confirm-password-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Error */}

      {submissionError && (
        <div
          className="rounded-xl border border-error-200 bg-error-50 p-3.5 text-xs font-medium text-error-700"
          role="alert"
        >
          {submissionError}
        </div>
      )}

      {/* Submit */}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            <span>Creating Account...</span>
          </>
        ) : (
          "Create Account"
        )}
      </Button>

      {/* Login */}

      <div className="border-t border-secondary-100 pt-5 text-center text-xs text-secondary-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-primary-600 hover:text-primary-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;