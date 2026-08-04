import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Globe, Search } from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

/* Destination → image + meta mapping for the preview card */
const DESTINATION_META = {
  goa:       { image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", country: "India", desc: "Sun-drenched beaches, Portuguese heritage & vibrant nightlife." },
  manali:    { image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", country: "India", desc: "Snow-capped peaks, adventure sports & pine-scented valleys." },
  jaipur:    { image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", country: "India", desc: "The Pink City — majestic forts, royal palaces & vibrant bazaars." },
  kerala:    { image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800", country: "India", desc: "Lush backwaters, spice gardens & tranquil Ayurvedic retreats." },
  bali:      { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800", country: "Indonesia", desc: "Terraced rice fields, sacred temples & world-class surf." },
  paris:     { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", country: "France", desc: "The City of Light — art, cuisine, fashion & the Eiffel Tower." },
  kyoto:     { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", country: "Japan", desc: "Ancient temples, bamboo forests & timeless Japanese culture." },
  dubai:     { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", country: "UAE", desc: "Futuristic skylines, luxury shopping & desert adventures." },
  tokyo:     { image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", country: "Japan", desc: "Neon-lit modernity blended with deep-rooted tradition." },
  maldives:  { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800", country: "Maldives", desc: "Crystal-clear lagoons, overwater villas & pristine coral reefs." },
  santorini: { image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800", country: "Greece", desc: "Iconic whitewashed villages, volcanic beaches & breathtaking sunsets." },
  rajasthan: { image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", country: "India", desc: "Desert dunes, ancient forts & the colorful spirit of Rajputana." },
};

const POPULAR_DESTINATIONS = [
  "Goa", "Manali", "Jaipur", "Kerala", "Bali", "Paris", "Kyoto", "Dubai",
];

function DestinationPreviewCard({ name }) {
  if (!name) return null;
  const meta = DESTINATION_META[name.toLowerCase()];

  if (meta) {
    return (
      <div className="overflow-hidden rounded-2xl border border-primary-100 shadow-lg animate-[scaleIn_0.3s_ease-out]">
        <div className="relative h-40 overflow-hidden">
          <img
            src={meta.image}
            alt={`${name}, ${meta.country}`}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Top badge */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary-600/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white shadow">
            <MapPin size={10} />
            Selected
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-lg font-bold text-white leading-tight">{name}</p>
                <div className="mt-0.5 flex items-center gap-1 text-white/80">
                  <Globe size={11} />
                  <span className="text-[11px] font-medium">{meta.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-b from-primary-50 to-white px-4 py-3">
          <p className="text-xs leading-relaxed text-secondary-600">{meta.desc}</p>
        </div>
      </div>
    );
  }

  /* Fallback for custom/unknown destinations */
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-sky-50 p-4 shadow-sm animate-[scaleIn_0.3s_ease-out]">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700 shadow-sm">
        <MapPin size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wide text-primary-500">
          Custom Destination
        </p>
        <p className="mt-0.5 text-base font-bold text-secondary-900 truncate">{name}</p>
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold shadow">
        ✓
      </div>
    </div>
  );
}

function EmptyDestinationHint() {
  return (
    <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-secondary-200 bg-secondary-50/50 py-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-400">
        <Search size={22} />
      </div>
      <div>
        <p className="text-sm font-semibold text-secondary-600">No destination selected yet</p>
        <p className="mt-1 text-xs text-secondary-400">Type a city above or pick from popular destinations</p>
      </div>
    </div>
  );
}

function StepDestination() {
  const location = useLocation();
  const { tripData, updateTripData } = usePlanner();

  /* Pre-fill from navigation state (passed by Destination page) */
  useEffect(() => {
    const navDest = location.state?.destination;
    if (navDest && !tripData.destination) {
      updateTripData({ destination: navDest });
    }
    // Only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Where would you like to travel?"
        subtitle="Choose a destination to start building your personalized AI itinerary."
      />

      <Card>
        <Input
          label="Destination"
          placeholder="Search city, region or country…"
          value={tripData.destination}
          leftIcon={<MapPin size={17} aria-hidden="true" />}
          helperText="Type any destination worldwide, or choose from the popular picks below."
          aria-label="Enter your travel destination"
          onChange={(e) =>
            updateTripData({ destination: e.target.value })
          }
        />

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-secondary-700 flex items-center gap-2">
            <span className="inline-block h-1 w-4 rounded-full bg-primary-400" aria-hidden="true" />
            Popular Destinations
          </p>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Popular destinations">
            {POPULAR_DESTINATIONS.map((destination) => (
              <Chip
                key={destination}
                selected={tripData.destination === destination}
                variant={
                  tripData.destination === destination
                    ? "primary"
                    : "outline"
                }
                onClick={() =>
                  updateTripData({ destination })
                }
                aria-pressed={tripData.destination === destination}
              >
                {destination}
              </Chip>
            ))}
          </div>
        </div>

        {/* Premium destination preview card */}
        <div className="mt-6">
          {tripData.destination
            ? <DestinationPreviewCard name={tripData.destination} />
            : <EmptyDestinationHint />
          }
        </div>
      </Card>
    </div>
  );
}

export default StepDestination;