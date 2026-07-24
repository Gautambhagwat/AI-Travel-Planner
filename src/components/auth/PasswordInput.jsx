import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordInput({
  placeholder,
  register,
  name,
}) {

  const [show, setShow] = useState(false);

  return (
    <div className="relative">

      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-lg border p-3 pr-12"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-3"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>

    </div>
  );
}

export default PasswordInput;