import React, { Component } from "react";

class PopulationIncrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.population
    };
    this.launchCounter();
  }

  launchCounter() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  render() {
    return (
      <p className="tickerItem1">
        Current Global Population: {this.state.count.toLocaleString()}
      </p>
    );
  }
}

export default PopulationIncrementer;
