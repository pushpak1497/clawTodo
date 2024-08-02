import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    const response = await axios.post(
      "http://localhost:4000/api/v1/users/login",
      {
        email,
        password,
      }
    );

    setToken(response.data.data.accessToken);
    localStorage.setItem("token", response.data.data.accessToken);
  };
  const register = async (email, password, userName, fullName) => {
    await axios.post("http://localhost:4000/api/v1/users/register", {
      email,
      password,
      userName,
      fullName,
    });
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
