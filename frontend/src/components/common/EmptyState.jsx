function EmptyState({
  title,
  description,
  button,
}) {
  return (
    <div className="rounded-xl border border-dashed p-12 text-center">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

      {button && (
        <div className="mt-6">
          {button}
        </div>
      )}

    </div>
  );
}

export default EmptyState;