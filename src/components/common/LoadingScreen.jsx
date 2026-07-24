function LoadingScreen() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">

      <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

      <h2 className="text-xl font-semibold">
        AI is generating your trip...
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait a few seconds.
      </p>

    </div>
  );
}

export default LoadingScreen;