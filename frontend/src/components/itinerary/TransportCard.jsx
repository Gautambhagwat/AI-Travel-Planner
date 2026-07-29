import {
  Plane,
  Train,
  Bus,
  Car,
  Route,
  Sparkles,
} from "lucide-react";

const icons = {
  Flight: Plane,
  Train: Train,
  Bus: Bus,
  Car: Car,
};

function TransportCard({ transport }) {
  const Icon = icons[transport] || Route;

  return (
    <div className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-500">
            Preferred Transport
          </p>

          <h2 className="mt-2 text-3xl font-bold text-secondary-900">
            {transport}
          </h2>

        </div>

        <div className="rounded-2xl bg-primary-50 p-4 text-primary-700">
          <Icon size={30} />
        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-secondary-50 p-5">

          <h3 className="font-semibold text-secondary-900">
            Travel Preference
          </h3>

          <p className="mt-2 text-sm leading-6 text-secondary-600">
            Your itinerary is optimized around travelling primarily
            by {transport.toLowerCase()}.
          </p>

        </div>

        <div className="rounded-2xl bg-primary-50 p-5">

          <div className="mb-3 flex items-center gap-2 text-primary-700">
            <Sparkles size={18} />

            <span className="font-semibold">
              AI Insight
            </span>
          </div>

          <p className="text-sm leading-6 text-secondary-600">
            Routes and activity timings are arranged to reduce travel
            time and make your journey more comfortable.
          </p>

        </div>

      </div>

    </div>
  );
}

export default TransportCard;