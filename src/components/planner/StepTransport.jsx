import usePlanner from "../../hooks/usePlanner";

function StepTransport() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Preferred Transport
      </h2>

      <select
        value={tripData.transport}
        onChange={(e) =>
          updateTripData({
            transport: e.target.value,
          })
        }
        className="w-full rounded-lg border p-3"
      >
        <option value="">Select</option>
        <option>Flight</option>
        <option>Train</option>
        <option>Bus</option>
        <option>Car</option>
      </select>
    </>
  );
}

export default StepTransport;