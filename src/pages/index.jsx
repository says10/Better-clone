import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import ScrollableCards from "../components/scrollablecards";
import Footer from "../components/footer";



export default function Home() {
  return (
    <div>
      
      <Hero />
      <Testimonial/>
      <ScrollableCards />
      
    </div>
    
  );
}
