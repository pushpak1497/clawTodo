import React, { useState, useEffect } from "react";
import api from "../services/api";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await api.get("/todos");
    setTodos(response.data);
  };
  const addTodo = async (content) => {
    const response = await api.post("/todos", { content });
    const newTodo = response.data.data;

    setTodos([...todos.data, newTodo]);
  };
  const updateTodo = async (id, updates) => {
    console.log("ahsabh");
    const response = await api.patch(`/todos/${id}`, updates);

    setTodos(
      todos.data.map((todo) => (todo._id === id ? response.data.data : todo))
    );
  };
  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.data.filter((todo) => todo._id !== id));
  };
  useEffect(() => {
    fetchTodos();
  }, [todos.data]);
  return (
    <div>
      <TodoForm onAdd={addTodo} />

      {todos.data &&
        todos.data.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
