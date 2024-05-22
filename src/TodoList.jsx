import React, { useState } from "react";
import Todos from "./Todos";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  //add new todo
  const [newTodoText, setnewTodoText] = useState("");
  const [newTodocompleted, setNewTodocompleted] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const [todos, settodos] = useState([
    { id: 1, text: "Read SpringBoot", completed: false },
    { id: 2, text: "Complete assignments", completed: false },
    { id: 3, text: "Prepare breakfast", completed: false },
    { id: 4, text: "Sleep for 2 hours", completed: false },
    { id: 5, text: "Take a shower", completed: false },
  ]);

  const toggleNewTodoForm = () => {
    setToggleForm(!toggleForm);
  };

  const removeCompleted = () => {
    settodos(todos.filter((todo) => !todo.completed));
  };

  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTask = () => {
    const newTask = {
      id: todos.length + 1,
      text: newTodoText,
      completed: newTodocompleted,
    };

    settodos([...todos, newTask]);
    setnewTodoText("");
    setNewTodocompleted(false);
    setToggleForm(false);
  };

  return (
    <div className="TodoListComponent">
      {!toggleForm && (
        <div>
          {todos.length == 0
            ? " Nothing to do buddy. Sleep!! "
            : todos.map((todo, index) => (
                <Todos
                  key={index}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))}

          <button className="AddTodo" onClick={toggleNewTodoForm}>
            Add Todo
          </button>
          {todos.some((todo) => todo.completed) && (
            <button className="RemoveButton" onClick={removeCompleted}>
              Remove Completed
            </button>
          )}
        </div>
      )}

      {toggleForm && (
        <NewTodoForm
          addTask={addTask}
          newTodoText={newTodoText}
          setnewTodoText={setnewTodoText}
          newTodocompleted={newTodocompleted}
          setNewTodocompleted={setNewTodocompleted}
          toggleNewTodoForm={toggleNewTodoForm}
        />
      )}

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontFamily: "monospace",
        }}
      >
        Made by Roy with Love 💜
      </p>
    </div>
  );
};

export default TodoList;
