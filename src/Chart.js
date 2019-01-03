import React from "react";
import "./App.css";

const Chart = ({ children, width, height }) => {
  return (
    <svg
      className="gridChart"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      display={"block"}
    >
      {children}
    </svg>
  );
};

export default Chart;
