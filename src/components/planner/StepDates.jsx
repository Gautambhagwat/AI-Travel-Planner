import usePlanner from "../../hooks/usePlanner";

function StepDates() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Select Travel Dates
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Start Date
          </label>

          <input
            type="date"
            value={tripData.startDate}
            onChange={(e) =>
              updateTripData({
                startDate: e.target.value,
              })
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            End Date
          </label>

          <input
            type="date"
            value={tripData.endDate}
            onChange={(e) =>
              updateTripData({
                endDate: e.target.value,
              })
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

      </div>
    </>
  );
}

export default StepDates;