import styles from "../styles/lowerSection.module.css"; // Import module CSS

export default function LowerSection() {
  return (
    <div className={styles.lowerSection}>
      <h2 className={styles.lowerTitle}>Get Started with Better</h2>
      <p className={styles.lowerText}>
        Experience seamless home financing with personalized solutions.
      </p>
      <button className={styles.lowerButton}>Start Now</button>
    </div>
  );
}
