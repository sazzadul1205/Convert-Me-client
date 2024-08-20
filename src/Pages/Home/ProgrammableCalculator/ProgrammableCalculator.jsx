import React, { useState } from "react";
import * as math from "mathjs";

const ProgrammableCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [functions, setFunctions] = useState({});
  const [functionName, setFunctionName] = useState("");

  const handleCalculate = () => {
    try {
      const res = math.evaluate(expression, functions);
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleSaveFunction = () => {
    if (functionName.trim()) {
      setFunctions({
        ...functions,
        [functionName]: math.parse(expression).compile(),
      });
      setFunctionName("");
      setExpression("");
      setResult("");
    }
  };

  const handleFunctionCall = (name) => {
    try {
      const fn = functions[name];
      if (fn) {
        const res = fn.evaluate();
        setResult(res);
      } else {
        setResult("Function not found");
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className=" h-screen bg-gray-200 pt-20 text-black">
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] ">
          <h1 className="text-2xl font-bold mb-4 text-black text-center">
            Programmable Calculator
          </h1>
          <div className="mb-4">
            <label className="block mb-2 text-black">Expression</label>
            <input
              type="text"
              className="p-2 border rounded w-full bg-white"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              onClick={handleCalculate}
              className="bg-green-500 text-white p-2 rounded mr-2"
            >
              Calculate
            </button>
            <button
              onClick={handleSaveFunction}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save as Function
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-black">Function Name</label>
            <input
              type="text"
              className="p-2 border rounded w-full bg-white"
              value={functionName}
              onChange={(e) => setFunctionName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-black">
              Stored Functions
            </h2>
            {Object.keys(functions).length > 0 ? (
              <ul>
                {Object.keys(functions).map((name) => (
                  <li key={name} className="mb-2">
                    <button
                      onClick={() => handleFunctionCall(name)}
                      className="bg-gray-500 text-white p-2 rounded"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No functions stored</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-black">Result</label>
            <input
              type="text"
              className="p-2 border rounded w-full bg-white"
              value={result}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammableCalculator;
