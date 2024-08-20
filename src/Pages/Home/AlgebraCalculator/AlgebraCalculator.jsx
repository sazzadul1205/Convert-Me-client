import React, { useState } from "react";

const AlgebraCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const solveEquation = () => {
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);

    if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
      setResult("Please enter valid numbers for a, b, and c.");
      return;
    }

    if (coefA === 0) {
      setResult("Coefficient a cannot be zero.");
      return;
    }

    const x = (coefC - coefB) / coefA;
    setResult(`The solution is x = ${x.toFixed(2)}`);
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <div className="flex  justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
            Algebra Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Coefficient A:
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Enter the value of a"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Coefficient B:
            </label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Enter the value of b"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Coefficient C:
            </label>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="Enter the value of c"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 bg-white"
            />
          </div>

          <button
            onClick={solveEquation}
            className="w-full p-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Solve Equation
          </button>

          {result && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">{result}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgebraCalculator;
