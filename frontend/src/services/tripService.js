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

  // Count unique destinations using the trip name.
// Example:
// "Goa Trip" -> Goa
// "Kerala AI Trip" -> Kerala

  const countriesVisited = new Set(
      trips
          .map((trip) =>
              trip.tripName
                  ?.replace(" AI Trip", "")
                  .replace(" Trip", "")
                  .trim()
          )
          .filter(Boolean)
  ).size;

  let travelDays = 0;

  for (const trip of trips) {
    if (trip.startDate && trip.endDate) {
      const start = new Date(`${trip.startDate}T00:00:00`);
      const end = new Date(`${trip.endDate}T00:00:00`);

      const days =
          Math.max(
              1,
              Math.round((end - start) / 86400000) + 1
          );

      travelDays += days;
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