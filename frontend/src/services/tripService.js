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


// ===============================
// LOCAL SAVED TRIPS
// (keep existing AI planner data)
// ===============================


const SAVED_TRIPS_KEY = "ai-travel-planner.saved-trips";


const readTrips = () => {
  try {
    return JSON.parse(
        localStorage.getItem(SAVED_TRIPS_KEY)
    ) || [];

  } catch {
    return [];
  }
};


const writeTrips = (trips) => {

  localStorage.setItem(
      SAVED_TRIPS_KEY,
      JSON.stringify(trips)
  );

};


export const getSavedTrips = () =>
    readTrips()
        .sort(
            (first, second) =>
                new Date(second.updatedAt) -
                new Date(first.updatedAt)
        );


export const getSavedTrip = (tripId) =>
    readTrips()
        .find((trip) => trip.id === tripId)
    || null;


export const saveTrip = (trip) => {

  const trips = readTrips();

  const existingIndex =
      trips.findIndex(
          (item) => item.id === trip.id
      );


  const savedTrip = {

    ...trip,

    status: "Saved",

    createdAt:
        existingIndex >= 0
            ? trips[existingIndex].createdAt
            : new Date().toISOString(),

    updatedAt:
        new Date().toISOString(),

  };


  if(existingIndex >= 0){

    trips[existingIndex] = savedTrip;

  }
  else{

    trips.push(savedTrip);

  }


  writeTrips(trips);

  return savedTrip;
};


export const duplicateTrip = (tripId) => {

  const trip = getSavedTrip(tripId);


  if(!trip){

    throw new Error("Trip not found.");

  }


  const copy = {

    ...trip,

    id: crypto.randomUUID(),

    tripTitle:
        `${trip.tripTitle} Copy`,

    createdAt:
        new Date().toISOString(),

    updatedAt:
        new Date().toISOString(),

  };


  return saveTrip(copy);

};


export const deleteSavedTrip = (tripId) => {

  writeTrips(
      readTrips()
          .filter(
              (trip)=>trip.id !== tripId
          )
  );

};