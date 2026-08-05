import api from "./api";

/**
 * Fetch user preferences
 * GET /preferences?userId={id}
 */
export async function getPreferences(userId) {
  try {
    const response = await api.get("/preferences", {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Unable to fetch preferences."
    );
  }
}

/**
 * Update user preferences
 * PUT /preferences?userId={id}
 */
export async function updatePreferences(userId, data) {
  try {
    const response = await api.put("/preferences", data, {
      params: { userId },
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Unable to update preferences."
    );
  }
}