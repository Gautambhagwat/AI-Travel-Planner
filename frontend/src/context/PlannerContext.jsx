import { createContext, useState } from "react";

export const PlannerContext = createContext();

function PlannerProvider({ children }) {
  const [step, setStep] = useState(1);
  const [validationMessage, setValidationMessage] = useState("");

  const [tripData, setTripData] = useState({
    destination: "",
    tripType: "multi-day",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: 1,
    travelStyle: "",
    interests: []
  });

  const validateStep = (stepToValidate = step) => {
    let message = "";

    if (stepToValidate === 1 && !tripData.destination.trim()) {
      message = "Choose a destination before continuing.";
    }

    if (stepToValidate === 2) {
      if (!tripData.startDate) {
        message = "Choose a travel date before continuing.";
      } else if (
        tripData.tripType === "multi-day" &&
        !tripData.endDate
      ) {
        message =
          "Choose an end date for your multi-day trip.";
      } else if (
        tripData.tripType === "multi-day" &&
        new Date(tripData.endDate) <=
          new Date(tripData.startDate)
      ) {
        message =
          "A multi-day trip must end after its start date.";
      }
    }

    if (stepToValidate === 3 && !tripData.budget) {
      message =
        "Select a budget range before continuing.";
    }

    if (
      stepToValidate === 4 &&
      (!Number.isInteger(tripData.travelers) ||
        tripData.travelers < 1)
    ) {
      message = "Enter at least one traveler.";
    }

    if (
      stepToValidate === 5 &&
      !tripData.travelStyle
    ) {
      message =
        "Select a travel style before continuing.";
    }

    if (
      stepToValidate === 6 &&
      tripData.interests.length === 0
    ) {
      message =
        "Select at least one interest before continuing.";
    }


    setValidationMessage(message);
    return !message;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 9));
    }
  };

  const previousStep = () => {
    setValidationMessage("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const updateTripData = (data) => {
    setValidationMessage("");

    setTripData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const resetPlanner = () => {
    setStep(1);
    setValidationMessage("");

    setTripData({
      destination: "",
      tripType: "multi-day",
      startDate: "",
      endDate: "",
      budget: "",
      travelers: 1,
      travelStyle: "",
      interests: [],
      transport: "",
      accommodation: "",
    });
  };

  return (
    <PlannerContext.Provider
      value={{
        step,
        tripData,
        nextStep,
        previousStep,
        updateTripData,
        validateStep,
        validationMessage,
        resetPlanner,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
}

export default PlannerProvider;