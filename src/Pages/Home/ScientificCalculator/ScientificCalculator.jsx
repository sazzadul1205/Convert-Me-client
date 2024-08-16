import React, { useState } from "react";
import * as math from "mathjs";

function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [screenVal, setScreenVal] = useState("");
  const [customVariables, setCustomVariables] = useState({});
  const [mode, setMode] = useState("rad");

  function handleChange(e) {
    setExpression(e.target.value);
  }

  function handleClick(input) {
    setExpression((prevExpression) => prevExpression + input);
  }

  function calculate() {
    try {
      const allVariables = {
        ...customVariables,
        pi: Math.PI,
        e: Math.E,
        fact: math.factorial,
        sin: mode === "rad" ? Math.sin : math.sin,
        cos: mode === "rad" ? Math.cos : math.cos,
        tan: mode === "rad" ? Math.tan : math.tan,
        asin: mode === "rad" ? Math.asin : math.asin,
        acos: mode === "rad" ? Math.acos : math.acos,
        atan: mode === "rad" ? Math.atan : math.atan,
      };

      const result = math.evaluate(expression, allVariables);
      if (typeof result === "number" && !isNaN(result)) {
        setScreenVal(Number(result).toFixed(4));
      } else {
        setScreenVal("Error: Invalid expression");
      }
    } catch (error) {
      setScreenVal("Error: Invalid expression");
    }
  }

  function clearScreen() {
    setExpression("");
    setScreenVal("");
  }

  function backspace() {
    const newExpression = expression.slice(0, -1);
    setExpression(newExpression);
  }

  function toggleMode() {
    setMode(mode === "rad" ? "deg" : "rad");
  }

  return (
    <div className="flex justify-center items-center pt-12 bg-gray-200">
      <div className="  border-black rounded-lg   p-8 flex flex-col items-center">
        <h1 className="text-green-600 mb-8 text-2xl font-bold">
          Scientific Calculator
        </h1>
        <div className="w-full flex flex-col items-center">
          <input
            className="w-full p-2 text-lg border border-gray-400 bg-white rounded-md mb-4 text-black"
            type="text"
            value={screenVal || expression}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-row justify-between ">
          <div className="grid grid-cols-3 gap-2 mr-5">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((input) => (
              <button
                key={input}
                onClick={() => handleClick(input)}
                className="w-20 h-20 p-2 text-lg font-semibold bg-gray-300 text-black rounded-md hover:bg-green-200"
              >
                {input}
              </button>
            ))}
            <button
              onClick={() => handleClick(".")}
              className="w-20 h-20 p-2 text-lg font-semibold bg-gray-300 text-black rounded-md hover:bg-green-200"
            >
              .
            </button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[
              "+",
              "-",
              "*",
              "/",
              "^",
              "sqrt(",
              "sin(",
              "cos(",
              "tan(",
              "cbrt(",
              "asin(",
              "acos(",
              "atan(",
              "(",
              ")",
            ].map((input) => (
              <button
                key={input}
                onClick={() => handleClick(input)}
                className="w-20 h-20 p-2 text-lg font-semibold bg-gray-300 text-black rounded-md hover:bg-green-200"
              >
                {input}
              </button>
            ))}
            <button
              onClick={() => handleClick("pi")}
              className="w-20 h-20 p-2 text-lg font-semibold bg-gray-300 text-black rounded-md hover:bg-green-200"
            >
              Pi
            </button>
            <button
              onClick={() => handleClick("fact(")}
              className="w-20 h-20 p-2 text-lg font-semibold bg-gray-300 text-black rounded-md hover:bg-green-200"
            >
              Factorial
            </button>
          </div>
          <div className="flex flex-col items-center ml-3">
            <button
              className="w-20 h-20 p-2 text-lg font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 mb-2"
              onClick={clearScreen}
            >
              C
            </button>
            <button
              className="w-20 h-20 p-2 text-lg font-semibold bg-orange-600 text-white rounded-md hover:bg-orange-700 mb-2"
              onClick={calculate}
            >
              =
            </button>
            <button
              className="w-20 h-20 p-2 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={backspace}
            >
              del
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScientificCalculator;
