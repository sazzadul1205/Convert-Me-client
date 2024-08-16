import React, { useState } from "react";

const DesktopCalculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  const handleBackspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(display);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">
          Desktop Calculator
        </h1>

        <input
          type="text"
          value={display}
          readOnly
          className="w-full p-2 mb-4 text-right border border-gray-300 rounded"
        />

        <div className="grid grid-cols-4 gap-2">
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
              className="p-4 bg-gray-200 text-lg font-semibold rounded hover:bg-gray-300"
              onClick={() =>
                symbol === "=" ? handleCalculate() : handleButtonClick(symbol)
              }
            >
              {symbol}
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-4">
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

        {result && (
          <div className="mt-4 text-xl text-center">
            Result: <span className="font-bold">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopCalculator;
