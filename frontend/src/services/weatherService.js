import api from "./api";

export const getWeather = async (place) => {
    const response = await api.get(
        `/weather?place=${place}`
    );

    return response.data;
};

