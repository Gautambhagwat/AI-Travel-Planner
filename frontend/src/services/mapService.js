import api from "./api";

export const getLocation = async (place) => {
    const response = await api.get("/maps/location", {
        params: {
            place,
        },
    });

    return response.data;
};