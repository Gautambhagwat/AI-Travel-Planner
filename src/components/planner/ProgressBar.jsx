import usePlanner from "../../hooks/usePlanner";

const TOTAL_STEPS = 8;

function ProgressBar() {
  const { step } = usePlanner();

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between">
        <span>Step {step} of {TOTAL_STEPS}</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;