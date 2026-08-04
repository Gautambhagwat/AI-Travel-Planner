import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";

function DayCard({ day }) {
  return (
    <section className="relative rounded-2xl border border-secondary-200 bg-white p-5 shadow-card sm:rounded-3xl sm:p-8">

      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-primary-700">
            <CalendarDays size={16} />

            <span className="text-sm font-semibold">
              Day {day.day}
            </span>
          </div>

          <h2 className="mt-4 break-words text-2xl font-bold text-secondary-900 sm:text-3xl">
            {day.title}
          </h2>

          <p className="mt-2 text-secondary-500">
            {day.date}
          </p>

        </div>

        <div className="rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4">

          <div className="flex items-center gap-2 text-primary-700">
            <Sparkles size={18} />

            <span className="font-semibold">
              AI Optimized
            </span>
          </div>

          <p className="mt-2 text-sm text-secondary-600">
            Activities are arranged for efficient travel and a balanced day.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {day.activities.map((activity, index) => (
          <div
            key={activity}
            className="flex gap-3 sm:gap-5"
          >

            <div className="flex flex-col items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                <Clock3 size={18} />
              </div>

              {index !== day.activities.length - 1 && (
                <div className="mt-2 h-full w-px bg-secondary-200" />
              )}

            </div>

            <div className="min-w-0 flex-1 rounded-2xl border border-secondary-200 p-4 transition hover:border-primary-200 hover:bg-secondary-50 sm:p-5">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="break-words text-lg font-semibold text-secondary-900">
                    {activity}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-secondary-600">
                    Recommended by AI based on your travel preferences,
                    itinerary flow and nearby attractions.
                  </p>

                </div>

                <CheckCircle2
                  size={20}
                  className="text-primary-600"
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DayCard;
