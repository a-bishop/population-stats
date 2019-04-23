import React, { Component } from "react";
import "./App.css";
import WorldPop from "./WorldPop";
import Form from "./Form";
import Footer from "./Footer";

const PROXY = "https://cors-anywhere.herokuapp.com/";
const PATH_BASE = "http://54.72.28.201:80/1.0";
const WORLD_POP_QUERY = "/population/World/today-and-tomorrow";

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      total_population: []
    };

    this.handleHTTPErrors = this.handleHTTPErrors.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    fetch(`${PROXY}${PATH_BASE}${WORLD_POP_QUERY}`)
      .then(response => this.handleHTTPErrors(response))
      .then(response => response.json())
      .then(result => {
        this.setState({
          total_population: result.total_population
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
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
