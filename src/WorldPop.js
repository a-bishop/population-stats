import React from "react";
import PopulationIncrementer from "./PopulationIncrementer";

const WorldPop = props => {
  const firstPop = props.total_population[0];
  const secondPop = props.total_population[1];
  let operator = secondPop > firstPop ? "+" : "-";
  let emoji = operator === "+" ? "👶🏽👶👶🏿👶🏻" : "☠️☠️☠️☠️";
  return (
    <div className="worldPopContainer">
      <div className="worldPop">
        <div className="tickerGridContainer">
          {props.total_population.map((population, index) => {
            if (index === 0) {
              return operator === "+" ? (
                <PopulationIncrementer key={index} population={population} />
              ) : (
                <p key={population} className="tickerItem1">
                  Today's Global Population: {population.toLocaleString()}
                </p>
              );
            } else {
              return (
                <p key={population} className="tickerItem2">
                  Tomorrow's Global Population: {population.toLocaleString()}
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
