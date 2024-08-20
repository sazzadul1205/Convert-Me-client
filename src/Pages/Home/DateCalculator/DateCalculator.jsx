import React, { useState } from "react";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysToAdd, setDaysToAdd] = useState("");
  const [calculatedDate, setCalculatedDate] = useState(null);
  const [dateDifference, setDateDifference] = useState(null);

  const calculateDateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start && end && !isNaN(start) && !isNaN(end)) {
      const difference = Math.abs(end - start);
      const days = difference / (1000 * 3600 * 24); // Convert milliseconds to days
      setDateDifference(days);
    } else {
      setDateDifference("Please enter valid dates.");
    }
  };

  const calculateNewDate = () => {
    const date = new Date(startDate);
    if (date && !isNaN(date) && !isNaN(parseInt(daysToAdd))) {
      date.setDate(date.getDate() + parseInt(daysToAdd));
      setCalculatedDate(date.toDateString());
    } else {
      setCalculatedDate("Please enter a valid date and number of days.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className="  flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Date Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Start Date:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              End Date (for difference calculation):
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <button
            onClick={calculateDateDifference}
            className="w-full p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Calculate Date Difference
          </button>

          {dateDifference !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Difference: {dateDifference} days
              </h2>
            </div>
          )}

          <div className="mt-8 mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Days to Add/Subtract:
            </label>
            <input
              type="number"
              value={daysToAdd}
              onChange={(e) => setDaysToAdd(e.target.value)}
              placeholder="Enter days to add or subtract"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <button
            onClick={calculateNewDate}
            className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Calculate New Date
          </button>

          {calculatedDate && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                New Date: {calculatedDate}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateCalculator;
