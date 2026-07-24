import Button from "../common/Button";
import usePlanner from "../../hooks/usePlanner";

function NavigationButtons() {
  const { step, nextStep, previousStep } = usePlanner();

  return (
    <div className="mt-10 flex justify-between">

      {step > 1 ? (
        <Button
          variant="outline"
          onClick={previousStep}
        >
          Previous
        </Button>
      ) : (
        <div />
      )}

      {step < 8 && (
        <Button onClick={nextStep}>
          Next
        </Button>
      )}

      {step === 8 && (
        <Button>
          Generate Trip
        </Button>
      )}

    </div>
  );
}

export default NavigationButtons;