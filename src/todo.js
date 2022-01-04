import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Done from "./Done";

class Todo extends Component {
  // ContexAPI declaration
  static contextType = ThemeContext;

  render() {
    const { todos, onDelete, handleDone } = this.props;

    // ContexAPI implementation
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    console.log("Todo rendered");

    const todoxList = todos.length ? (
      todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <div className="d-flex gap-3 w-100 justify-content-between">
                <span>
                  <Done onClick={() => handleDone(todo)} done={todo.done} />
                </span>

                <div className="text-center">
                  <h6 className="mb-0" style={{ color: theme.syntax }}>
                    {todo.taskName}
                  </h6>
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(todo.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h4 className="bg-dark rounded shadow text-white text-center p-3">
        you got no task dude! why not add some...
      </h4>
    );

    return <div className="task-list-group list-group">{todoxList}</div>;
  }
}

export default Todo;
