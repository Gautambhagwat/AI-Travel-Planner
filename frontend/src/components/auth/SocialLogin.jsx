import { Chrome, Github } from "lucide-react";

function SocialLogin() {
  return (
    <div className="mt-8">

      <div className="relative mb-6">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-secondary-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-secondary-500">
            Or continue with
          </span>
        </div>

      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <button
          type="button"
          disabled
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-secondary-200
            bg-white
            py-3
            font-medium
            text-secondary-500
            transition
            hover:border-primary-300
            hover:bg-primary-50
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <Chrome size={20} />
          Google
        </button>

        <button
          type="button"
          disabled
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-secondary-200
            bg-white
            py-3
            font-medium
            text-secondary-500
            transition
            hover:border-primary-300
            hover:bg-primary-50
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <Github size={20} />
          GitHub
        </button>

      </div>

      <p className="mt-3 text-center text-xs text-secondary-400">
        Social sign-in can be enabled when backend authentication is available.
      </p>

    </div>
  );
}

export default SocialLogin;