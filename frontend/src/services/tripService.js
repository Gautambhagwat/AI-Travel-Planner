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

// Legacy localStorage fallback functions purged.
// All trip storage and operations are handled via REST endpoints in TRIP-SERVICE.