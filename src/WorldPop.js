import React from "react";
import PopulationIncrementer from "./PopulationIncrementer";

const WorldPop = props => {
  const firstPop = props.total_population[0].population;
  const secondPop = props.total_population[1].population;
  let operator = (secondPop > firstPop) ? "+" : "-";
  let emoji = (operator === "+") ? "👶🏽👶👶🏿👶🏻" : "☠️☠️☠️☠️";
  return (
    <div className="worldPopContainer">
      <div className="worldPop">
        <div className="tickerGridContainer">
          {props.total_population.map((day, index) => {
            if (index === 0) {
              return (operator === "+") ? (
                <PopulationIncrementer
                  key={index}
                  population={parseInt(day.population)}
                />
              ) : (
                <p key={day} className="tickerItem1">
                  Today's Global Population: {day.population.toLocaleString()}
                </p>
              );
            } else {
              return (
                <p key={day} className="tickerItem2">
                  Tomorrow's Global Population: {day.population.toLocaleString()}
                </p>
              );
            }
          })}
          <p className="tickerItem3">
            Difference: {operator}
            {(secondPop - firstPop).toLocaleString()} {emoji}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldPop;
