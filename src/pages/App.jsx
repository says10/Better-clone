import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css"; // If you have global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
