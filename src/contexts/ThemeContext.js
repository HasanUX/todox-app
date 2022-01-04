import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#222",
      ui: "#ddd",
      primary: "#000",
      bg: "#f7f7f7",
    },
    dark: {
      syntax: "#f7f7f7",
      ui: "#222",
      primary: "#555",
      bg: "rgb(72, 72, 72)",
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
