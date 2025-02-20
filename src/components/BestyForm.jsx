import React, { useState } from "react";
import styles from "../styles/bestyform.module.css"; // Import the module CSS
import { Home, DollarSign, RefreshCcw } from "lucide-react"; // Import icons

const BetsyForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "buy", label: "Buying a home", icon: <Home size={24} /> },
    { id: "refinance", label: "Refinance my mortgage", icon: <RefreshCcw size={24} /> },
    { id: "cash", label: "Get cash from my home", icon: <DollarSign size={24} /> },
  ];

  return (
    <div className={styles.betsyContainer}>
      {/* Header */}
      <div className={styles.betsyHeader}>
        <div className={styles.betsyTitle}>Better Mortgage</div>
        <p className={styles.betsyContact}>Need help? Call (415) 523 8837</p>
      </div>

      {/* Profile Image */}
      <img src="/images/betsy.jpg" alt="Betsy" className={styles.betsyAvatar} />

      {/* Form Heading */}
      <h1 className={styles.betsyHeading}>Hi, I'm Betsy!</h1>
      <h2 className={styles.betsySubheading}>What can I help you with?</h2>

      {/* Options */}
      <div className={styles.betsyOptions}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${styles.betsyOptionBtn} ${selectedOption === option.id ? styles.betsyOptionSelected : ""}`}
            onClick={() => setSelectedOption(option.id)}
          >
            <span className="flex items-center space-x-3">
              {option.icon}
              <span>{option.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Continue Button */}
      {selectedOption && (
        <button className={styles.betsyContinueBtn} onClick={() => alert(`You selected: ${selectedOption}`)}>
          Continue
        </button>
      )}
    </div>
  );
};

export default BetsyForm;
