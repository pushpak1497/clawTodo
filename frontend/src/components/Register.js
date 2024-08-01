import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [fullName, setfullname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password, userName, fullName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={userName}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="fullname">Fullname</label>
      <input
        type="text"
        placeholder="Enter fullname"
        value={fullName}
        id="fullname"
        onChange={(e) => setfullname(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
