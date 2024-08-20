import React, { useState } from "react";

const PercentageCalculator = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    const value1 = parseFloat(inputValue1);
    const value2 = parseFloat(inputValue2);

    if (!isNaN(value1) && !isNaN(value2)) {
      const percentage = (value1 / value2) * 100;
      setResult(`${value1} is ${percentage.toFixed(2)}% of ${value2}`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  const calculateIncrease = () => {
    const value1 = parseFloat(inputValue1);
    const value2 = parseFloat(inputValue2);

    if (!isNaN(value1) && !isNaN(value2)) {
      const increase = (value2 / value1) * 100 - 100;
      setResult(
        `The percentage increase from ${value1} to ${value2} is ${increase.toFixed(
          2
        )}%`
      );
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  const calculateDecrease = () => {
    const value1 = parseFloat(inputValue1);
    const value2 = parseFloat(inputValue2);

    if (!isNaN(value1) && !isNaN(value2)) {
      const decrease = 100 - (value2 / value1) * 100;
      setResult(
        `The percentage decrease from ${value1} to ${value2} is ${decrease.toFixed(
          2
        )}%`
      );
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <div className="flex justify-center  ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Percentage Calculator
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700">Value 1:</label>
            <input
              type="number"
              value={inputValue1}
              onChange={(e) => setInputValue1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white"
              placeholder="Enter first value"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Value 2:</label>
            <input
              type="number"
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white"
              placeholder="Enter second value"
            />
          </div>
          <div className="flex justify-between mt-4 gap-2">
            <button
              onClick={calculatePercentage}
              className="p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 w-2/5"
            >
              Calculate %
            </button>
            <button
              onClick={calculateIncrease}
              className="p-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 w-2/5"
            >
              Increase %
            </button>
            <button
              onClick={calculateDecrease}
              className="p-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 w-2/5"
            >
              Decrease %
            </button>
          </div>
          {result && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-600">{result}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;
