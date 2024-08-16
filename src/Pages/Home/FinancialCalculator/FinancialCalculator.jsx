import React, { useState } from "react";

const FinancialCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("");
  const [futureValue, setFutureValue] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundingsPerYear);

    if (!isNaN(P) && !isNaN(r) && !isNaN(t) && !isNaN(n)) {
      const A = P * Math.pow(1 + r / n, n * t);
      setFutureValue(A.toFixed(2));
    }
  };

  const calculateLoanPayment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(time) * 12;

    if (!isNaN(P) && !isNaN(r) && !isNaN(n)) {
      const M = (P * r) / (1 - Math.pow(1 + r, -n));
      setMonthlyPayment(M.toFixed(2));
    }
  };

  return (
    <div className="p-8 bg-gray-200 ">
      <div className="mx-[100px]">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Financial Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-black">Principal Amount</label>
          <input
            type="number"
            className="p-2 border rounded w-full bg-white text-black"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            className="p-2 border rounded w-full bg-white text-black"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">Time (in years)</label>
          <input
            type="number"
            className="p-2 border rounded w-full bg-white text-black"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">Compoundings Per Year</label>
          <input
            type="number"
            className="p-2 border rounded w-full bg-white text-black"
            value={compoundingsPerYear}
            onChange={(e) => setCompoundingsPerYear(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button
            onClick={calculateCompoundInterest}
            className="bg-green-500 text-white p-2 rounded mr-2"
          >
            Calculate Compound Interest
          </button>

          <button
            onClick={calculateLoanPayment}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Calculate Loan Payment
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">Future Value</label>
          <input
            type="text"
            className="p-2 border rounded w-full bg-white text-black"
            value={futureValue}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">Monthly Payment</label>
          <input
            type="text"
            className="p-2 border rounded w-full bg-white text-black"
            value={monthlyPayment}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialCalculator;
