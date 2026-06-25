import EditProfileForm from "../../components/auth/edit-profile-form";

const CompanyProfilePage = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-around gap-6 px-2 py-10 lg:flex-row lg:gap-10 lg:px-24 lg:py-20">
        <div className="min-w-32">
          <p className="text-2xl font-bold">Your profile</p>
          <p className="text text-gray-700">Edit your profile</p>
        </div>
        <EditProfileForm />
      </div>
    </>
  );
};

export default CompanyProfilePage;
