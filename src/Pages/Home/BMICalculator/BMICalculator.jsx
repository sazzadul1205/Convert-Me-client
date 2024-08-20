import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    } else {
      setMessage("Please enter valid height and weight.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className=" flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            BMI Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Height (in cm):
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in centimeters"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Weight (in kg):
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kilograms"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Your BMI: {bmi}
              </h2>
              <p className="text-xl font-semibold text-gray-600">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
