import FeaturesSection from "../../features/landing/about";
import Footer from "../../features/landing/footer";
import Navbar from "../../features/landing/navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="mb-4 px-4 pt-12 text-3xl font-bold text-gray-800 md:text-4xl lg:px-28">
          About us
        </h2>
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
