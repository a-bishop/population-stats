import React, { Component } from "react";
import "./App.css";
import BarChart from "./BarChart";
import { countryPopulations } from "./countryPopulations";
import { countries } from "./countries";

class Form extends Component {
  constructor(props) {
    let randomStartingCountries = [];
    for (let i = 0; i < 4; i++) {
      randomStartingCountries.push(
        countryPopulations[
          Math.floor(Math.random() * countryPopulations.length)
        ].country
      );
    }
    super(props);
    this.state = {
      countries,
      selectedCountries: randomStartingCountries,
      populations: [],
      countryAndPop: [],
      formSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
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
    let countryPops = [];
    for (let country of this.state.selectedCountries) {
      const countryPopFiltered = countryPopulations.filter(
        obj => obj.country === country
      );
      countryPops.push(countryPopFiltered[0]);
    }
    this.setState({
      countryAndPop: countryPops,
      formSubmitted: true
    });
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
