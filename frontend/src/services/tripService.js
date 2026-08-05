import api from "./api";


// ===============================
// BACKEND TRIP APIs
// ===============================

export async function getTripsByUserId(userId) {
  try {
    const response = await api.get(`/trips/user/${userId}`);

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to fetch trips."
    );
  }
}


export async function getAllTrips() {
  try {
    const response = await api.get("/trips");

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to fetch trips."
    );
  }
}


export async function getTripById(id) {
  try {
    const response = await api.get(`/trips/${id}`);

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to fetch trip."
    );
  }
}


export async function createTrip(data) {
  try {
    const response = await api.post("/trips", data);

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to create trip."
    );
  }
}


export async function updateTrip(id, data) {
  try {
    const response = await api.put(`/trips/${id}`, data);

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to update trip."
    );
  }
}


export async function deleteTrip(id) {
  try {
    const response = await api.delete(`/trips/${id}`);

    return response.data;

  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Unable to delete trip."
    );
  }
}

/**
 * Derive travel statistics for a user from their trip list.
 * Returns: { tripsPlanned, countriesVisited, travelDays, recentActivity }
 */
export async function getTripStats(userId) {
  const trips = await getTripsByUserId(userId);

  const tripsPlanned = trips.length;

  // Use unique destinationIds as a proxy for countries visited.
  const countriesVisited = new Set(
    trips.map((t) => t.destinationId).filter(Boolean)
  ).size;

  // Sum travel days from startDate → endDate across all trips.
  let travelDays = 0;
  for (const trip of trips) {
    if (trip.startDate && trip.endDate) {
      const start = new Date(trip.startDate);
      const end = new Date(trip.endDate);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      if (diff > 0) travelDays += diff;
    }
  }

  // Build recent activity list from the latest 4 trips (most recent first).
  const sorted = [...trips].sort((a, b) => {
    const da = a.startDate ? new Date(a.startDate) : new Date(0);
    const db = b.startDate ? new Date(b.startDate) : new Date(0);
    return db - da;
  });

  const recentActivity = sorted.slice(0, 4).map((trip) => ({
    id: trip.id,
    title: trip.tripName || "Unnamed trip",
    subtitle: [
      trip.numberOfPeople ? `${trip.numberOfPeople} traveller${trip.numberOfPeople > 1 ? "s" : ""}` : null,
      trip.status ? trip.status : null,
    ]
      .filter(Boolean)
      .join(" · "),
    time: trip.startDate
      ? new Date(trip.startDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "—",
    status: trip.status || "planned",
  }));

  return { tripsPlanned, countriesVisited, travelDays, recentActivity };
}