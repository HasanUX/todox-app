import React, { Component, createContext } from "react";

export const WatchContext = createContext();

class WatchContextProvider extends Component {
  state = {
    blankTime: "",
    showTime: Date().toLocaleString(),
  };

  toggleWatch = () => {
    const setTime = this.setState({ blankTime: this.state.showTime });
    console.log(setTime);
    return setTime;
  };

  render() {
    return (
      <WatchContext.Provider
        value={{ ...this.state, toggleWatch: this.toggleWatch }}
      >
        {this.props.children}
      </WatchContext.Provider>
    );
  }
}

export default WatchContextProvider;
