import React, { useState } from "react";
import * as math from "mathjs";

const PrintingCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [log, setLog] = useState([]);

  const handleCalculate = () => {
    try {
      const res = math.evaluate(expression);
      setResult(res);
      setLog((prevLog) => [...prevLog, `${expression} = ${res}`]);
      setExpression("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  return (
    <div className=" h-screen bg-gray-200 pt-20 text-black">
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] ">
          <h1 className="text-2xl font-bold mb-4 text-black text-center">
            Printing Calculator
          </h1>

          <div className="mb-4">
            <label className="block mb-2 text-black">Expression</label>
            <input
              type="text"
              className="p-2 border rounded w-full bg-white"
              value={expression}
              onChange={handleInputChange}
            />
          </div>

          <button
            onClick={handleCalculate}
            className="bg-green-500 text-white p-2 rounded px-5 hover:bg-green-400"
          >
            Calculate
          </button>

          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-black">Result</h2>
            <input
              type="text"
              className="p-2 border rounded w-full bg-white"
              value={result}
              readOnly
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2 text-black">Log</h2>
            <div className=" p-4 rounded h-64 overflow-y-auto bg-white">
              {log.length > 0 ? (
                log.map((entry, index) => <div key={index}>{entry}</div>)
              ) : (
                <p>No calculations yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingCalculator;
