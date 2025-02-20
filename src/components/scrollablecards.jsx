import React from "react";
import styles from "../styles/scrollablecards.module.css";

export default function ScrollableCards() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.card}>
        <h3>Buying your first home with Better</h3>
        <button className={styles.arrowButton}>➜</button>
        <img src="/first-home.png" alt="House" />
      </div>

      <div className={styles.card}>
        <h3>One Day Mortgage<sup>1</sup></h3>
        <p>
          Kick your home loan into hyperdrive. Going from locked rate to
          Commitment Letter takes weeks for traditional lenders. We do it in a
          single day.
        </p>
        <button className={styles.arrowButton}>➜</button>
        <img src="/one-day-mortgage.png" alt="One Day Mortgage" />
      </div>

      <div className={styles.card}>
        <h3>Better HELOC</h3>
        <button className={styles.arrowButton}>➜</button>
        <img src="/better-heloc.png" alt="HELOC" />
      </div>

      <div className={styles.card}>
        <h3>Insurance</h3>
        <button className={styles.arrowButton}>➜</button>
        <img src="/insurance.png" alt="Insurance" />
      </div>
    </div>
  );
};
