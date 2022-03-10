import React, { createContext, Component } from "react";

export const StatsContext = createContext();

class StatsProvider extends Component {
  state = {
    name: "Fahim",
  };

  render() {
    return (
      <StatsContext.Provider
        value={{
          name: this.state.name,
          changeNmae: (name: string) => {
            this.setState({ name });
          },
        }}
      >
        {this.props.children}
      </StatsContext.Provider>
    );
  }
}

export default StatsProvider;
