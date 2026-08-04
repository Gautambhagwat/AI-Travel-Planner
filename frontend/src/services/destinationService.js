import api from "./api";


export async function getAllDestinations() {

    try {

        const response = await api.get("/destinations");

        return response.data;

    } catch(error){

        throw new Error(
            error.response?.data?.message ||
            "Unable to fetch destinations."
        );

    }

}


export async function searchDestinations(city){

    try{

        const response = await api.get(
            `/destinations/search?city=${city}`
        );

        return response.data;

    }catch(error){

        throw new Error(
            error.response?.data?.message ||
            "Unable to search destinations."
        );

    }

}