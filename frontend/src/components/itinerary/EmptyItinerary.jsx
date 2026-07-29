import { Compass, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

function EmptyItinerary() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-secondary-200 bg-white p-10 text-center shadow-card">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Compass size={44} />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-secondary-900">
          Your next adventure starts here
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-secondary-500">
          You don't have an itinerary yet. Tell us where you'd like to go,
          choose your travel preferences, and let AI build a personalized trip
          just for you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={() => navigate("/planner")}>
            <Sparkles size={18} />
            Plan with AI
          </Button>
        </div>

        <div className="mt-12 rounded-2xl bg-primary-50 p-6">
          <h3 className="text-lg font-semibold text-secondary-900">
            What you'll get
          </h3>

          <div className="mt-5 grid gap-4 text-left md:grid-cols-3">

            <div className="rounded-xl bg-white p-4">
              <h4 className="font-semibold text-secondary-900">
                Personalized
              </h4>

              <p className="mt-2 text-sm text-secondary-500">
                Trips tailored to your interests, travel style and budget.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <h4 className="font-semibold text-secondary-900">
                Day-wise Plan
              </h4>

              <p className="mt-2 text-sm text-secondary-500">
                A complete itinerary with activities organized day by day.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <h4 className="font-semibold text-secondary-900">
                Smart Suggestions
              </h4>

              <p className="mt-2 text-sm text-secondary-500">
                AI recommendations for hotels, transport and attractions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default EmptyItinerary;