import usePlanner from "../../hooks/usePlanner";

function StepTravelers() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Number of Travelers
      </h2>

      <input
        type="number"
        min="1"
        value={tripData.travelers}
        onChange={(e) =>
          updateTripData({
            travelers: Number(e.target.value),
          })
        }
        className="w-full rounded-lg border p-3"
      />
    </>
  );
}

export default StepTravelers;