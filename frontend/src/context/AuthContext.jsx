import { createContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { getUserByEmail, createUserProfile } from "../services/userService";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = async (credentials) => {
    // 1. Authenticate user via AUTH-SERVICE
    const response = await loginUser(credentials);

    // 2. Get user profile from USER-SERVICE (with graceful fallback if not yet created)
    let profile;
    try {
      profile = await getUserByEmail(credentials.email);
    } catch {
      // If user profile is missing in USER-SERVICE, create it on the fly
      try {
        profile = await createUserProfile({
          fullName: credentials.email.split("@")[0],
          email: credentials.email,
          password: credentials.password,
        });
      } catch {
        profile = {
          id: Date.now(),
          email: credentials.email,
          fullName: credentials.email.split("@")[0],
        };
      }
    }

    // 3. Store user in state & localStorage
    setUser(profile);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(profile));

    return {
      ...response,
      user: profile,
    };
  };

  const register = async (details) => {
    // 1. Register user in AUTH-SERVICE
    const authResult = await registerUser(details);

    // 2. Create corresponding profile in USER-SERVICE
    try {
      await createUserProfile({
        fullName: details.fullName || details.name,
        email: details.email,
        password: details.password,
      });
    } catch (e) {
      console.warn("User service profile creation warning:", e);
    }

    return authResult;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;