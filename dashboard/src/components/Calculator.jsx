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
    <div className='flex flex-col gap-4 h-full '>
      <div className='flex gap-4'>
        <div className="gap-8 w-[480px] px-8 py-4 rounded-3xl bg-white border dark:bg-slate-800 drop-shadow-sm">
          <div className='flex h-full justify-center gap-4 '>
            <div className='flex flex-col justify-between dark:text-white w-full'>
              <div className='flex flex-col gap-8 items-end'>
                <label className='py-2 font-medium'>Loan Amount: </label>
                <label className='py-2 font-medium'>Loan Tenure:</label>
              </div>
              <span className='text-[#050517] text-base font-medium dark:text-white text-right'>Monthly Payment:</span>
            </div>
            <div className='flex flex-col gap-8 justify-end w-4/5'>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                placeholder="Enter loan amount"
                className="p-2 rounded-lg dark:bg-slate-700 dark:text-white"
              />

              <select
                name="tenure"
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="p-2 rounded-lg dark:bg-slate-700 dark:text-white"
              >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
              <div className="flex justify-end">
                <button onClick={calculateMonthlyPayment} className="font-medium bg-[#9F8CE8] rounded-lg text-white px-4 py-2">
                  Calculate
                </button>
              </div>

              <p className="text-white text-xl font-semibold">
                ₱{monthlyPayment}
              </p>
            </div>
          </div> 
        </div>
        <div className='w-full bg-white rounded-3xl shadow-sm '>
          
        </div> 
      </div>
      <div className='grid grid-cols-3 gap-4 h-full'>
        <div className='bg-white rounded-3xl border drop-shadow-sm p-4'>
          <p>cc radial</p>
        </div>
        <div className='bg-white rounded-3xl border drop-shadow-sm p-4'>
          <p>cc radial</p>
        </div>
        <div className='bg-white rounded-3xl border drop-shadow-sm p-4'>
          <p>cc radial</p>
        </div>

      </div>

    </div>
  );
};


export default Calculator;