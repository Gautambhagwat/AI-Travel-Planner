function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">

      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}

export default Input;