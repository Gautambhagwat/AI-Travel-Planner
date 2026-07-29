import {
  Plane,
  Train,
  Bus,
  Car,
  Check,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

const transportOptions = [
  {
    value: "Flight",
    icon: Plane,
    description: "Fastest option for long-distance travel and international trips.",
  },
  {
    value: "Train",
    icon: Train,
    description: "Comfortable journeys with scenic routes and city-center access.",
  },
  {
    value: "Bus",
    icon: Bus,
    description: "Budget-friendly travel with extensive route coverage.",
  },
  {
    value: "Car",
    icon: Car,
    description: "Road trips with complete flexibility and freedom.",
  },
];

function StepTransport() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <div className="space-y-10">
      <SectionHeader
        title="How would you like to travel?"
        subtitle="Your preferred transport helps us optimize routes, travel times and recommendations."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {transportOptions.map((option) => {
          const Icon = option.icon;

          const selected =
            tripData.transport === option.value;

          return (
            <Card
              key={option.value}
              hover
              onClick={() =>
                updateTripData({
                  transport: option.value,
                })
              }
              className={`group cursor-pointer border-2 transition-all duration-300 ${
                selected
                  ? "border-primary-500 bg-primary-50 shadow-lg"
                  : "border-secondary-200 hover:border-primary-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-2xl p-4 transition ${
                    selected
                      ? "bg-primary-100 text-primary-700"
                      : "bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600"
                  }`}
                >
                  <Icon size={26} />
                </div>

                {selected && (
                  <div className="rounded-full bg-primary-600 p-1 text-white">
                    <Check size={14} />
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-secondary-900">
                  {option.value}
                </h3>

                <p className="mt-3 leading-7 text-secondary-600">
                  {option.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="border-primary-200 bg-gradient-to-r from-primary-50 to-cyan-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-secondary-500">
              Preferred Transport
            </p>

            <h3 className="mt-2 text-3xl font-bold text-secondary-900">
              {tripData.transport || "Not selected"}
            </h3>

            <p className="mt-3 text-secondary-600">
              AI will prioritize routes, transfers and travel plans that best
              match this mode of transportation.
            </p>
          </div>

          {tripData.transport && (
            <div className="hidden rounded-2xl bg-primary-600 p-5 text-white md:flex md:items-center md:justify-center">
              {(() => {
                const selected = transportOptions.find(
                  (item) => item.value === tripData.transport
                );

                if (!selected) return null;

                const SelectedIcon = selected.icon;

                return <SelectedIcon size={32} />;
              })()}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default StepTransport;