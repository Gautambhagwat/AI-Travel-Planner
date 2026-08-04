import { useState, useMemo, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  MapPin,
  Star,
  Calendar,
  Wallet,
  Sparkles,
  Compass,
  TrendingUp,
  ArrowRight,
  SlidersHorizontal,
  Globe,
  Waves,
  Mountain,
  Zap,
  Crown,
  Banknote,
  Users,
  Heart,
  UserRound,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   LOCAL DATASET — rich card data (no API call)
───────────────────────────────────────────────────────────── */
const ALL_DESTINATIONS = [
  {
    id: 1,
    name: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400",
    rating: 4.8,
    reviews: 2840,
    budget: "₹15,000 – ₹35,000",
    duration: "4–5 Days",
    season: "Nov – Feb",
    description: "Sun-drenched beaches, vibrant nightlife, and Portuguese-era heritage meet in India's most beloved coastal paradise.",
    tags: ["Beach", "Adventure", "Budget"],
    aiRecommended: true,
    trending: true,
  },
  {
    id: 2,
    name: "Manali",
    country: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1400",
    rating: 4.9,
    reviews: 3120,
    budget: "₹18,000 – ₹40,000",
    duration: "5–6 Days",
    season: "Oct – Mar",
    description: "Snow-capped peaks, roaring rivers, and ancient monasteries make Manali the ultimate Himalayan adventure.",
    tags: ["Mountains", "Adventure", "Solo"],
    aiRecommended: true,
    trending: false,
  },
  {
    id: 3,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400",
    rating: 4.9,
    reviews: 5210,
    budget: "$800 – $2,000",
    duration: "6–7 Days",
    season: "Apr – Oct",
    description: "Sacred temples, terraced rice fields, and turquoise seas create the world's most photographed island escape.",
    tags: ["Beach", "Honeymoon", "Luxury"],
    aiRecommended: true,
    trending: true,
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400",
    rating: 4.8,
    reviews: 7890,
    budget: "$1,500 – $4,000",
    duration: "5–7 Days",
    season: "Apr – Jun",
    description: "The Eiffel Tower, world-class cuisine, fashion, and art — Paris is the city that never stops enchanting.",
    tags: ["Luxury", "Honeymoon", "Family"],
    aiRecommended: false,
    trending: false,
  },
  {
    id: 5,
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400",
    rating: 4.7,
    reviews: 4300,
    budget: "$1,200 – $3,500",
    duration: "4–5 Days",
    season: "Nov – Mar",
    description: "Ultra-modern skylines, desert safaris, luxury malls, and record-breaking architecture all in one city.",
    tags: ["Luxury", "Family", "Adventure"],
    aiRecommended: false,
    trending: true,
  },
  {
    id: 6,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1400",
    rating: 4.9,
    reviews: 6540,
    budget: "$1,000 – $2,800",
    duration: "6–8 Days",
    season: "Mar – May",
    description: "Neon-lit streets, ancient shrines, ramen culture, and futuristic tech converge in the world's most dynamic city.",
    tags: ["Solo", "Adventure", "Family"],
    aiRecommended: true,
    trending: true,
  },
  {
    id: 7,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1400",
    rating: 4.9,
    reviews: 4180,
    budget: "$1,800 – $4,500",
    duration: "5–6 Days",
    season: "May – Sep",
    description: "Iconic blue-domed churches, volcanic beaches, and spectacular caldera sunsets on Greece's most iconic island.",
    tags: ["Beach", "Honeymoon", "Luxury"],
    aiRecommended: true,
    trending: false,
  },
  {
    id: 8,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1400",
    rating: 5.0,
    reviews: 3290,
    budget: "$2,500 – $8,000",
    duration: "5–7 Days",
    season: "Nov – Apr",
    description: "Crystalline lagoons, overwater bungalows, and pristine coral reefs — the pinnacle of tropical luxury.",
    tags: ["Beach", "Honeymoon", "Luxury"],
    aiRecommended: true,
    trending: true,
  },
  {
    id: 9,
    name: "Rajasthan",
    country: "India",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1400",
    rating: 4.7,
    reviews: 3850,
    budget: "₹20,000 – ₹55,000",
    duration: "7–10 Days",
    season: "Oct – Mar",
    description: "Royal palaces, camel safaris, and the vivid colours of Jaipur, Udaipur, and Jaisalmer await discovery.",
    tags: ["Family", "Budget", "Adventure"],
    aiRecommended: false,
    trending: false,
  },
  {
    id: 10,
    name: "New Zealand",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400",
    rating: 4.8,
    reviews: 2170,
    budget: "$1,500 – $4,000",
    duration: "10–14 Days",
    season: "Dec – Feb",
    description: "Dramatic fjords, Hobbiton movie sets, bungee jumping birthplace — New Zealand is adventure incarnate.",
    tags: ["Mountains", "Adventure", "Solo"],
    aiRecommended: false,
    trending: false,
  },
  {
    id: 11,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=1400",
    rating: 4.8,
    reviews: 2940,
    budget: "$1,200 – $3,800",
    duration: "5–6 Days",
    season: "May – Sep",
    description: "Cliffside villages dripping with bougainvillea, fresh limoncello, and the bluest Mediterranean waters.",
    tags: ["Beach", "Honeymoon", "Luxury"],
    aiRecommended: true,
    trending: false,
  },
  {
    id: 12,
    name: "Ladakh",
    country: "India",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400",
    rating: 4.9,
    reviews: 1870,
    budget: "₹25,000 – ₹60,000",
    duration: "7–9 Days",
    season: "Jun – Sep",
    description: "High-altitude deserts, azure mountain lakes, and Buddhist monasteries perched at the edge of the sky.",
    tags: ["Mountains", "Solo", "Adventure"],
    aiRecommended: true,
    trending: true,
  },
];

/* ─────────────────────────────────────────────────────────────
   FILTER CONFIG
───────────────────────────────────────────────────────────── */
const FILTERS = [
  { id: "all",       label: "All",       icon: Globe },
  { id: "Beach",     label: "Beach",     icon: Waves },
  { id: "Mountains", label: "Mountains", icon: Mountain },
  { id: "Adventure", label: "Adventure", icon: Zap },
  { id: "Luxury",    label: "Luxury",    icon: Crown },
  { id: "Budget",    label: "Budget",    icon: Banknote },
  { id: "Family",    label: "Family",    icon: Users },
  { id: "Solo",      label: "Solo",      icon: UserRound },
  { id: "Honeymoon", label: "Honeymoon", icon: Heart },
];

const POPULAR_SEARCHES = ["Bali", "Paris", "Maldives", "Santorini", "Tokyo", "Manali", "Goa", "Dubai"];

/* ─────────────────────────────────────────────────────────────
   DESTINATION CARD
───────────────────────────────────────────────────────────── */
function DestinationCard({ destination, index, onExplore }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-secondary-200/60 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-200 cursor-pointer"
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onExplore(destination)}
      role="button"
      tabIndex={0}
      aria-label={`Explore ${destination.name}, ${destination.country}`}
      onKeyDown={(e) => e.key === "Enter" && onExplore(destination)}
    >
      {/* ── Image ─────────────────────────────────────────────── */}
      <div className="relative h-60 overflow-hidden xl:h-64 2xl:h-72">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-all duration-300 group-hover:from-black/80" />

        {/* Top-left: rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-secondary-900 shadow-md backdrop-blur-sm">
          <Star size={13} className="fill-amber-400 text-amber-400" />
          <span>{destination.rating}</span>
          <span className="text-secondary-400 font-normal">({(destination.reviews / 1000).toFixed(1)}k)</span>
        </div>

        {/* Top-right: badges */}
        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
          {destination.aiRecommended && (
            <div className="flex items-center gap-1 rounded-full bg-primary-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
              <Sparkles size={10} />
              AI Pick
            </div>
          )}
          {destination.trending && (
            <div className="flex items-center gap-1 rounded-full bg-rose-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
              <TrendingUp size={10} />
              Trending
            </div>
          )}
        </div>

        {/* Bottom: name + country */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white xl:text-3xl">
                {destination.name}
              </h3>
              <div className="mt-1 flex items-center gap-1 text-white/80">
                <MapPin size={12} />
                <span className="text-xs font-medium">{destination.country}</span>
              </div>
            </div>
          </div>
          {/* Tag chips — slide up on hover */}
          <div className="mt-2.5 flex flex-wrap gap-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {destination.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5 xl:p-6">
        <p className="text-sm leading-relaxed text-secondary-600 line-clamp-2">
          {destination.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-secondary-400">
              <Calendar size={10} />
              Duration
            </span>
            <span className="text-xs font-semibold text-secondary-800">{destination.duration}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-secondary-400">
              <MapPin size={10} />
              Best Time
            </span>
            <span className="text-xs font-semibold text-secondary-800">{destination.season}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-secondary-400">
              <Wallet size={10} />
              Budget
            </span>
            <span className="text-xs font-semibold text-secondary-800 truncate">{destination.budget.split("–")[0]}+</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-secondary-100" />

        {/* CTA */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onExplore(destination);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 py-3 text-sm font-semibold text-white shadow-md shadow-primary-500/20 transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:gap-3 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-1"
          aria-label={`Plan a trip to ${destination.name}`}
        >
          <Sparkles size={14} />
          Plan with AI
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────────────────────────── */
function EmptyState({ query, activeFilter, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-50 ring-8 ring-primary-50/50">
        <Compass size={40} className="text-primary-400" />
      </div>
      <h3 className="text-xl font-bold text-secondary-900">
        {query ? `No results for "${query}"` : "No destinations found"}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-secondary-500">
        {query
          ? "Try a different search term, or clear your filters to browse all destinations."
          : `No destinations match the "${activeFilter}" filter. Try a different category.`}
      </p>
      <button
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-600 hover:text-white hover:border-primary-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-300"
      >
        <X size={14} />
        Reset Filters
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
function Destination() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchFocused, setSearchFocused] = useState(false);
  const inputRef = useRef(null);

  /* ── Local filtering ────────────────────────────────────── */
  const filtered = useMemo(() => {
    let list = ALL_DESTINATIONS;
    if (activeFilter !== "all") {
      list = list.filter((d) => d.tags.includes(activeFilter));
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [query, activeFilter]);

  /* ── Navigate to Planner with destination pre-filled ───── */
  const handleExplore = useCallback(
    (destination) => {
      navigate("/planner", { state: { destination: destination.name } });
    },
    [navigate]
  );

  const handleReset = () => {
    setQuery("");
    setActiveFilter("all");
    inputRef.current?.focus();
  };

  const handlePopularSearch = (term) => {
    setQuery(term);
    setActiveFilter("all");
    inputRef.current?.blur();
  };

  /* ── Stats ──────────────────────────────────────────────── */
  const aiPickCount = ALL_DESTINATIONS.filter((d) => d.aiRecommended).length;
  const trendingCount = ALL_DESTINATIONS.filter((d) => d.trending).length;

  return (
    <div className="min-h-screen bg-secondary-50">

      {/* ══════════════════════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-secondary-200 bg-gradient-to-br from-primary-50 via-white to-sky-50">

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-200/25 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-8 h-64 w-96 rounded-full bg-sky-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 xl:px-10 xl:py-14">

          {/* Label pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
            <Compass size={14} />
            Explore the World
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Headline */}
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary-900 xl:text-5xl">
                Discover Your Next{" "}
                <span className="text-primary-600">Destination</span>
              </h1>
              <p className="mt-3 text-base leading-relaxed text-secondary-600 lg:text-lg">
                Browse {ALL_DESTINATIONS.length} handpicked destinations worldwide and let AI craft
                your perfect itinerary in seconds.
              </p>
            </div>

            {/* Hero stats */}
            <div className="flex shrink-0 gap-6">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-secondary-900">{ALL_DESTINATIONS.length}</p>
                <p className="text-xs font-medium text-secondary-500">Destinations</p>
              </div>
              <div className="w-px bg-secondary-200" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary-600">{aiPickCount}</p>
                <p className="text-xs font-medium text-secondary-500">AI Picks</p>
              </div>
              <div className="w-px bg-secondary-200" />
              <div className="text-center">
                <p className="text-3xl font-extrabold text-rose-500">{trendingCount}</p>
                <p className="text-xs font-medium text-secondary-500">Trending</p>
              </div>
            </div>

          </div>

          {/* ── Search Bar ──────────────────────────────────────── */}
          <div className="mt-8 max-w-2xl">
            <div
              className={`relative flex items-center rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                searchFocused
                  ? "border-primary-400 shadow-lg shadow-primary-100 ring-4 ring-primary-100"
                  : "border-secondary-200 hover:border-secondary-300 hover:shadow-md"
              }`}
            >
              <Search
                size={18}
                className={`absolute left-4 flex-shrink-0 transition-colors duration-200 ${
                  searchFocused ? "text-primary-500" : "text-secondary-400"
                }`}
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search destinations, countries, or travel styles…"
                aria-label="Search destinations"
                className="w-full rounded-2xl bg-transparent py-4 pl-12 pr-12 text-sm text-secondary-900 placeholder:text-secondary-400 outline-none"
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                  className="absolute right-4 rounded-full p-0.5 text-secondary-400 transition-all hover:bg-secondary-100 hover:text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Popular searches — visible when not typing */}
            {!query && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-secondary-400">Popular:</span>
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => handlePopularSearch(term)}
                    className="rounded-full border border-secondary-200 bg-white px-3 py-1 text-xs font-medium text-secondary-600 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FILTERS + GRID
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 xl:px-10">

        {/* ── Filter chips ──────────────────────────────────── */}
        <div className="mb-8 flex items-center gap-3 overflow-x-auto pb-1">
          <div className="mr-1 flex shrink-0 items-center gap-1.5 text-xs font-semibold text-secondary-500">
            <SlidersHorizontal size={14} />
            Filter
          </div>
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                aria-pressed={isActive}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                  isActive
                    ? "border-primary-500 bg-primary-600 text-white shadow-md shadow-primary-500/20"
                    : "border-secondary-200 bg-white text-secondary-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                <Icon size={13} />
                {f.label}
              </button>
            );
          })}
          {(activeFilter !== "all" || query) && (
            <button
              onClick={handleReset}
              className="flex shrink-0 items-center gap-1 rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-xs font-medium text-secondary-500 transition-all hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-200"
            >
              <X size={12} />
              Clear
            </button>
          )}
        </div>

        {/* ── Results count ──────────────────────────────────── */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-secondary-500">
            {filtered.length === 0
              ? "No destinations found"
              : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-secondary-800">{filtered.length}</span>
                  {" "}destination{filtered.length !== 1 ? "s" : ""}
                  {activeFilter !== "all" && (
                    <> in <span className="font-semibold text-primary-600">{activeFilter}</span></>
                  )}
                  {query && (
                    <> matching <span className="font-semibold text-primary-600">"{query}"</span></>
                  )}
                </>
              )
            }
          </p>
          {filtered.length > 0 && (
            <span className="text-xs text-secondary-400">
              {filtered.filter(d => d.aiRecommended).length} AI-recommended
            </span>
          )}
        </div>

        {/* ── Cards grid / Empty state ────────────────────────── */}
        {filtered.length === 0 ? (
          <EmptyState query={query} activeFilter={activeFilter} onReset={handleReset} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filtered.map((destination, i) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={i}
                onExplore={handleExplore}
              />
            ))}
          </div>
        )}

      </section>

      {/* ══════════════════════════════════════════════════════
          BOTTOM BANNER CTA
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-sky-500 p-10 shadow-2xl shadow-primary-500/20 xl:p-12">

          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-64 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                <Sparkles size={12} />
                AI-Powered Planning
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white xl:text-3xl">
                Ready to start your journey?
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 lg:text-base">
                Tell our AI where you want to go and it will build a complete day-by-day itinerary, 
                budget estimates, and local recommendations — in seconds.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/planner")}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-primary-700 shadow-lg transition-all duration-200 hover:bg-primary-50 hover:shadow-xl hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Sparkles size={16} className="text-primary-600" />
                Start Planning for Free
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Destination;
