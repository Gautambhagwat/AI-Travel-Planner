import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Loader2 } from "lucide-react";

import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import useAuth from "../../hooks/useAuth";
import { loginSchema } from "../../utils/validationSchemas";

function LoginForm() {
  const [submissionError, setSubmissionError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setSubmissionError("");

    try {
      await login(data);
      navigate("/dashboard");
    } catch (error) {
      setSubmissionError(
        error.message || "Unable to log in. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      {/* Email */}

      <div>
        <label htmlFor="login-email" className="mb-2 block text-sm font-semibold text-secondary-700">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
            aria-hidden="true"
          />

          <input
            id="login-email"
            {...register("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            className="w-full rounded-2xl border border-secondary-200 bg-white py-3 pl-12 pr-4 text-sm text-secondary-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 placeholder:text-secondary-400"
          />
        </div>

        {errors.email && (
          <p id="login-email-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div>
        <label htmlFor="login-password" className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary-700">
          <Lock size={15} aria-hidden="true" />
          Password
        </label>

        <PasswordInput
          id="login-password"
          placeholder="Enter your password"
          register={register}
          name="password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "login-password-error" : undefined}
        />

        {errors.password && (
          <p id="login-password-error" className="mt-1.5 text-xs font-medium text-error-600" role="alert">
            {errors.password.message}
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

      {/* Forgot Password */}

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-xs font-semibold text-primary-600 transition-colors hover:text-primary-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            <span>Signing In...</span>
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      {/* Register */}

      <div className="border-t border-secondary-100 pt-5 text-center text-xs text-secondary-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-primary-600 hover:text-primary-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
        >
          Create one
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;