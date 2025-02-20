import styles from "../styles/testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={styles.testimonialContainer}>
      {/* Left Side: Video & Quote */}
      <div className={styles.videoContainer}>
        <video className={styles.customerVideo} controls>
          <source src="/testimonial-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.quoteOverlay}>
          <p>
            “The reason why I decided to go with Better is because after I did
            my research with the other lenders, Better was the one that provided
            me with the lowest interest rate.”
          </p>
          <span>Arian — Better Mortgage customer</span>
        </div>
      </div>

      {/* Right Side: Heading & Trustpilot */}
      <div className={styles.textContainer}>
        <h2>Find out why we’re better.</h2>
        <button className={styles.storiesButton}>See all our stories</button>
        <div className={styles.trustpilot}>
          <span>⭐ Trustpilot</span>
          <span className={styles.rating}>Excellent</span>
          <span> 4.4 out of 5</span>
        </div>
      </div>
    </div>
  );
}
