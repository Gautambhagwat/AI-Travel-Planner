import {
  BedDouble,
  Building2,
  Sparkles,
  MapPin,
} from "lucide-react";

function HotelCard({ hotelName, accommodation }) {
  return (
    <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
            AI Recommended Stay
          </p>

          <h2 className="mt-2 text-2xl font-bold text-secondary-900">
            Not Added
          </h2>
        </div>

        <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">
          <BedDouble size={28} />
        </div>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 rounded-2xl bg-secondary-50 p-4">
          <Building2
            size={20}
            className="text-primary-600"
          />

          <div>
            <p className="text-sm text-secondary-500">
              Stay Type
            </p>

            <p className="font-semibold text-secondary-900">
              Future Recommendation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-secondary-50 p-4">
          <MapPin
            size={20}
            className="text-primary-600"
          />

          <div>
            <p className="text-sm text-secondary-500">
              Location
            </p>

            <p className="font-semibold text-secondary-900">
              Centrally located
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-primary-50 p-4">

          <div className="mb-2 flex items-center gap-2 text-primary-700">
            <Sparkles size={18} />

            <span className="font-semibold">
              AI Recommendation
            </span>
          </div>

          <p className="text-sm leading-6 text-secondary-600">
            This stay matches your accommodation preference and
            is selected to minimize travel time while keeping you
            close to major attractions.
          </p>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;