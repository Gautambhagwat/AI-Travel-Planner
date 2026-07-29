const wait = (milliseconds = 650) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const activityOptions = {
  Adventure: ["Morning guided adventure", "Outdoor activity", "Sunset viewpoint"],
  Nature: ["Nature trail", "Scenic local park", "Golden-hour walk"],
  Food: ["Local breakfast stop", "Regional lunch experience", "Dinner at a local favourite"],
  Nightlife: ["Evening market visit", "Live music venue", "Night-time city walk"],
  Shopping: ["Local artisan market", "Shopping district", "Souvenir stop"],
  History: ["Heritage landmark", "Local museum", "Historic neighbourhood walk"],
};

const getDuration = (startDate, endDate) => {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  return Math.round((end - start) / 86_400_000) + 1;
};

const getBudgetLimit = (budget) => {
  const values = budget.match(/\d[\d,]*/g)?.map((value) => Number(value.replaceAll(",", ""))) || [];

  return values.at(-1) || 25_000;
};

const getHotelName = (accommodation, destination) => {
  const labels = {
    Hotel: "City Hotel",
    Resort: "Seaside Resort",
    Hostel: "Explorer Hostel",
    Apartment: "Local Apartment Stay",
  };

  return `${destination} ${labels[accommodation] || "Stay"}`;
};

export async function generateTrip(tripData) {
  await wait();

  const duration = getDuration(tripData.startDate, tripData.endDate);
  const interests = tripData.interests.length ? tripData.interests : ["Nature"];
  const budgetLimit = getBudgetLimit(tripData.budget);
  const startDate = new Date(`${tripData.startDate}T00:00:00`);

  const days = Array.from({ length: duration }, (_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);
    const interest = interests[index % interests.length];
    const activities = activityOptions[interest] || activityOptions.Nature;

    return {
      day: index + 1,
      date: currentDate.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      title: index === 0 ? `Welcome to ${tripData.destination}` : `${interest} in ${tripData.destination}`,
      activities: activities.map((activity) => `${activity} in ${tripData.destination}`),
    };
  });

  return {
    id: crypto.randomUUID(),
    tripTitle: `${tripData.destination} ${tripData.interests[0] || "Travel"} Escape`,
    destination: tripData.destination,
    startDate: tripData.startDate,
    endDate: tripData.endDate,
    totalCost: Math.round(budgetLimit * 0.82),
    budgetLimit,
    travelers: tripData.travelers,
    transport: tripData.transport,
    accommodation: tripData.accommodation,
    hotelName: getHotelName(tripData.accommodation, tripData.destination),
    days,
  };
}
