import api from "./api";


export async function loginUser({ email, password }) {

  try {

    const response = await api.post("/auth/login", {
      email,
      password,
    });


    if (!response.data.token) {

      throw new Error(
          response.data.message ||
          "Invalid email or password."
      );

    }


    return {

      token: response.data.token,

      user: {
        email
      }

    };


  } catch (error) {

    throw new Error(
        error.response?.data?.message ||
        error.message ||
        "Invalid email or password."
    );

  }

}

export async function registerUser({ name, email, password }) {
  try {
    const response = await api.post("/auth/register", {
      username: name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(
        error.response?.data?.message ||
        "Registration failed."
    );
  }
}