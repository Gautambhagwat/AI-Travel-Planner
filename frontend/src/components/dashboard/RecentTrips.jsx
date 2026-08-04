import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  MapPin,
  ArrowRight,
  PlaneTakeoff,
  Wallet,
} from "lucide-react";


function RecentTrips({ trips }) {

  const navigate = useNavigate();


  return (

      <section className="rounded-3xl border border-secondary-200 bg-white p-7 shadow-card">


        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-secondary-900">
              Continue Your Journey
            </h2>

            <p className="mt-1 text-secondary-500">
              Pick up where you left off.
            </p>

          </div>


          <button
              onClick={() => navigate("/saved-trips")}
              className="rounded-xl px-4 py-2 font-semibold text-primary-600 hover:bg-primary-50"
          >
            View All
          </button>


        </div>



        {trips.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-secondary-300 bg-secondary-50 py-16 text-center">

              <PlaneTakeoff
                  size={40}
                  className="mx-auto text-primary-600"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Your next adventure starts here
              </h3>

              <button
                  onClick={() => navigate("/planner")}
                  className="mt-8 rounded-2xl bg-primary-600 px-8 py-3 text-white"
              >
                Plan My First Trip
              </button>

            </div>


        ) : (


            <div className="space-y-6">


              {trips.slice(0,3).map((trip)=>{


                const duration =
                    Math.ceil(
                        (
                            new Date(trip.endDate) -
                            new Date(trip.startDate)
                        )
                        /
                        (1000 * 60 * 60 * 24)
                    ) + 1;



                return (

                    <article
                        key={trip.id}
                        className="rounded-3xl border border-secondary-200 p-6 shadow-sm"
                    >


                      <div className="flex flex-col gap-6">


                        <div>


                    <span className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700">

                      AI Generated

                    </span>



                          <h3 className="mt-4 text-3xl font-bold">

                            {trip.tripName}

                          </h3>



                          <div className="mt-5 flex flex-wrap gap-5 text-secondary-600">


                            <div className="flex items-center gap-2">

                              <MapPin size={18}/>

                              Trip #{trip.id}

                            </div>



                            <div className="flex items-center gap-2">

                              <CalendarDays size={18}/>

                              {duration} Days

                            </div>


                          </div>



                        </div>




                        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">


                          <div className="flex items-center gap-3 rounded-2xl bg-primary-50 px-5 py-3">


                            <Wallet
                                size={20}
                                className="text-primary-600"
                            />


                            <div>

                              <p className="text-xs text-secondary-500">
                                Estimated Budget
                              </p>


                              <p className="text-xl font-bold text-primary-700">

                                ₹{trip.totalPrice?.toLocaleString()}

                              </p>


                            </div>


                          </div>




                          <button

                              onClick={() =>
                                  navigate(`/trip-details/${trip.id}`)
                              }

                              className="flex items-center gap-2 rounded-2xl bg-primary-600 px-7 py-3 text-white"

                          >

                            Continue Planning

                            <ArrowRight size={18}/>


                          </button>



                        </div>



                      </div>


                    </article>

                );


              })}



            </div>


        )}


      </section>


  );

}


export default RecentTrips;