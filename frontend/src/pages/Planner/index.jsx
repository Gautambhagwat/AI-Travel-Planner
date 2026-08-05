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
import StepReview from "../../components/planner/StepReview";

import usePlanner from "../../hooks/usePlanner";

function Planner() {
  const { step, validationMessage } = usePlanner();

  return (
    <DashboardLayout>
      <PlannerLayout
        sidebar={<TripSummarySidebar />}
        validationMessage={validationMessage}
      >
        <ProgressBar />

        <div
          key={step}
          className="animate-[fadeSlideIn_0.3s_ease-out]"
        >
          {step === 1 && <StepDestination />}
          {step === 2 && <StepDates />}
          {step === 3 && <StepBudget />}
          {step === 4 && <StepTravelers />}
          {step === 5 && <StepTravelStyle />}
          {step === 6 && <StepInterests />}
          {step === 7 && <StepReview />}
        </div>

        <NavigationButtons />
      </PlannerLayout>
    </DashboardLayout>
  );
}

export default Planner;