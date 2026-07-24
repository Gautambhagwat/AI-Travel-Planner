import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function EmptyItinerary() {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-white p-10 text-center shadow">

      <h2 className="text-3xl font-bold">

        No itinerary found

      </h2>

      <p className="mt-3 text-gray-500">

        Generate a trip first.

      </p>

      <div className="mt-8">

        <Button onClick={() => navigate("/planner")}>

          Plan Trip

        </Button>

      </div>

    </div>
  );
}

export default EmptyItinerary;