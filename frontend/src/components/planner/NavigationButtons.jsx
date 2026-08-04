import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import usePlanner from "../../hooks/usePlanner";
import useItinerary from "../../hooks/useItinerary";

import { generateTrip } from "../../services/plannerService";
import { createTrip } from "../../services/tripService";

function NavigationButtons() {
  const [isGenerating, setIsGenerating] = useState(false);

  const navigate = useNavigate();

  const { setItinerary } = useItinerary();

  const {
    step,
    tripData,
    nextStep,
    previousStep,
    validateStep,
  } = usePlanner();

  const handleGenerate = async () => {

    if (!validateStep(8)) return;


    setIsGenerating(true);


    try {

      // Generate AI itinerary
      const itinerary = await generateTrip(tripData);


      setItinerary(itinerary);



      // Get logged-in user
      const user = JSON.parse(
          localStorage.getItem("user")
      );



      // Save trip into database
      const tripPayload = {

        userId: user.id,

        destinationId: null,

        tripName:
            `${tripData.destination} Trip`,

        startDate:
        tripData.startDate,

        endDate:
            tripData.endDate,

        numberOfPeople:
        tripData.travelers,

        totalPrice:
            Number(tripData.budget),

        status:
            "PLANNED"

      };



      const savedTrip = await createTrip(tripPayload);


      console.log(
          "Trip saved:",
          savedTrip
      );

      setItinerary({
        ...itinerary,
        tripId: savedTrip.id
      });


      navigate(
          `/trip-details/${savedTrip.id}`
      );


    }  catch(error){

      console.error(
          "Trip generation failed:",
          error
      );

    } finally {

      setIsGenerating(false);

    }

  };

  return (
    <div className="mt-12 flex flex-col-reverse gap-4 border-t border-secondary-200 pt-8 sm:flex-row sm:items-center sm:justify-between">

      <div>
        {step > 1 && (
          <Button
            variant="outline"
            onClick={previousStep}
          >
            <ArrowLeft size={18} />

            Previous
          </Button>
        )}
      </div>

      <div>
        {step < 8 && (
          <Button onClick={nextStep}>
            Next

            <ArrowRight size={18} />
          </Button>
        )}

        {step === 8 && (
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            <Sparkles size={18} />

            {isGenerating
              ? "Generating AI Itinerary..."
              : "Generate AI Trip"}
          </Button>
        )}
      </div>

    </div>
  );
}

export default NavigationButtons;