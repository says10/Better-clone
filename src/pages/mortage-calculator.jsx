import { useState } from "react";
import styles from "../styles/mortagecalculator.module.css"; // Import CSS module
import { FaHome, FaPercentage, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(370200);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = homePrice * (1 - downPayment / 100);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = (
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
  ).toFixed(2);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mortgage Calculator</h1>

      {/* Sliders */}
      <div>
        {/* Home Price */}
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <FaHome className={styles.icon} /> Home Price ($)
          </label>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="1000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.value}>${homePrice}</div>
        </div>

        {/* Down Payment */}
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <FaPercentage className={styles.icon} /> Down Payment (%)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.value}>{downPayment}%</div>
        </div>

        {/* Interest Rate */}
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <FaDollarSign className={styles.icon} /> Interest Rate (%)
          </label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.value}>{interestRate}%</div>
        </div>

        {/* Loan Term */}
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <FaCalendarAlt className={styles.icon} /> Loan Term (Years)
          </label>
          <input
            type="range"
            min="5"
            max="40"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className={styles.slider}
          />
          <div className={styles.value}>{loanTerm} years</div>
        </div>
      </div>

      {/* Monthly Payment Display */}
      <div className={styles.paymentBox}>
        <h2 className={styles.paymentHeading}>Estimated Monthly Payment</h2>
        <p className={styles.paymentAmount}>${monthlyPayment}/mo</p>
        <button className={styles.button}>Get Pre-Approved</button>
      </div>
    </div>
  );
}
