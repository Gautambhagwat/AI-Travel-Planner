import { useContext } from "react";
import { PlannerContext } from "../context/PlannerContext";

export default function usePlanner() {
  return useContext(PlannerContext);
}