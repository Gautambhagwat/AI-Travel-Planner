import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Model";

import TripSummary from "../../components/itinerary/TripSummary";
import BudgetCard from "../../components/itinerary/BudgetCard";
import HotelCard from "../../components/itinerary/HotelCard";
import TransportCard from "../../components/itinerary/TransportCard";
import DayCard from "../../components/itinerary/DayCard";
import EmptyItinerary from "../../components/itinerary/EmptyItinerary";

import useItinerary from "../../hooks/useItinerary";

import {
  deleteSavedTrip,
  duplicateTrip,
  getSavedTrip,
  saveTrip,
} from "../../services/tripService";

function TripDetails() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { itinerary, setItinerary } = useItinerary();

  const savedTrip = id ? getSavedTrip(id) : null;

  const trip = savedTrip || itinerary;

  const handleSave = () => {
    const saved = saveTrip(trip);

    setItinerary(saved);

    navigate(`/trip-details/${saved.id}`, {
      replace: true,
    });
  };

  const handleDuplicate = () => {
    const duplicatedTrip = duplicateTrip(trip.id);

    setItinerary(duplicatedTrip);

    navigate(`/trip-details/${duplicatedTrip.id}`);
  };

  const handleDelete = () => {
    deleteSavedTrip(trip.id);

    setItinerary(null);

    setIsDeleteModalOpen(false);

    navigate("/saved-trips");
  };

  if (!trip) {
    return (
      <DashboardLayout>
        <EmptyItinerary />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Hero */}
      <TripSummary trip={trip} />

      {/* Action Bar */}
      <section className="mb-8 rounded-2xl border border-secondary-200/80 bg-white p-5 shadow-card sm:mb-10 sm:rounded-3xl sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-lg font-bold text-secondary-900 sm:text-xl">
              Manage Trip
            </h2>

            <p className="mt-0.5 text-xs text-secondary-500 sm:text-sm">
              Save, duplicate or remove this itinerary.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            {!savedTrip ? (
              <Button onClick={handleSave}>
                Save Trip
              </Button>
            ) : (
              <>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={handleDuplicate}
                >
                  Duplicate Trip
                </Button>

                <Button
                  variant="danger"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    setIsDeleteModalOpen(true)
                  }
                >
                  Delete Trip
                </Button>
              </>
            )}
          </div>

        </div>
      </section>

      {/* Summary Cards */}

      <section className="mb-8 sm:mb-10">
        <div className="grid gap-6 lg:grid-cols-2">

          <BudgetCard
            totalCost={trip.totalCost}
            budgetLimit={trip.budgetLimit}
          />

          <HotelCard
            hotelName={trip.hotelName}
            accommodation={trip.accommodation}
          />

        </div>
      </section>

      {/* Transport */}

      <section className="mb-8 sm:mb-10">
        <TransportCard
          transport={trip.transport}
        />
      </section>

      {/* Itinerary */}

      <section className="space-y-8">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-secondary-100 pb-4">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary-600">
              Daily Plan
            </p>

            <h2 className="mt-1.5 text-2xl font-extrabold text-secondary-900 sm:text-3xl">
              Your Journey
            </h2>

            <p className="mt-1 text-xs text-secondary-500 sm:text-sm">
              Follow your personalized AI-generated itinerary day by day.
            </p>
          </div>

        </div>

        <div className="space-y-8">
          {trip.days.map((day) => (
            <DayCard
              key={day.day}
              day={day}
            />
          ))}
        </div>

      </section>

      {/* Delete Modal */}

      <Modal
        isOpen={isDeleteModalOpen}
        title="Delete saved trip?"
        onClose={() =>
          setIsDeleteModalOpen(false)
        }
      >
        <p className="text-sm text-secondary-600">
          This will permanently remove
          <span className="font-bold text-secondary-900">
            {" "}
            "{trip.tripTitle}"
          </span>{" "}
          from your saved trips.
        </p>

        <div className="mt-8 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">

          <Button
            variant="secondary"
            onClick={() =>
              setIsDeleteModalOpen(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete Trip
          </Button>

        </div>

      </Modal>
    </DashboardLayout>
  );
}

export default TripDetails;
