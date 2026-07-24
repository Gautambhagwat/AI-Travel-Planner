export async function loginUser(credentials) {
  console.log("Logging in:", credentials);

  return {
    token: "mock-jwt-token",
    user: {
      id: 1,
      name: "Demo User",
      email: credentials.email,
    },
  };
}