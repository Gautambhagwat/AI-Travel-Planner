function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold">
        {value}
      </h3>

    </div>
  );
}

export default StatCard;