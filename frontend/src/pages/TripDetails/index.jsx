import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import AIItinerary from "../../components/itinerary/AIItinerary";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Model";
import { getWeather } from "../../services/weatherService";
import TripSummary from "../../components/itinerary/TripSummary";
import BudgetCard from "../../components/itinerary/BudgetCard";
import WeatherCard from "../../components/itinerary/WeatherCard";
import MapCard from "../../components/itinerary/MapCard";
import TravelGuideCard from "../../components/itinerary/TravelGuideCard";
import EmptyItinerary from "../../components/itinerary/EmptyItinerary";
import { getLocation } from "../../services/mapService";
import {
  getTripById,
  deleteTrip,
} from "../../services/tripService";

function TripDetails() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [trip, setTrip] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  console.log("LOCATION STATE:", location);
  console.log("WEATHER STATE:", weather);
  console.log(trip);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTrip() {
      try {
        const response = await getTripById(id);
        setTrip(response);


// Fetch weather
        try {

          const place = response.tripName.replace(" AI Trip", "");

          const weatherData = await getWeather(place);

          console.log("Weather:", weatherData);

          setWeather(weatherData);

        } catch(error){

          console.error(
              "Weather loading failed",
              error
          );

        }
      } catch (error) {
        console.error("Failed loading trip", error);
      }
    }

    if (id) {
      loadTrip();
    }
  }, [id]);

  useEffect(() => {
    async function loadLocation() {
      try {
        if (trip?.tripName) {

          const place = trip.tripName.replace(" AI Trip", "");

          const data = await getLocation(place);

          console.log(
              "MAP LOCATION DATA =>",
              JSON.stringify(data, null, 2)
          );

          setLocation(data);
        }

      } catch (error) {

        console.error(
            "Failed loading location",
            error
        );

      }
    }

    if (trip) {
      loadLocation();
    }

  }, [trip]);
  const handleDelete = async () => {
    try {
      await deleteTrip(trip.id);

      setIsDeleteModalOpen(false);

      navigate("/saved-trips");
    } catch (error) {
      console.error(error);
    }
  };

  if (!trip) {
    return (
      <DashboardLayout>
        <EmptyItinerary />
      </DashboardLayout>
    );
  }

  let itinerary = null;

  try {
    itinerary = trip.aiRecommendation
      ? JSON.parse(trip.aiRecommendation)
      : null;
  } catch (error) {
    console.error("Invalid AI recommendation JSON", error);
  }

  return (
    <DashboardLayout>
      {/* Hero */}
      <TripSummary trip={trip} />

      {/* Manage Trip */}
      <section className="mb-10 rounded-3xl border border-secondary-200 bg-white p-5 shadow-card">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Manage Trip
            </h2>

            <p className="text-sm text-secondary-500">
              View or remove your saved trip.
            </p>
          </div>

          <Button
            variant="danger"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete Trip
          </Button>
        </div>
      </section>

      {/* AI Itinerary */}
      <AIItinerary
        aiRecommendation={itinerary}
      />

      {/* Summary Cards */}
      <section className="mb-10">
        <div className="grid gap-6 lg:grid-cols-2">

          <WeatherCard
              weather={weather}
          />

          <MapCard
              location={location}
              itinerary={itinerary}
          />

        </div>
      </section>

      {/* AI Travel Guide */}
      <section className="mb-10">
        <TravelGuideCard
          summary={itinerary?.summary}
        />
      </section>

      {/* Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        title="Delete trip?"
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <p className="text-secondary-600">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {trip.tripName}
          </span>
          ?
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </DashboardLayout>
  );
}

export default TripDetails;