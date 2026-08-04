import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import usePlanner from "../../hooks/usePlanner";
import useItinerary from "../../hooks/useItinerary";

import { generateTrip } from "../../services/plannerService";

const LAST_FORM_STEP = 8;
const REVIEW_STEP = 9;

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
    if (!validateStep(LAST_FORM_STEP)) return;

    setIsGenerating(true);

    try {
      const itinerary = await generateTrip(tripData);

      setItinerary(itinerary);

      navigate("/trip-details");
    } finally {
      setIsGenerating(false);
    }
  };

  const isReviewStep = step === REVIEW_STEP;

  return (
    <div className="mt-10 flex flex-col-reverse gap-3 border-t border-secondary-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

      {/* Back button */}
      <div>
        {step > 1 && (
          <button
            type="button"
            onClick={previousStep}
            aria-label="Go to previous step"
            className="inline-flex items-center gap-2 rounded-xl border border-secondary-200 bg-white px-5 py-2.5 text-sm font-semibold text-secondary-700 shadow-sm transition-all duration-200
              hover:border-secondary-300 hover:bg-secondary-50 hover:shadow-md hover:-translate-y-0.5
              active:translate-y-0 active:shadow-sm
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Previous
          </button>
        )}
      </div>

      {/* Forward / Generate button */}
      <div>
        {!isReviewStep && (
          <button
            type="button"
            onClick={nextStep}
            aria-label="Go to next step"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200
              hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5
              active:translate-y-0 active:shadow-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            Continue
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        )}

        {isReviewStep && (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            aria-busy={isGenerating}
            aria-label={isGenerating ? "Generating your AI itinerary, please wait" : "Generate AI itinerary"}
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-sky-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200
              hover:from-primary-700 hover:to-sky-700 hover:shadow-xl hover:-translate-y-0.5
              active:translate-y-0 active:shadow-lg
              disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-md disabled:translate-y-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {isGenerating ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Generating Itinerary…
              </>
            ) : (
              <>
                <Sparkles size={16} aria-hidden="true" />
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