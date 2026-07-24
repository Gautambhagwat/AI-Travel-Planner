function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
    />
  );
}

export default SearchBar;