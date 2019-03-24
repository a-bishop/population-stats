import React, { Component } from "react";
import "./App.css";
import BarChart from "./BarChart";
import { COUNTRIES } from "./countries";

const PROXY = "https://morning-meadow-26294.herokuapp.com/";
const PATH_BASE = "http://api.population.io:80/1.0";

class Form extends Component {
  constructor(props) {
    let randomStartingCountries = [];
    for (let i = 0; i < 4; i++) {
      randomStartingCountries.push(
        COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
      );
    }
    super(props);
    this.state = {
      countries: COUNTRIES,
      selectedCountries: randomStartingCountries,
      populations: [],
      countryAndPop: [],
      formSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleHTTPErrors = this.handleHTTPErrors.bind(this);
    this.handleAddCountry = this.handleAddCountry.bind(this);
    this.handleRemoveCountry = this.handleRemoveCountry.bind(this);
  }

  handleChangeCountry(e) {
    let selected = this.state.selectedCountries.slice();
    selected[e.target.id] = e.target.value;
    this.setState({
      selectedCountries: selected
    });
  }

  handleAddCountry(e) {
    e.preventDefault();
    let newCountryIndex = Math.floor(
      Math.random() * this.state.countries.length
    );
    let newCountry = this.state.countries[newCountryIndex];
    this.setState({
      selectedCountries: [...this.state.selectedCountries, newCountry]
    });
  }

  handleRemoveCountry(e) {
    e.preventDefault();
    let selected = this.state.selectedCountries;
    selected.pop();
    this.setState({
      selectedCountries: selected
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let dt = new Date();
    let dateNow =
      dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    let promises = [];
    for (let country of this.state.selectedCountries) {
      let query = `/population/${country}/${dateNow}`;
      let promise = fetch(`${PROXY}${PATH_BASE}${query}`)
        .then(response => this.handleHTTPErrors(response))
        .then(response => response.json());
      promises.push(promise);
    }
    Promise.all(promises)
      .then(results => {
        let newPops = [];
        for (let result of results) {
          newPops.push(result.total_population.population);
        }
        this.setState({
          populations: newPops
        });
        let arr1 = this.state.selectedCountries;
        let arr2 = this.state.populations;
        let countryPop = arr1.map((country, index) =>
          Object.assign({ name: country, population: arr2[index] })
        );
        this.setState({
          countryAndPop: countryPop,
          formSubmitted: true,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ": " + response.statusText);
    return response;
  }

  render() {
    let chart;
    let buttons;
    let addButton = (
      <button id="addButton" onClick={this.handleAddCountry}>
        Add
      </button>
    );
    let removeButton = (
      <button id="removeButton" onClick={this.handleRemoveCountry}>
        Remove
      </button>
    );
    if (this.state.formSubmitted) {
      chart = (
        <BarChart
          populations={this.state.countryAndPop}
          width={500}
          height={500}
        />
      );
    }
    if (this.state.selectedCountries.length <= 2) {
      buttons = <div className="addRemoveButtons">{addButton}</div>;
    } else if (
      this.state.selectedCountries.length > 2 &&
      this.state.selectedCountries.length < 6
    ) {
      buttons = (
        <div className="addRemoveButtons">
          {addButton}
          {removeButton}
        </div>
      );
    } else {
      buttons = <div className="addRemoveButtons">{removeButton}</div>;
    }
    return (
      <div>
        <div className="spacer" />
        <div className="mainGridContainer">
          <form className="form" onSubmit={this.handleSubmit}>
            <h3>Compare current populations</h3>
            <div className="countryDropdownWrapper">
              <div className="addRemoveButtons" />
              {buttons}
              {this.state.selectedCountries.map((selectedCountry, i) => (
                <select
                  className="countryDropdown"
                  key={i}
                  id={i}
                  value={selectedCountry}
                  onChange={this.handleChangeCountry}
                >
                  {this.state.countries.map(country => (
                    <option key={country} country={country}>
                      {country}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <div>
              <br />
              <input value="Submit" type="submit" className="submitButton" />
            </div>
          </form>
          {chart}
        </div>
      </div>
    );
  }
}

export default Form;
