import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PlannerLayout from "../../components/planner/PlannerLayout";
import ProgressBar from "../../components/planner/ProgressBar";
import NavigationButtons from "../../components/planner/NavigationButtons";

import StepDestination from "../../components/planner/StepDestination";
import StepDates from "../../components/planner/StepDates";
import StepBudget from "../../components/planner/StepBudget";
import StepTravelers from "../../components/planner/StepTravelers";
import StepInterests from "../../components/planner/StepInterests";
import StepTransport from "../../components/planner/StepTransport";
import StepAccommodation from "../../components/planner/StepAccommodation";
import StepReview from "../../components/planner/StepReview";

import usePlanner from "../../hooks/usePlanner";

function Planner() {
  const { step } = usePlanner();

  return (
    <DashboardLayout>
      <PlannerLayout>

        <ProgressBar />

        {step === 1 && <StepDestination />}
        {step === 2 && <StepDates />}
        {step === 3 && <StepBudget />}
        {step === 4 && <StepTravelers />}
        {step === 5 && <StepInterests />}
        {step === 6 && <StepTransport />}
        {step === 7 && <StepAccommodation />}
        {step === 8 && <StepReview />}

        <NavigationButtons />

      </PlannerLayout>
    </DashboardLayout>
  );
}

export default Planner;