import { createContext, useState } from "react";

export const PlannerContext = createContext();

function PlannerProvider({ children }) {
  const [step, setStep] = useState(1);

  const [tripData, setTripData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: 1,
    interests: [],
    transport: "",
    accommodation: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);

  const previousStep = () => setStep((prev) => prev - 1);

  const updateTripData = (data) => {
    setTripData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <PlannerContext.Provider
      value={{
        step,
        tripData,
        nextStep,
        previousStep,
        updateTripData,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
}

export default PlannerProvider;