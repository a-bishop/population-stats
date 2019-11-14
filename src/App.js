import React, { Component } from "react";
import "./App.css";
import WorldPop from "./WorldPop";
import Form from "./Form";
import Footer from "./Footer";

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      total_population: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      total_population: [7743812456, 7744022244]
    });
  }

  render() {
    if (this._isMounted) {
      return (
        <div className="main">
          <div className="content">
            <WorldPop {...this.state} />
            <Form />
          </div>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
