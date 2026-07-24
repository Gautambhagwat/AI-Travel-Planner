import DashboardLayout from "../../components/dashboard/DashboardLayout";

import TripSummary from "../../components/itinerary/TripSummary";
import BudgetCard from "../../components/itinerary/BudgetCard";
import HotelCard from "../../components/itinerary/HotelCard";
import TransportCard from "../../components/itinerary/TransportCard";
import DayCard from "../../components/itinerary/DayCard";
import EmptyItinerary from "../../components/itinerary/EmptyItinerary";

import useItinerary from "../../hooks/useItinerary";

const mockTrip = {

  tripTitle: "Goa Adventure",

  totalCost: 42000,

  days: [

    {

      day: 1,

      title: "Arrival",

      activities: [

        "Check-in",

        "Beach Walk",

        "Dinner"

      ]

    },

    {

      day: 2,

      title: "Explore",

      activities: [

        "Fort Aguada",

        "Water Sports",

        "Sunset Cruise"

      ]

    }

  ]

};

function TripDetails() {

  const { itinerary } = useItinerary();

  const trip = itinerary || mockTrip;

  if (!trip) {

    return (

      <DashboardLayout>

        <EmptyItinerary />

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <TripSummary trip={trip} />

      <div className="mb-8 grid gap-6 md:grid-cols-2">

        <BudgetCard totalCost={trip.totalCost} />

        <HotelCard />

      </div>

      <div className="mb-8">

        <TransportCard />

      </div>

      {

        trip.days.map((day)=>(

          <DayCard

            key={day.day}

            day={day}

          />

        ))

      }

    </DashboardLayout>

  );

}

export default TripDetails;