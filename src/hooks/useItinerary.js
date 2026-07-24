import { useContext } from "react";
import { ItineraryContext } from "../context/ItineraryContext";

export default function useItinerary() {
  return useContext(ItineraryContext);
}