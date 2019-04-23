import React from "react";
import * as d3 from "d3";
import "./App.css";
import Chart from "./Chart";
import Bar from "./Bar";

const BarChart = props => {
  const BAR_WIDTH = 100;
  const BAR_MARGIN = 30;
  const MAX_HEIGHT = 500;
  const X_OFFSET = 20;
  const dataLength = props.populations.length;

  const highestVal = d3.max(props.populations, d => d.population);
  const scale = d3
    .scaleLinear()
    .domain([0, highestVal])
    .range([0, MAX_HEIGHT - 30]);

  const colour = d3
    .scaleLinear()
    .domain([0, highestVal])
    .range(["#c19898", "#4a4a48"]);

  return (
    <div>
      <Chart width={dataLength * (BAR_WIDTH + BAR_MARGIN)} height={MAX_HEIGHT}>
        {props.populations.map((country, index) => {
          const itemHeight = country.population;
          return (
            <Bar
              key={country.name}
              country={country.name}
              population={country.population}
              color={colour(country.population)}
              x={index * (BAR_WIDTH + BAR_MARGIN) + X_OFFSET}
              y={MAX_HEIGHT - scale(itemHeight)}
              width={BAR_WIDTH}
              height={scale(itemHeight)}
            />
          );
        })}
      </Chart>
    </div>
  );
};

export default BarChart;
