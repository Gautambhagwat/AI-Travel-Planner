function TripSummary({ trip }) {
  return (
    <section className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">

      <h1 className="text-4xl font-bold">

        {trip.tripTitle}

      </h1>

      <p className="mt-3">

        Budget ₹{trip.totalCost}

      </p>

      <p>

        {trip.days.length} Days

      </p>

    </section>
  );
}

export default TripSummary;