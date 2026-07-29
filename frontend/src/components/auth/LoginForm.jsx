import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";

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
      className="space-y-6"
    >
      {/* Email */}

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
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-secondary-200 bg-white py-3 pl-12 pr-4 text-secondary-900 outline-none transition-all duration-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          />
        </div>

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary-700">
          <Lock size={16} />
          Password
        </label>

        <PasswordInput
          placeholder="Enter your password"
          register={register}
          name="password"
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Error */}

      {submissionError && (
        <div
          className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          {submissionError}
        </div>
      )}

      {/* Forgot Password */}

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm font-medium text-primary-600 transition hover:text-primary-700 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>

      {/* Register */}

      <div className="border-t border-secondary-100 pt-6 text-center text-sm text-secondary-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary-600 hover:text-primary-700"
        >
          Create one
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;