import React from "react";

const NewTodoForm = ({
  addTask,
  newTodoText,
  setnewTodoText,
  newTodocompleted,
  setNewTodocompleted,
  toggleNewTodoForm,
}) => {
  return (
    <>
      <div className="formInput">
        <input
          className="inputfield"
          type="text"
          value={newTodoText}
          onChange={(e) => setnewTodoText(e.target.value)}
          placeholder="Enter your new Todo ..."
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label>
          Completed:
          <input
            className="inputfield"
            type="checkbox"
            checked={newTodocompleted}
            onChange={(e) => setNewTodocompleted(e.target.checked)}
          />
        </label>
      </div>

      <div>
        <button className="formButton" onClick={addTask}>
          Submit
        </button>
        <button className="formButton" onClick={toggleNewTodoForm}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default NewTodoForm;
