import usePlanner from "../../hooks/usePlanner";

const interests = [
  "Adventure",
  "Nature",
  "Food",
  "Nightlife",
  "Shopping",
  "History",
];

function StepInterests() {
  const { tripData, updateTripData } = usePlanner();

  const toggleInterest = (interest) => {
    if (tripData.interests.includes(interest)) {
      updateTripData({
        interests: tripData.interests.filter(
          (item) => item !== interest
        ),
      });
    } else {
      updateTripData({
        interests: [...tripData.interests, interest],
      });
    }
  };

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Select Interests
      </h2>

      <div className="flex flex-wrap gap-4">

        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`rounded-full border px-5 py-2 ${
              tripData.interests.includes(interest)
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            {interest}
          </button>
        ))}

      </div>
    </>
  );
}

export default StepInterests;