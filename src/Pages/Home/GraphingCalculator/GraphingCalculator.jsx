import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const GraphingCalculator = () => {
  const [expression, setExpression] = useState("");
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Graph",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const plotGraph = () => {
    try {
      const parsedExpression = expression.replace(/x/g, "xValue");
      const xValues = [];
      const yValues = [];

      for (let xValue = -10; xValue <= 10; xValue += 0.1) {
        xValues.push(xValue);
        const yValue = eval(parsedExpression);
        yValues.push(yValue);
      }

      setData({
        labels: xValues,
        datasets: [
          {
            label: "Graph",
            data: yValues,
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error("Invalid expression");
    }
  };

  return (
    <div className="flex flex-col items-center pt-8 bg-gray-200 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black">Graphing Calculator</h1>
      <input
        type="text"
        value={expression}
        onChange={handleChange}
        placeholder="Enter expression (e.g., x*x)"
        className="border p-2 mb-4 w-1/2 bg-white"
      />
      <button
        onClick={plotGraph}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Plot Graph
      </button>
      <div className="w-3/4">
        <Line data={data} />
      </div>
    </div>
  );
};

export default GraphingCalculator;
