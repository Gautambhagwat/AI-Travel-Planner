import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

function PasswordInput({
  placeholder,
  register,
  name,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">

      <Lock
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
      />

      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        autoComplete={
          name === "password"
            ? "current-password"
            : "new-password"
        }
        {...register(name)}
        className="
          w-full
          rounded-2xl
          border
          border-secondary-200
          bg-white
          py-3
          pl-12
          pr-12
          text-secondary-900
          placeholder:text-secondary-400
          outline-none
          transition-all
          duration-200
          focus:border-primary-500
          focus:ring-4
          focus:ring-primary-100
        "
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          rounded-full
          p-1
          text-secondary-500
          transition
          hover:bg-secondary-100
          hover:text-primary-600
        "
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>

    </div>
  );
}

export default PasswordInput;