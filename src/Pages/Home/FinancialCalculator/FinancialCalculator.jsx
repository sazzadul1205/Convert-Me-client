import React, { useState } from "react";

const FinancialCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("");
  const [futureValue, setFutureValue] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (
      !principal ||
      !rate ||
      !time ||
      (!compoundingsPerYear && compoundingsPerYear !== "0")
    ) {
      setError("Please fill out all fields.");
      return false;
    }
    if (principal <= 0 || rate <= 0 || time <= 0 || compoundingsPerYear <= 0) {
      setError("Values must be positive numbers.");
      return false;
    }
    setError("");
    return true;
  };

  const calculateCompoundInterest = () => {
    if (!validateInputs()) return;

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundingsPerYear);

    const A = P * Math.pow(1 + r / n, n * t);
    setFutureValue(A.toFixed(2));
    setMonthlyPayment("");
  };

  const calculateLoanPayment = () => {
    if (!validateInputs()) return;

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(time) * 12;

    const M = (P * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(M.toFixed(2));
    setFutureValue("");
  };

  return (
    <div className=" h-screen bg-gray-200 pt-20">
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] ">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Financial Calculator
          </h1>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Principal Amount</label>
            <input
              type="number"
              className="p-2 border rounded w-full bg-gray-50"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter principal amount"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              className="p-2 border rounded w-full bg-gray-50"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter annual interest rate"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Time (in years)</label>
            <input
              type="number"
              className="p-2 border rounded w-full bg-gray-50"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter time period in years"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700">
              Compoundings Per Year
            </label>
            <input
              type="number"
              className="p-2 border rounded w-full bg-gray-50"
              value={compoundingsPerYear}
              onChange={(e) => setCompoundingsPerYear(e.target.value)}
              placeholder="Enter number of compoundings per year"
            />
          </div>

          <div className="flex justify-between mb-6">
            <button
              onClick={calculateCompoundInterest}
              className="bg-green-500 text-white p-2 rounded w-2/5 hover:bg-green-600"
            >
              Future Value
            </button>

            <button
              onClick={calculateLoanPayment}
              className="bg-blue-500 text-white p-2 rounded w-2/5 hover:bg-blue-600"
            >
              Loan Payment
            </button>
          </div>

          {futureValue && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Future Value</label>
              <input
                type="text"
                className="p-2 border rounded w-full bg-gray-50"
                value={futureValue}
                readOnly
              />
            </div>
          )}

          {monthlyPayment && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Monthly Payment
              </label>
              <input
                type="text"
                className="p-2 border rounded w-full bg-gray-50"
                value={monthlyPayment}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancialCalculator;
