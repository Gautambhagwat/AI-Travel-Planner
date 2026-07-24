function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-blue-600">
            AI Travel Planner
          </h1>

          <h2 className="mt-6 text-2xl font-semibold">
            {title}
          </h2>

          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>

        </div>

        {children}

      </div>
    </div>
  );
}

export default AuthLayout;