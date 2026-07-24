function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default Loader;