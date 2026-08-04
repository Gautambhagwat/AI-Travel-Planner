import { createContext, useEffect, useState } from "react";

import { loginUser, registerUser } from "../services/authService";
import { getUserByEmail } from "../services/userService";


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


    // 1. Authenticate user

    const response = await loginUser(credentials);



    // 2. Get complete user profile

    const profile = await getUserByEmail(
        credentials.email
    );



    // 3. Store complete user

    setUser(profile);



    localStorage.setItem(
        "token",
        response.token
    );


    localStorage.setItem(
        "user",
        JSON.stringify(profile)
    );



    return {

      ...response,

      user: profile

    };

  };



  const register = async (details) => {

    return registerUser(details);

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