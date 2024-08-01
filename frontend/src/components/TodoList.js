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
    setTodos([...todos, response.data]);
  };
  const updateTodo = async (id, updates) => {
    const response = await api.patch(`/todos/${id}`, updates);
    setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
  };
  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo) => (
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
