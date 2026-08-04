import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../common/Button";
import usePlanner from "../../hooks/usePlanner";
import { generateAndSaveTrip } from "../../services/plannerService";

function NavigationButtons() {
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const {
    step,
    tripData,
    nextStep,
    previousStep,
    validateStep,
  } = usePlanner();

  const handleGenerate = async () => {
    if (!validateStep(8)) {
      toast.error("Please complete all required fields before generating.");
      return;
    }

    setIsGenerating(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.id) {
        throw new Error("User session expired. Please log in again.");
      }

      // Single pipeline execution: AI Generation -> Trip Service Save -> Database
      const savedTrip = await generateAndSaveTrip(tripData, user.id);
      toast.success("AI Trip generated successfully!");
      navigate(`/trip-details/${savedTrip.id}`);
    } catch (error) {
      console.error("Trip generation failed:", error);
      toast.error(error.message || "Failed to generate AI trip. Please try again.");
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
            disabled={isGenerating}
          >
            <ArrowLeft size={18} />
            Previous
          </Button>
        )}
      </div>

      <div>
        {step < 9 && (
          <Button onClick={nextStep} disabled={isGenerating}>
            Next
            <ArrowRight size={18} />
          </Button>
        )}

        {step === 9 && (
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Generating AI Itinerary...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate AI Trip
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavigationButtons;