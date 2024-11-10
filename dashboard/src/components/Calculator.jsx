import React, { useState } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("Loan Amount"); 
  const [tenure, setTenure] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);


  const calculateMonthlyPayment = () => {
    const annualInterestRate = 0.12;
    const totalPayments = tenure * 12; 
    const monthlyInterestRate = annualInterestRate / 12;


    const payment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div>
      <h1 className="font-extrabold text-4xl">Loan Calculator</h1>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
          placeholder="Enter loan amount"
          className="border p-2"
        />
      </div>
      <div>
        <label>Loan Tenure (in years):</label>
        <select
          name="tenure"
          id="tenure"
          value={tenure}
          onChange={(e) => setTenure(parseInt(e.target.value))}
          className="border p-2"
        >
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
        </select>
      </div>
      <button onClick={calculateMonthlyPayment} className="mt-4 bg-blue-500 text-white px-4 py-2">
        Calculate Monthly Payment
      </button>
      <div>
        <p className="mt-4 text-red-500 text-xl">
          Monthly Payment: ₱{monthlyPayment}
        </p>
      </div>
    </div>
  );
};


export default Calculator;