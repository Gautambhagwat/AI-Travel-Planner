import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentTrips from "../../components/dashboard/RecentTrips";
import AIRecommendations from "../../components/dashboard/AIRecommendations";

import { getTripsByUserId } from "../../services/tripService";


function Dashboard() {

    const [trips, setTrips] = useState([]);


    useEffect(() => {

        async function loadTrips() {

            try {

                const loggedInUser =
                    JSON.parse(
                        localStorage.getItem("user")
                    );


                if (!loggedInUser?.id) {

                    console.log(
                        "User not logged in"
                    );

                    return;

                }


                const response =
                    await getTripsByUserId(
                        loggedInUser.id
                    );


                console.log(
                    "Trips from backend:",
                    response
                );


                setTrips(response);


            } catch(error) {

                console.error(
                    "Failed to fetch trips:",
                    error
                );

            }

        }


        loadTrips();


    }, []);



    const totalEstimatedCost =
        trips.reduce(
            (total, trip) =>
                total +
                Number(trip.totalPrice || 0),

            0
        );



    const destinations =
        new Set(
            trips.map(
                (trip) =>
                    trip.destinationId
            )
        ).size;



    const formattedCost =
        new Intl.NumberFormat(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
            }
        ).format(totalEstimatedCost);



    return (

        <DashboardLayout>


            <WelcomeBanner />



            <section className="my-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">


                <StatCard

                    title="Total Trips"

                    value={trips.length}

                />



                <StatCard

                    title="Destinations"

                    value={destinations}

                />



                <StatCard

                    title="Estimated Budget"

                    value={formattedCost}

                />


            </section>




            <section className="mb-10">


                <QuickActions />


            </section>




            <section className="grid gap-6 lg:grid-cols-2">


                <RecentTrips

                    trips={trips}

                />



                <AIRecommendations />


            </section>


        </DashboardLayout>

    );

}


export default Dashboard;