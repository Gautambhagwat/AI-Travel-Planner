import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input
        {...register("email")}
        placeholder="Email"
        className="w-full rounded-lg border p-3"
      />

      <PasswordInput
        placeholder="Password"
        register={register}
        name="password"
      />

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button type="submit">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;