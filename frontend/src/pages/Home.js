import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TodoList from "../components/TodoList";

const Home = () => {
  const { token, logout } = useContext(AuthContext);
  if (!token) {
    return (
      <div>
        <p>Please Login to View your Todos</p>
      </div>
    );
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <TodoList />
    </div>
  );
};

export default Home;
