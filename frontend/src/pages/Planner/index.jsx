import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PlannerLayout from "../../components/planner/PlannerLayout";
import ProgressBar from "../../components/planner/ProgressBar";
import NavigationButtons from "../../components/planner/NavigationButtons";
import TripSummarySidebar from "../../components/planner/TripSummarySidebar";

import StepDestination from "../../components/planner/StepDestination";
import StepDates from "../../components/planner/StepDates";
import StepBudget from "../../components/planner/StepBudget";
import StepTravelers from "../../components/planner/StepTravelers";
import StepTravelStyle from "../../components/planner/StepTravelStyle";
import StepInterests from "../../components/planner/StepInterests";
import StepTransport from "../../components/planner/StepTransport";
import StepAccommodation from "../../components/planner/StepAccommodation";
import StepReview from "../../components/planner/StepReview";

import usePlanner from "../../hooks/usePlanner";

function Planner() {
  const { step, validationMessage } = usePlanner();

  return (
    <DashboardLayout>
      <PlannerLayout
        sidebar={<TripSummarySidebar />}
      >
        <ProgressBar />

        {validationMessage && (
          <p
            className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-700"
            role="alert"
          >
            {validationMessage}
          </p>
        )}

        {step === 1 && <StepDestination />}
        {step === 2 && <StepDates />}
        {step === 3 && <StepBudget />}
        {step === 4 && <StepTravelers />}
        {step === 5 && <StepTravelStyle />}
        {step === 6 && <StepInterests />}
        {step === 7 && <StepTransport />}
        {step === 8 && <StepAccommodation />}
        {step === 9 && <StepReview />}

        <NavigationButtons />
      </PlannerLayout>
    </DashboardLayout>
  );
}

export default Planner;