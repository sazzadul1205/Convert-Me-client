import React, { useState } from "react";

const ConstructionCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [result, setResult] = useState("");

  const handleCalculateArea = () => {
    const area = parseFloat(length) * parseFloat(width);
    if (!isNaN(area)) {
      setResult(`Area: ${area.toFixed(2)} square units`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  const handleCalculateVolume = () => {
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    if (!isNaN(volume)) {
      setResult(`Volume: ${volume.toFixed(2)} cubic units`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  const handleCalculateCost = () => {
    const area = parseFloat(length) * parseFloat(width);
    const cost = area * parseFloat(costPerUnit);
    if (!isNaN(cost)) {
      setResult(`Cost: $${cost.toFixed(2)}`);
    } else {
      setResult("Please enter valid numbers.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Construction Calculator
          </h1>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Length:
            </label>
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter length"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Width:
            </label>
            <input
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter width"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Height:
            </label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter height (optional for area)"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Cost per Unit Area ($):
            </label>
            <input
              type="text"
              value={costPerUnit}
              onChange={(e) => setCostPerUnit(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter cost per unit area"
            />
          </div>

          <div className="flex justify-between mt-4 gap-2">
            <button
              onClick={handleCalculateArea}
              className="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 w-2/5"
            >
              Calculate Area
            </button>
            <button
              onClick={handleCalculateVolume}
              className="p-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 w-2/5"
            >
              Calculate Volume
            </button>
            <button
              onClick={handleCalculateCost}
              className="p-3 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 w-2/5"
            >
              Calculate Cost
            </button>
          </div>

          {result && (
            <div className="mt-6 text-xl font-bold text-center text-gray-800">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
