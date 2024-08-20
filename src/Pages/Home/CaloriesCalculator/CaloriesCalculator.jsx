import React, { useState } from "react";

const CaloriesCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let bmr;

    if (gender === "male") {
      bmr =
        88.36 +
        13.4 * parseFloat(weight) +
        4.8 * parseFloat(height) -
        5.7 * parseInt(age);
    } else {
      bmr =
        447.6 +
        9.2 * parseFloat(weight) +
        3.1 * parseFloat(height) -
        4.3 * parseInt(age);
    }

    let dailyCalories;

    switch (activityLevel) {
      case "sedentary":
        dailyCalories = bmr * 1.2;
        break;
      case "light":
        dailyCalories = bmr * 1.375;
        break;
      case "moderate":
        dailyCalories = bmr * 1.55;
        break;
      case "active":
        dailyCalories = bmr * 1.725;
        break;
      case "very active":
        dailyCalories = bmr * 1.9;
        break;
      default:
        dailyCalories = bmr * 1.2;
        break;
    }

    setCalories(dailyCalories.toFixed(2));
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <div className="flex justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Calories Calculator
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter your weight in kg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter your height in cm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Activity Level:</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
            >
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="light">
                Light (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderate">
                Moderate (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="active">
                Active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="very active">
                Very Active (very hard exercise, physical job, or training twice
                a day)
              </option>
            </select>
          </div>
          <button
            onClick={calculateCalories}
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Calculate
          </button>
          {calories && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-600">
                Your daily caloric needs: {calories} calories
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaloriesCalculator;
