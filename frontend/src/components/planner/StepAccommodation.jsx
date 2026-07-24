import usePlanner from "../../hooks/usePlanner";

function StepAccommodation() {
  const { tripData, updateTripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Accommodation Preference
      </h2>

      <select
        value={tripData.accommodation}
        onChange={(e) =>
          updateTripData({
            accommodation: e.target.value,
          })
        }
        className="w-full rounded-lg border p-3"
      >
        <option value="">Select</option>
        <option>Hotel</option>
        <option>Resort</option>
        <option>Hostel</option>
        <option>Apartment</option>
      </select>
    </>
  );
}

export default StepAccommodation;