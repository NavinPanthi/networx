import About from "../../features/landing/about";
import Contact from "../../features/landing/contact";
import Footer from "../../features/landing/footer";
import JobHeroSection from "../../features/landing/hero-section";
import Navbar from "../../features/landing/navbar";

const Landing = () => {
  return (
    <div className="tracking-wider">
      <Navbar />
      <JobHeroSection />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
