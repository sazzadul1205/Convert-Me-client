import React, { useState } from "react";

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    if (principal && interestRate && years) {
      const principalAmount = parseFloat(principal);
      const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
      const numberOfPayments = parseFloat(years) * 12;

      const payment =
        (principalAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      setMonthlyPayment(payment.toFixed(2));
    } else {
      setMonthlyPayment("Please enter valid numbers.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen pt-20">
      <div className=" flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Mortgage Calculator
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Principal Amount:
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter the loan amount"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Annual Interest Rate (%):
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter the interest rate"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Loan Term (Years):
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Enter the loan term in years"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 bg-white"
            />
          </div>

          <button
            onClick={calculateMortgage}
            className="w-full p-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Calculate Monthly Payment
          </button>

          {monthlyPayment !== null && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Monthly Payment: ${monthlyPayment}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
