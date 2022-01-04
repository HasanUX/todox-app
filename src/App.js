// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Todox from "./Todox.js";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import WatchContextProvider from "./contexts/WatchContext";

//alog ->
//create class comp
//declare state in a array within a property
//create todo.js comp
//add <Todo /> in parent comp - app.js
//add props
//declare props in todo.js
export class App extends Component {
  render() {
    console.log("App rendered");

    return (
      <div className="App">
        <ThemeContextProvider>
          <WatchContextProvider>
            <Todox />
          </WatchContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
