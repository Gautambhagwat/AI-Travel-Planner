import usePlanner from "../../hooks/usePlanner";

function StepDestination() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Where do you want to go?
      </h2>

      <input
        value={tripData.destination}
        onChange={(e) =>
          updateTripData({
            destination: e.target.value,
          })
        }
        placeholder="Enter destination"
        className="w-full rounded-lg border p-4"
      />
    </>
  );
}

export default StepDestination;