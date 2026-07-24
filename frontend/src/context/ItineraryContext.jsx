import { createContext, useState } from "react";

export const ItineraryContext = createContext();

function ItineraryProvider({ children }) {
  const [itinerary, setItinerary] = useState(null);

  return (
    <ItineraryContext.Provider
      value={{
        itinerary,
        setItinerary,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
}

export default ItineraryProvider;