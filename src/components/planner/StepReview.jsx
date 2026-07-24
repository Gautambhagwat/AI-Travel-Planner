import usePlanner from "../../hooks/usePlanner";

function StepReview() {
  const { tripData } = usePlanner();

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">
        Review Your Trip
      </h2>

      <div className="space-y-4 rounded-xl border p-6">

        <p><strong>Destination:</strong> {tripData.destination}</p>

        <p><strong>Dates:</strong> {tripData.startDate} - {tripData.endDate}</p>

        <p><strong>Budget:</strong> {tripData.budget}</p>

        <p><strong>Travelers:</strong> {tripData.travelers}</p>

        <p><strong>Interests:</strong> {tripData.interests.join(", ")}</p>

        <p><strong>Transport:</strong> {tripData.transport}</p>

        <p><strong>Accommodation:</strong> {tripData.accommodation}</p>

      </div>
    </>
  );
}

export default StepReview;