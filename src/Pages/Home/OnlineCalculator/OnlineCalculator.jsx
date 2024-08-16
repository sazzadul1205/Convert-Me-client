import React, { useState } from "react";

const OnlineCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleBackspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression using the built-in JavaScript eval function
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-black">Online Calculator</h1>

      <input
        type="text"
        value={expression}
        readOnly
        className="p-2 border rounded mb-4 w-64 text-right bg-white"
      />
      {result && (
        <div className="my-4 text-xl">
          Result: <span className="font-bold">{result}</span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 mb-4 text-black ">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((symbol) => (
          <button
            key={symbol}
            className="p-4 bg-gray-200 text-lg font-semibold rounded hover:bg-gray-300 border border-black"
            onClick={() =>
              symbol === "=" ? handleCalculate() : handleButtonClick(symbol)
            }
          >
            {symbol}
          </button>
        ))}
      </div>

      <div className="flex justify-between w-64">
        <button
          onClick={handleBackspace}
          className="p-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 w-2/5"
        >
          DEL
        </button>
        <button
          onClick={handleClear}
          className="p-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 w-2/5"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default OnlineCalculator;
