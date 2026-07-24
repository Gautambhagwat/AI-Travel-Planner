function PopularDestinations() {

  const destinations = [
    "Goa",
    "Manali",
    "Bali",
    "Paris",
    "Dubai",
    "Tokyo"
  ];

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-4xl font-bold">

          Popular Destinations

        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (

            <div
              key={destination}
              className="rounded-xl border p-10 shadow text-center hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold">

                {destination}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularDestinations;