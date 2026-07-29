import { Compass, Globe, Mountain, Search } from "lucide-react";

function Destination() {
  const featuredDestinations = [
    {
      name: "Bali",
      country: "Indonesia",
      icon: <Mountain size={22} />,
    },
    {
      name: "Paris",
      country: "France",
      icon: <Globe size={22} />,
    },
    {
      name: "Kyoto",
      country: "Japan",
      icon: <Compass size={22} />,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">

      {/* Hero */}

      <section className="border-b border-secondary-200 bg-gradient-to-r from-primary-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Compass size={16} />
              Explore the World
            </span>

            <h1 className="mt-6 text-4xl font-bold text-secondary-900">
              Discover Your Next Destination
            </h1>

            <p className="mt-4 text-lg text-secondary-600">
              Browse inspiring places and let AI help you build the perfect travel itinerary.
            </p>

          </div>

          {/* Search */}

          <div className="relative mt-10 max-w-xl">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400"
            />

            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full rounded-2xl border border-secondary-200 bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
            />

          </div>

        </div>
      </section>

      {/* Featured */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <h2 className="text-2xl font-bold text-secondary-900">
          Featured Destinations
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {featuredDestinations.map((place) => (
            <div
              key={place.name}
              className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                {place.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-secondary-900">
                {place.name}
              </h3>

              <p className="mt-2 text-secondary-500">
                {place.country}
              </p>

              <button
                className="mt-6 rounded-xl bg-primary-600 px-5 py-2 font-medium text-white transition hover:bg-primary-700"
              >
                Explore
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Destination;