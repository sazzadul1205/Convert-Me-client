import React, { useState } from "react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm) * 12;

    if (
      isNaN(principal) ||
      isNaN(calculatedInterest) ||
      isNaN(calculatedPayments)
    ) {
      return;
    }

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isNaN(monthly)) {
      return;
    }

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment((monthly * calculatedPayments).toFixed(2));
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <div className="flex justify-center  ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Loan Calculator
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Amount:</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter loan amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter interest rate"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Term (years):</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-white text-black"
              placeholder="Enter loan term in years"
            />
          </div>
          <button
            onClick={calculateLoan}
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Calculate
          </button>
          {monthlyPayment && totalPayment && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-blue-600">
                Monthly Payment: ${monthlyPayment}
              </h2>
              <h2 className="text-2xl font-semibold text-blue-600">
                Total Payment: ${totalPayment}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
