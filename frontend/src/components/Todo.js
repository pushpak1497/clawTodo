import React from "react";

const Todo = ({ todo, onDelete, onUpdate }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onUpdate(todo._id, { isCompleted: !todo.isCompleted })}
      />
      <span>{todo.content}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default Todo;
