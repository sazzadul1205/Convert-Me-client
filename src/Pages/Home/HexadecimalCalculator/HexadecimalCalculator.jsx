import React, { useState } from "react";

const HexadecimalCalculator = () => {
  const [firstHex, setFirstHex] = useState("");
  const [secondHex, setSecondHex] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const num1 = parseInt(firstHex, 16);
    const num2 = parseInt(secondHex, 16);
    let calculationResult;

    switch (operation) {
      case "+":
        calculationResult = num1 + num2;
        break;
      case "-":
        calculationResult = num1 - num2;
        break;
      case "*":
        calculationResult = num1 * num2;
        break;
      case "/":
        calculationResult = num1 / num2;
        break;
      default:
        calculationResult = 0;
    }

    setResult(calculationResult.toString(16).toUpperCase());
  };

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className=" flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Hexadecimal Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              First Hexadecimal Number:
            </label>
            <input
              type="text"
              value={firstHex}
              onChange={(e) => setFirstHex(e.target.value.toUpperCase())}
              placeholder="Enter first hex number"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Second Hexadecimal Number:
            </label>
            <input
              type="text"
              value={secondHex}
              onChange={(e) => setSecondHex(e.target.value.toUpperCase())}
              placeholder="Enter second hex number"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Operation:
            </label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>

          <button
            onClick={calculateResult}
            className="w-full p-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Result: {result}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HexadecimalCalculator;
