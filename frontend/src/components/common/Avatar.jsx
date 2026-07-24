function Avatar({ name = "User", size = "md" }) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-lg",
    lg: "h-20 w-20 text-2xl",
  };

  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-full bg-blue-600 font-bold text-white`}
    >
      {initial}
    </div>
  );
}

export default Avatar;