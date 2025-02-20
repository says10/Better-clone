import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>🏡 Better Clone</h1>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/start">Start</Link></li>
        <li><Link href="/mortage-calculator">Mortage Caculator</Link></li>
      </ul>
    </nav>
  );
}
