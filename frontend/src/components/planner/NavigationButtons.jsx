import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import usePlanner from "../../hooks/usePlanner";
import { generateAndSaveTrip } from "../../services/plannerService";

const LAST_FORM_STEP = 8;
const REVIEW_STEP = 9;

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
    if (!validateStep(LAST_FORM_STEP)) {
      toast.error("Please complete all required fields before generating.");
      return;
    }

    setIsGenerating(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?.id) {
        throw new Error("User session expired. Please log in again.");
      }

      const savedTrip = await generateAndSaveTrip(
        tripData,
        user.id
      );

      toast.success("AI Trip generated successfully!");

      navigate(`/trip-details/${savedTrip.id}`);
    } catch (error) {
      console.error("Trip generation failed:", error);

      toast.error(
        error.message ||
          "Failed to generate AI trip. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const isReviewStep = step === REVIEW_STEP;

  return (
    <div className="mt-10 flex flex-col-reverse gap-3 border-t border-secondary-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {step > 1 && (
          <button
            type="button"
            onClick={previousStep}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-xl border border-secondary-200 bg-white px-5 py-2.5 text-sm font-semibold text-secondary-700 shadow-sm transition-all duration-200 hover:border-secondary-300 hover:bg-secondary-50 hover:shadow-md hover:-translate-y-0.5 disabled:opacity-60"
          >
            <ArrowLeft size={16} />
            Previous
          </button>
        )}
      </div>

      <div>
        {!isReviewStep && (
          <button
            type="button"
            onClick={nextStep}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60"
          >
            Continue
            <ArrowRight size={16} />
          </button>
        )}

        {isReviewStep && (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-sky-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:from-primary-700 hover:to-sky-700 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60"
          >
            {isGenerating ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Generating AI Itinerary...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                Generate AI Trip
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationButtons;