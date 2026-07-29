import {
  ArrowRight,
  MapPin,
  Star,
  Calendar,
} from "lucide-react";

const destinations = [
  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    duration: "4-5 Days",
    season: "Nov - Feb",
    rating: "4.8",
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    duration: "5 Days",
    season: "Oct - Mar",
    rating: "4.9",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    duration: "6 Days",
    season: "Apr - Oct",
    rating: "4.9",
  },
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
    duration: "5 Days",
    season: "Apr - Jun",
    rating: "4.8",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    duration: "4 Days",
    season: "Nov - Mar",
    rating: "4.7",
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
    duration: "6 Days",
    season: "Mar - May",
    rating: "4.9",
  },
];

function PopularDestinations() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600">
            Explore the World
          </span>

          <h2 className="mt-5 text-4xl font-bold text-secondary-900 md:text-5xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-500">
            Discover handpicked destinations loved by travelers and
            generate your personalized AI itinerary in seconds.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {destinations.map((destination) => (

            <article
              key={destination.name}
              className="group overflow-hidden rounded-3xl border border-secondary-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold">
                    {destination.rating}
                  </span>

                </div>

                <div className="absolute bottom-5 left-5 text-white">

                  <h3 className="text-3xl font-bold">
                    {destination.name}
                  </h3>

                </div>

              </div>

              <div className="space-y-6 p-6">

                <div className="flex justify-between text-sm text-secondary-600">

                  <div className="flex items-center gap-2">

                    <Calendar size={17} />

                    {destination.duration}

                  </div>

                  <div className="flex items-center gap-2">

                    <MapPin size={17} />

                    {destination.season}

                  </div>

                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 py-3 font-semibold text-white transition hover:bg-primary-700">

                  Explore Destination

                  <ArrowRight size={18} />

                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularDestinations;