import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Star,
  Calendar,
  Sparkles,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    duration: "4-5 Days",
    season: "Nov - Feb",
    rating: "4.8",
    tagline: "Sun, Sand & Seafood",
  },
  {
    id: 2,
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    duration: "5 Days",
    season: "Oct - Mar",
    rating: "4.9",
    tagline: "Snow Peaks & Adventure",
  },
  {
    id: 3,
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    duration: "6 Days",
    season: "Apr - Oct",
    rating: "4.9",
    tagline: "Culture, Temples & Beaches",
  },
  {
    id: 4,
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
    duration: "5 Days",
    season: "Apr - Jun",
    rating: "4.8",
    tagline: "Romance & Art",
  },
  {
    id: 5,
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    duration: "4 Days",
    season: "Nov - Mar",
    rating: "4.7",
    tagline: "Luxury & Skyline Views",
  },
  {
    id: 6,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
    duration: "6 Days",
    season: "Mar - May",
    rating: "4.9",
    tagline: "Tech, Tradition & Ramen",
  },
];

function PopularDestinations() {
  const navigate = useNavigate();

  return (
    <section id="destinations" className="bg-slate-50/50 py-16 lg:py-20 xl:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="mb-12 text-center lg:mb-16">

          <span className="rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-semibold text-primary-600 sm:text-sm">
            Explore the World
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-secondary-600 lg:text-lg">
            Discover handpicked destinations loved by travelers and
            generate your personalized AI itinerary in seconds.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {destinations.map((destination) => (

            <article
              key={destination.name}
              onClick={() => navigate(`/destination/${destination.id}`)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-secondary-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-200 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/destination/${destination.id}`)}
              aria-label={`Explore ${destination.name}`}
            >

              <div className="relative h-56 overflow-hidden lg:h-60">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay — darker on hover for CTA visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80" />

                {/* Rating badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-secondary-900 shadow backdrop-blur">

                  <Star
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span>
                    {destination.rating}
                  </span>

                </div>

                {/* Hover: "Plan with AI" badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                  <Sparkles size={12} />
                  Plan with AI
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-4 left-4 text-white">

                  <h3 className="text-2xl font-bold lg:text-3xl">
                    {destination.name}
                  </h3>

                  <p className="mt-0.5 text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                    {destination.tagline}
                  </p>

                </div>

              </div>

              <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">

                <div className="flex justify-between text-xs font-medium text-secondary-600 lg:text-sm">

                  <div className="flex items-center gap-1.5">

                    <Calendar size={16} className="text-primary-600" />

                    {destination.duration}

                  </div>

                  <div className="flex items-center gap-1.5">

                    <MapPin size={16} className="text-primary-600" />

                    {destination.season}

                  </div>

                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/destination/${destination.id}`);
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/20 transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary-300"
                >

                  Explore Destination

                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />

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