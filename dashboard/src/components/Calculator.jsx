import React, { useState } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("Loan Amount");
  const [tenure, setTenure] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0.12); 
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [loanType, setLoanType] = useState("diminishing"); // 'diminishing' or 'addon'
  const [activeGraph, setActiveGraph] = useState(null); // null, 'graph1', 'graph2'


    // Diminishing Balance Method Formula
    const calculateDiminishingBalance = () => {
      const totalPayments = tenure * 12;
      const monthlyInterestRate = interestRate / 12;
  
      const payment =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  
      setMonthlyPayment(payment.toFixed(2));
    };

    // Add-On Rate Method Formula
  const calculateAddOnRate = () => {
    const totalInterest = loanAmount * interestRate * tenure * 1.35;
    const totalAmount = loanAmount + totalInterest;
    const payment = totalAmount / (tenure * 12);

    setMonthlyPayment(payment.toFixed(2));
  };

  const calculateMonthlyPayment = () => {
    if (loanType === 'diminishing') {
      calculateDiminishingBalance();
    } else if (loanType === 'addon') {
      calculateAddOnRate();
    }
  };



  const toggleOverlay = (graphType) => {
    setActiveGraph(graphType);
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setActiveGraph(null); // Reset the active graph when overlay is closed
  };

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-scroll pr-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="px-8 py-4 rounded-3xl bg-white border dark:bg-slate-800 drop-shadow-sm">
          <div>
            <button onClick={() => setLoanType("diminishing")} className={`px-3 py-1 text-sm font-semibold text-black rounded-full ${loanType === "diminishing" ? "bg-[#D3F26A]" : ""}`}>
              MSME Loan
            </button>
            <button onClick={() => setLoanType("addon")} className={`px-3 py-1 text-sm font-semibold text-black rounded-full ${loanType === "addon" ? "bg-[#D3F26A]" : ""}`}>
             Personal Loan
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex flex-col justify-between dark:text-white w-full">
              <div className="flex flex-col gap-8 items-end">
                <label className="py-2 font-medium">Loan Amount:</label>
                <label className="py-2 font-medium">Loan Tenure:</label>
                <label className="py-2 font-medium">Interest Rate:</label>
              </div>
              <span className="text-[#050517] text-base font-medium dark:text-white text-right">Monthly Payment:</span>
            </div>
            <div className="flex flex-col gap-8 justify-end w-4/5">
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                placeholder="Enter loan amount"
                className="p-2 rounded-lg dark:bg-slate-700 dark:text-white border"
              />

            <select
                name="tenure"
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="p-2 rounded-lg dark:bg-slate-700 dark:text-white border"
              >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
              <input
                type="number"
                step="0.01"
                value={interestRate * 100}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) / 100)}
                placeholder="Enter interest rate (%)"
                className="p-2 rounded-lg dark:bg-slate-700 dark:text-white border"
              />
              <div className="flex justify-end">
                <button onClick={calculateMonthlyPayment} className="font-medium bg-[#9F8CE8] rounded-lg text-white px-4 py-2">
                  Calculate
                </button>
                
              </div>
              <p className="text-blue-400 text-xl font-semibold">
                ₱{monthlyPayment}
              </p>
            </div>
          </div>
        </div>
        <div className=' bg-white rounded-3xl shadow-sm col-span-2'>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
        {/* BPI Personal Loan Card */}
        <div className='flex flex-col bg-white rounded-3xl border drop-shadow-sm p-6'>
          <div className="flex justify-between items-center mb-4">
            <span className="px-3 py-1 text-sm font-semibold text-white bg-[#BDB2E9] rounded-full">
              Individual
            </span>
            <button onClick={() => toggleOverlay('graph1')} className="px-3 py-1 text-sm font-semibold text-black bg-[#D3F26A] rounded-full">
              Check Graph
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">BPI Personal Loan</h2>
          <p className="text-gray-600 mt-3">
            Unlock additional funds with BPI Personal Loans, suitable for home improvement, education, business, travel, and other personal needs.
          </p>
          <h3 className="mt-5 font-semibold text-gray-800">Key Benefits</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>• Access a loan without collateral requirements.</li>
            <li>• Borrow from Php 20,000 up to Php 3,000,000.</li>
            <li>• Receive funds directly and securely in your BPI account.</li>
            <li>• Make monthly payments with ease via auto-debit.</li>
            <li>• Flexible repayment terms: choose between 1 to 5 years.</li>
          </ul>
          <div className="mt-6 flex justify-center h-full items-end">
            <button className="px-4 py-2 text-red-600 hover:underline">Learn more</button>
          </div>
        </div>

        {/* BPI SME Term Loan Card */}
        <div className='bg-white rounded-3xl border drop-shadow-sm p-6'>
          <div className="flex justify-between items-center mb-4">
            <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
              Business
            </span>
            <button onClick={() => toggleOverlay('graph2')} className="px-3 py-1 text-sm font-semibold text-black bg-[#D3F26A] rounded-full">
              Check Graph
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">BPI SME Term Loan</h2>
          <p className="text-gray-600 mt-3">
            Fuel your business growth with BPI SME Term Loan, offering customizable financing options to support expansion and operational needs.
          </p>
          <h3 className="mt-5 font-semibold text-gray-800">Key Features</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>• Minimum loan amount: Php 300,000.</li>
            <li>• Flexible repayment terms up to 5 years.</li>
            <li>• Optional collateral for added flexibility.</li>
          </ul>
          <h3 className="mt-5 font-semibold text-gray-800">Why Choose BPI SME Loan?</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>• <strong>Fast</strong>: Quick application approval process.</li>
            <li>• <strong>Convenient</strong>: Minimal documentation required.</li>
            <li>• <strong>Easy</strong>: Available with or without collateral.</li>
            <li>• <strong>Flexible</strong>: Pay in monthly installments over a longer term.</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 text-red-600 hover:underline">Learn more</button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOverlayVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">
              {activeGraph === 'graph1' ? 'Personal Loan' : 'Business Loan'}
            </h2>
            <p className="text-gray-600 mb-4">
              {activeGraph === 'graph1'
                ? 'Visual representation of the BPI Personal Loan repayment schedule and interest over time.'
                : 'Visual representation of the BPI SME Term Loan repayment schedule and interest over time.'}
            </p>
            {/* You can replace the text with your actual graph component or visualization */}
            <div className="mt-4">
              <div style={{ width: '100%', height: '300px', backgroundColor: '#f4f4f4' }}>
                {/* Placeholder for Graph */}
                {activeGraph === 'graph1' && 
                <div>Personal Loan Graph
                </div>}
                {activeGraph === 'graph2' && 
                <div>SME Graph
                </div>}
              </div>
            </div>
            <button onClick={closeOverlay} className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-full">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
