import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sara Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Explorer",
    destination: "Trip to Bali, Indonesia",
    rating: 5,
    quote:
      "Itinera built an incredible 7-day itinerary for our Bali honeymoon. The hotel recommendations and budget estimates were spot on!",
  },
  {
    name: "Lewis Hamilton",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    role: "Solo Traveler",
    destination: "Trip to Manali & Leh",
    rating: 5,
    quote:
      "The day-by-day routing saved us hours of research. Being able to see estimated costs upfront made budgeting completely stress-free.",
  },
  {
    name: "Sara Williams",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Frequent Traveler",
    destination: "Trip to Paris & Rome",
    rating: 5,
    quote:
      "I was amazed by how personalized the AI recommendations were. It found hidden cafes and local spots we would have never discovered.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-sky-50/70 via-white to-white py-16 lg:py-20 xl:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">

          <span className="rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-semibold text-primary-700 sm:text-sm">
            Traveler Stories
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            What Our Users Say
          </h2>

          <p className="mt-4 text-base leading-relaxed text-secondary-600 lg:text-lg">
            Trusted by thousands of adventurous travelers around the globe to plan unforgettable journeys.
          </p>

        </div>

        {/* Cards Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group flex flex-col justify-between rounded-2xl border border-secondary-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl lg:p-7"
            >

              <div>

                {/* Top Row: Rating & Quote Icon */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote size={28} className="text-primary-100 transition-colors duration-300 group-hover:text-primary-300" />

                </div>

                {/* Quote Text — fixed JSX rendering */}

                <p className="mt-5 text-sm leading-relaxed text-secondary-700 italic lg:text-[0.9375rem]">
                  &ldquo;{item.quote}&rdquo;
                </p>

              </div>

              {/* Author & Destination Info */}

              <div className="mt-6 flex items-center gap-3.5 border-t border-secondary-100 pt-5">

                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-2 ring-primary-100 ring-offset-1 transition-all duration-300 group-hover:ring-primary-300"
                />

                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-bold text-secondary-900 leading-snug">
                      {item.name}
                    </h4>
                    <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-600 border border-primary-100">
                      {item.role}
                    </span>
                  </div>

                  <p className="mt-0.5 text-xs font-medium text-secondary-500 truncate">
                    {item.destination}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;