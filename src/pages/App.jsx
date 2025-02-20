import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./index";
import About from "./about-us";
import MortgageCalculator from "./mortage-calculator";
import Start from "./start";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mortagecalculator" element ={<MortgageCalculator/>}/>
        <Route path="/start" element={<Start />}/>
      </Routes>
      <Footer />
    </Router>
  );
}
