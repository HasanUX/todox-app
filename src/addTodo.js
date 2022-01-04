/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import "./index.css";

const AddTodo = ({ addTodo }) => {
  // state = {
  //   taskName: "",
  //   saveTodo: false,
  //   isValid: true,
  // };

  const [taskName, setTaskName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length === 0) {
      setIsValid(false);
      return;
    }
    addTodo(taskName);
    setTaskName("");
  };

  const handleChange = (e) => {
    if (taskName.length > 0) {
      setIsValid(true);
    }
    setTaskName(e.target.value);
  };

  // useEffect(() => {
  //   localStorage.setItem("taskName", JSON.stringify(taskName));
  // }, [taskName]);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <form
      className={`addtodo-form shadow rounded p-3 mt-5 mb-5 ${
        !isValid ? "invalid" : " "
      }`}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="col-form-label" style={{ color: theme.primary }}>
          {isValid ? "Add your task here" : "Please add at least one task!"}
        </label>

        <input
          onChange={handleChange}
          value={taskName}
          required
          placeholder="Task name"
          type="text"
          className="border form-control"
        />
      </div>

      <div className="mt-3">
        <button
          type="submit"
          className="btn mb-3"
          style={{ background: theme.ui, color: theme.syntax }}
        >
          Add Now
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
