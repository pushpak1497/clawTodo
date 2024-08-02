import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

const Home = () => {
  const { token, logout } = useContext(AuthContext);
  if (!token) {
    return (
      <div>
        <Link to="/login">
          <p>Please Login to View your Todos</p>
        </Link>
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
