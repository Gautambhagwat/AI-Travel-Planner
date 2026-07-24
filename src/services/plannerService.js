import api from "../api/axios";

export const generateTrip = async (tripData) => {
  const response = await api.post(
    "/planner/generate",
    tripData
  );

  return response.data;
};