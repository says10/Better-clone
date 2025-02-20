import { useEffect, useState, useRef } from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust this threshold for when it should fade out
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className={`${styles.heroContainer} ${isVisible ? styles.visible : styles.hidden}`}>
      <div>
        <h1 className={styles.heroText}>Mortgages made simple</h1>
        <button className={styles.heroButton}>Start my approval</button>
        <p className={styles.heroSubtext}>⏱ 3 min | No credit impact</p>

        {/* Google Reviews Section */}
        <div className={styles.heroReviews}>
          <div className={styles.reviewStars}>⭐⭐⭐⭐⭐</div>
          <p className={styles.reviewText}>4.6 Stars | 3177 Google reviews</p>
        </div>
      </div>

      {/* Placeholder for Mobile Image */}
      <img src="/hero_img.png" alt="Loan Approval" className={styles.heroImage} />
    </div>
  );
}
