import Explore from "../../features/landing/explore";
import Footer from "../../features/landing/footer";
import Navbar from "../../features/landing/navbar";

const ExplorePage = () => {
  return (
    <div>
      <Navbar />
      <h2 className="mb-4 px-4 pt-12 text-3xl font-bold text-gray-800 md:text-4xl lg:px-28">
        Explore jobs
      </h2>
      <Explore />
      <Footer />
    </div>
  );
};

export default ExplorePage;
