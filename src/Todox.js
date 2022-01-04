import React, { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import DeleteAll from "./DeleteAll";
import Pagination from "./Pagination";
import paginate from "./utils/paginate";
import Footer from "./components/Footer";
import { v1 } from "uuid";
import { ThemeContext } from "./contexts/ThemeContext";
import { WatchContext } from "./contexts/WatchContext";

const Todox = () => {
  // const [todos, setTodos] = useState(() => {
  //   const localData = localStorage.getItem("todos");
  //   const initialValue = JSON.parse(localData);
  //   return initialValue || "";
  // });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    const initialValue = JSON.parse(localData);
    return initialValue || "";
  }, [
    {
      id: 1,
      taskName: "Pray fajr prayer at mosque (5:20AM)",
      done: "",
    },

    {
      id: 2,
      taskName: "Recite Quran at least one page (5:45AM)",
      done: "",
    },

    {
      id: 3,
      taskName: "Take breakfast",
      done: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete/increment item method
  const deleteTodo = (id) => {
    // if(this.fish === undefined) {return} //catcher to handle error
    const TODOS = todos.filter((todo) => todo.id !== id);
    setTodos(TODOS);
  };

  //delete all objects of array method
  const deleteAllTodo = () => {
    setTodos({ todos: [] });
  };

  // AddTodo function to add task to the state prop array - todos
  const addTodo = (taskName) => {
    setTodos([...todos, { id: v1(), taskName, done: "" }]);
  };

  // task-done func - toggle checkbox
  const handleDone = (todo) => {
    const TODOS = [...todos];
    const index = TODOS.indexOf(todo);
    TODOS[index] = { ...TODOS[index] };
    TODOS[index].done = !TODOS[index].done;
    setTodos(TODOS);
  };

  //change page/list using pagination below the table
  const handlePageChange = (page) => {
    setCurrentPage({ currentPage: page });
  };

  //destructuring
  console.log("Todox rendered");
  const { length: count } = todos;

  // const todoAll = paginate(todos, currentPage, pageSize);
  const todoAll = paginate(todos, currentPage, pageSize);

  // ContexAPI implementation
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { blankTime, toggleWatch } = useContext(WatchContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="App container"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 position-relative">
          <div className="position-absolute top-0 start-0 mt-2">
            <button
              className="rounded"
              onClick={toggleWatch}
              style={{ background: theme.bg, color: theme.syntax }}
            >
              Show time
            </button>
            <small className="ms-3 text-watch">{blankTime}</small>
          </div>

          <div className="position-absolute top-0 end-0 mt-2">
            <button
              className="rounded"
              onClick={toggleTheme}
              style={{ background: theme.bg, color: theme.syntax }}
            >
              Change UI
            </button>
          </div>

          <h1 className="app-title mt-5 mb-5">
            Todox -
            <span className="text-primary">
              track your task <span className="text-secondary">v.2</span>
            </span>
          </h1>

          {todos.length > 0 && (
            <div className="d-flex justify-content-between">
              <h5 className="fw-light mb-4">You got {count} todos on the go</h5>
              <Pagination
                todosCount={count}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                pageSize={pageSize}
              />
            </div>
          )}

          <Todo
            key={todos.id}
            todos={todoAll}
            onDelete={deleteTodo}
            handleDone={handleDone}
          />

          {/* {todos.length > 0 && (
            <DeleteAll onDeleteAll={deleteAllTodo} todos={todos} />
          )} */}

          <AddTodo addTodo={addTodo} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Todox;
