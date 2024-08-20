import React, { useState } from "react";

const FractionCalculator = () => {
  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const num1 = parseInt(numerator1);
    const den1 = parseInt(denominator1);
    const num2 = parseInt(numerator2);
    const den2 = parseInt(denominator2);

    if (den1 === 0 || den2 === 0) {
      setResult("Denominator cannot be zero");
      return;
    }

    let resultNumerator;
    let resultDenominator;

    switch (operation) {
      case "+":
        resultNumerator = num1 * den2 + num2 * den1;
        resultDenominator = den1 * den2;
        break;
      case "-":
        resultNumerator = num1 * den2 - num2 * den1;
        resultDenominator = den1 * den2;
        break;
      case "*":
        resultNumerator = num1 * num2;
        resultDenominator = den1 * den2;
        break;
      case "/":
        resultNumerator = num1 * den2;
        resultDenominator = den1 * num2;
        if (resultDenominator === 0) {
          setResult("Division by zero");
          return;
        }
        break;
      default:
        return;
    }

    // Simplify the result
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(resultNumerator, resultDenominator);

    resultNumerator /= divisor;
    resultDenominator /= divisor;

    setResult(`${resultNumerator}/${resultDenominator}`);
  };

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className=" flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Fraction Calculator
          </h1>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Numerator 1:
              </label>
              <input
                type="number"
                value={numerator1}
                onChange={(e) => setNumerator1(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Denominator 1:
              </label>
              <input
                type="number"
                value={denominator1}
                onChange={(e) => setDenominator1(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Numerator 2:
              </label>
              <input
                type="number"
                value={numerator2}
                onChange={(e) => setNumerator2(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Denominator 2:
              </label>
              <input
                type="number"
                value={denominator2}
                onChange={(e) => setDenominator2(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Operation:
            </label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>

          <button
            onClick={calculateResult}
            className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
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

export default FractionCalculator;
