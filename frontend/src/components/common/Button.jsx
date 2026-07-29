function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",

    secondary:
      "border border-secondary-200 bg-white text-secondary-700 hover:bg-secondary-50",

    outline:
      "border border-primary-300 bg-white text-primary-700 hover:bg-primary-50",

    ghost:
      "bg-transparent text-secondary-700 hover:bg-secondary-100",

    danger:
      "bg-error-600 text-white hover:bg-error-700",

    success:
      "bg-success-600 text-white hover:bg-success-700",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;