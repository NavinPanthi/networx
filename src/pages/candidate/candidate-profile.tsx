import EditProfileForm from "../../components/auth/edit-profile-form";
import Footer from "../../features/landing/footer";
import Navbar from "../../features/landing/navbar";

export interface IHandleEditProfile {
  fullName: string;
  phone?: string;
  address?: string;
}

const CandidateProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-around gap-6 px-4 py-12 lg:flex-row lg:gap-10 lg:px-28 lg:py-28">
        <div className="min-w-32">
          <p className="text-2xl font-bold">Your profile</p>
          <p className="text text-gray-700">Edit your profile</p>
        </div>
        <EditProfileForm />
      </div>
      <Footer />
    </>
  );
};

export default CandidateProfilePage;
