import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User } from "lucide-react";

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
      className="space-y-6"
    >
      {/* Full Name */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-secondary-700">
          Full Name
        </label>

        <div className="relative">

          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
          />

          <input
            placeholder="Enter your full name"
            autoComplete="name"
            {...register("name")}
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

        {errors.name && (
          <p className="mt-2 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

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
            type="email"
            placeholder="Enter your email"
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

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-secondary-700">
          Password
        </label>

        <PasswordInput
          placeholder="Create a password"
          register={register}
          name="password"
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-600">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-secondary-700">
          Confirm Password
        </label>

        <PasswordInput
          placeholder="Confirm your password"
          register={register}
          name="confirmPassword"
        />

        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-600">
            {errors.confirmPassword.message}
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

      {/* Submit */}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Creating Account..."
          : "Create Account"}
      </Button>

      {/* Login */}

      <div className="border-t border-secondary-100 pt-6 text-center text-sm text-secondary-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-primary-600 hover:text-primary-700"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;