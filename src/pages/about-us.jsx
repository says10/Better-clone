import Image from "next/image";
import styles from "../styles/aboutus.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>About Us</h1>
          <p>We are committed to making homeownership simple, fast, and transparent.</p>
        </section>

        {/* Our Story */}
        <section className={styles.section}>
          <h2>Our Story</h2>
          <p>
            Founded with a vision to revolutionize the homeownership experience, 
            we strive to provide seamless services in mortgage, real estate, 
            and insurance through cutting-edge technology.
          </p>
        </section>

        {/* Our Mission */}
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            To make buying and financing homes easier, more affordable, and more accessible 
            for everyone.
          </p>
        </section>

        {/* Our Values */}
        <section className={styles.section}>
          <h2>Our Values</h2>
          <ul>
            <li>🏡 Customer-Centric Approach</li>
            <li>🚀 Innovation & Simplicity</li>
            <li>💡 Transparency & Trust</li>
            <li>🌎 Social Responsibility</li>
          </ul>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h2>Meet Our Team</h2>
          <p>
            We are a passionate team of professionals dedicated to helping you navigate 
            your homeownership journey.
          </p>
        </section>

        {/* Video Section */}
        <section className={styles.videoSection}>
          <h2>Our Journey</h2>
          <p>Watch how we are transforming the future of homeownership.</p>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
              title="Our Story"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.contact}>
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          <button className={styles.contactButton}>Contact Us</button>
        </section>
      </div>

      {/* Backed By & Timeline Section */}
      <div className="bg-[#f9f8f6] text-center py-16 px-8">
        {/* Backed By Section */}
        <h2 className="text-2xl font-semibold mb-8">Backed by</h2>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-16">
          {["softbank", "ally", "citi", "pingan", "goldman", "kpcb", "amex"].map((logo) => (
            <Image
              key={logo}
              src={`/logos/${logo}.png`} // Replace with actual logo paths
              alt={logo}
              width={120}
              height={60}
            />
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Company Timeline</h2>

<div className={styles.timeline}>
  {timelineData.map((item, index) => (
    <div key={item.year} className={styles.timelineItem}>
      
      {/* Year Circle */}
      <div className={styles.timelineCircle}>{item.year}</div>

      {/* Timeline Content */}
      <div className={styles.timelineContent}>
        <h3 className="text-lg font-semibold">{item.year}</h3>
        <p className="text-gray-700">{item.text}</p>
      </div>
    </div>
  ))}
</div>



      </div>
      <Footer />
    </>
  );
}

// Timeline Data (kept below the component)
const timelineData = [
  { year: '2014', text: "Vishal Garg's first attempt to buy a home led to the founding of a tech-first mortgage company." },
  { year: '2015', text: 'Better Mortgage funds its first mortgage loan entirely online.' },
  { year: '2016', text: 'Becomes a Fannie Mae-approved seller and builds strong investor relationships.' }
];
