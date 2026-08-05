import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Globe, Search } from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";
import { DESTINATION_META } from "../../utils/destinationMeta";
import usePlanner from "../../hooks/usePlanner";

const POPULAR_DESTINATIONS = [
  "Goa", "Manali", "Jaipur", "Kerala", "Bali", "Paris", "Kyoto", "Dubai",
];

function DestinationPreviewCard({ name }) {
  if (!name) return null;
  const meta = DESTINATION_META[name.toLowerCase()];

  if (meta) {
    return (
      <div className="overflow-hidden rounded-2xl border border-primary-200/80 shadow-md animate-[scaleIn_0.3s_ease-out]">
        <div className="relative h-44 overflow-hidden">
          <img
            src={meta.image}
            alt={`${name}, ${meta.country}`}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Top badge */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-primary-600/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-xs">
            <MapPin size={11} aria-hidden="true" />
            Selected
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xl font-extrabold text-white leading-tight">{name}</p>
                <div className="mt-1 flex items-center gap-1.5 text-white/90">
                  <Globe size={12} aria-hidden="true" />
                  <span className="text-xs font-semibold">{meta.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-b from-primary-50/60 to-white px-4 py-3.5 border-t border-primary-100">
          <p className="text-xs leading-relaxed text-secondary-600">{meta.desc}</p>
        </div>
      </div>
    );
  }

  /* Fallback for custom/unknown destinations */
  return (
    <div className="flex items-center gap-3.5 rounded-2xl border border-primary-200 bg-gradient-to-r from-primary-50 to-sky-50 p-4 shadow-xs animate-[scaleIn_0.3s_ease-out]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700 shadow-xs">
        <MapPin size={20} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-primary-500">
          Custom Destination
        </p>
        <p className="mt-0.5 text-base font-bold text-secondary-900 truncate">{name}</p>
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold shadow-xs">
        ✓
      </div>
    </div>
  );
}

function EmptyDestinationHint() {
  return (
    <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-secondary-200 bg-secondary-50/50 py-8 px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-400">
        <Search size={22} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-bold text-secondary-700">No destination selected yet</p>
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
            <span className="inline-block h-1.5 w-4 rounded-full bg-primary-500" aria-hidden="true" />
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