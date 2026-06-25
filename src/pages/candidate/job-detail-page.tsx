import JobDetail from "../../components/explore/job-detail";
import Footer from "../../features/landing/footer";
import Navbar from "../../features/landing/navbar";

const JobDetailCandidatePage = () => {
  return (
    <>
      <Navbar />
      <JobDetail className="container mx-auto px-4 py-10" applySection={true} />
      <Footer />
    </>
  );
};

export default JobDetailCandidatePage;
