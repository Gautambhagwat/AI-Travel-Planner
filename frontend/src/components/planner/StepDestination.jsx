import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Input from "../ui/Input";
import SectionHeader from "../ui/SectionHeader";

import usePlanner from "../../hooks/usePlanner";

import {
    getAllDestinations,
    searchDestinations,
} from "../../services/destinationService";


function StepDestination() {

    const {
        tripData,
        updateTripData
    } = usePlanner();


    const [destinations,setDestinations] = useState([]);

    const [search,setSearch] = useState("");



    useEffect(()=>{

        loadDestinations();

    },[]);



    async function loadDestinations(){

        try{

            const data = await getAllDestinations();

            setDestinations(data);

        }
        catch(error){

            console.error(error);

        }

    }



    async function handleSearch(value){

        setSearch(value);


        updateTripData({

            destination:value

        });



        if(value.trim().length < 2){

            loadDestinations();

            return;

        }



        try{

            const data =
                await searchDestinations(value);


            setDestinations(data);


        }
        catch(error){

            console.error(error);

        }

    }



    return (

        <div className="space-y-6">


            <SectionHeader

                title="Where would you like to travel?"

                subtitle="Choose a destination to start building your personalized AI itinerary."

            />



            <Card>


                <Input

                    label="Destination"

                    placeholder="Search city or country..."

                    value={search || tripData.destination}

                    leftIcon={<MapPin size={18}/>}


                    helperText="Search destinations from our database."


                    onChange={(e)=>
                        handleSearch(e.target.value)
                    }

                />



                <div className="mt-6">


                    <p className="mb-3 text-sm font-medium text-secondary-700">

                        Available destinations

                    </p>



                    <div className="flex flex-wrap gap-2">


                        {
                            destinations.map((destination)=>(


                                <Chip

                                    key={destination.id}


                                    selected={
                                        tripData.destination === destination.city
                                    }


                                    variant={
                                        tripData.destination === destination.city
                                            ?
                                            "primary"
                                            :
                                            "outline"
                                    }



                                    onClick={()=>{


                                        updateTripData({

                                            destination:
                                            destination.city

                                        });



                                        setSearch(destination.city);


                                    }}


                                >

                                    {destination.city}

                                </Chip>


                            ))

                        }


                    </div>


                </div>


            </Card>


        </div>

    );

}


export default StepDestination;