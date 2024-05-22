import React, { useState } from "react";

const Todos = ({ todo, toggleTodo, deleteTodo }) => {
  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="TodoItemContainer">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <div className={`TodoItem ${todo.completed ? "strikethrough" : ""}`}>
        {todo.text}
      </div>
      <button className="deleteButton" onClick={handleDeleteTodo}>🗑️</button>
    </div>
  );
};

export default Todos;
