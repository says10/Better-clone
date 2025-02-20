import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Overview */}
        <div className={styles.column}>
          <h2 className={styles.brand}>Better</h2>
          <p className={styles.description}>
            Better is a family of companies serving all your homeownership needs.
          </p>
          <div className={styles.services}>
            <p><span>Better</span> Mortgage - Apply 100% online.</p>
            <p><span>Better</span> Real Estate - Save on real estate services.</p>
            <p><span>Better</span> Cover - Insurance coverage made easy.</p>
            <p><span>Better</span> Inspect - Free repair estimates.</p>
          </div>
        </div>

        {/* Resources */}
        <div className={styles.column}>
          <h3>Resources</h3>
          <ul>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
          </ul>
        </div>

        {/* Company */}
        <div className={styles.column}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning Center</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>hello@better.com</p>
          <p>415-523-8837</p>
          <ul>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>

          <h3>Legal</h3>
          <ul>
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
