import api from "./api";

export async function getUserById(id) {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Unable to fetch user profile."
        );
    }
}

export async function createUserProfile(data) {
    try {
        const response = await api.post("/users", data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Unable to create profile."
        );
    }
}

export async function updateUser(id, data) {
    try {
        const response = await api.put(`/users/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Unable to update profile."
        );
    }
}

export async function getUserByEmail(email) {
    try {
        const response = await api.get(`/users/email/${email}`);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Unable to fetch profile."
        );
    }
}

export async function updateUserByEmail(email, data) {
    try {
        const response = await api.put(`/users/email/${email}`, data);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Unable to update profile."
        );
    }
}