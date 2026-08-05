import api from "./api";

const getDuration = (startDate, endDate) => {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  return Math.max(1, Math.round((end - start) / 86_400_000) + 1);
};

const getBudgetLimit = (budget) => {
  if (typeof budget === "number") return budget;
  const values = budget?.match(/\d[\d,]*/g)?.map((value) => Number(value.replaceAll(",", ""))) || [];
  return values.at(-1) || 25000;
};

export async function generateAndSaveTrip(tripData, userId) {
  const duration = getDuration(tripData.startDate, tripData.endDate);
  const budgetLimit = getBudgetLimit(tripData.budget);

  // 1. Request AI recommendation from backend AI Service
  const aiRequest = {
    destination: tripData.destination || "Destination",
    days: duration,
    budget: Number(budgetLimit),
    interests: tripData.interests?.length ? tripData.interests : ["Sightseeing"],
  };



  let aiRecommendation = "";

  try {
    const aiResponse = await api.post("/api/ai/recommend", aiRequest);



    aiRecommendation =
        aiResponse.data?.aiRecommendation || "";
  } catch (error) {
    console.warn("AI Service call warning, fallback to default itinerary:", error);
    aiRecommendation = `Recommended ${duration}-day itinerary for ${tripData.destination} with a budget of ₹${budgetLimit}. Explore top local attractions, cultural landmarks, and dining spots.`;
  }

  // 2. Persist Trip directly to Trip Service DB
  const tripPayload = {
    userId: Number(userId),
    destinationId: null,
    tripName: `${tripData.destination} Trip`,
    startDate: tripData.startDate,
    endDate: tripData.endDate,
    numberOfPeople: Number(tripData.travelers) || 1,
    totalPrice: Number(budgetLimit),
    status: "PLANNED",
    aiRecommendation: aiRecommendation,
  };

  const response = await api.post("/trips", tripPayload);
  return response.data;
}

export async function generateTrip(tripData) {
  const duration = getDuration(tripData.startDate, tripData.endDate);
  const budgetLimit = getBudgetLimit(tripData.budget);

  return {
    id: crypto.randomUUID(),
    tripTitle: `${tripData.destination} Trip`,
    destination: tripData.destination,
    startDate: tripData.startDate,
    endDate: tripData.endDate,
    totalCost: budgetLimit,
    travelers: tripData.travelers,
  };
}
