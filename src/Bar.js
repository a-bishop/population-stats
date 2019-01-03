import React from "react";
import "./App.css";

const Bar = ({ x, y, width, height, country, population, color }) => {
  const TEXT_PADDING = 5;
  const NUM_PADDING = 5;
  let yVal = y + height + TEXT_PADDING;
  const xVal = x - TEXT_PADDING;
  const transform = `rotate(-90 ${xVal} ${yVal})`;
  return (
    <g>
      <text x={x} y={yVal} className="barText" transform={transform}>
        <tspan>{country}</tspan>
      </text>
      <text x={x} y={y - NUM_PADDING} className="barNums">
        {population.toLocaleString()}
      </text>
      <rect x={x} y={y} width={width} height={height} fill={color} />
    </g>
  );
};

export default Bar;
