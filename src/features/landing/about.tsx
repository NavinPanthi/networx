import {
  ComputerCloudIcon,
  DocumentCodeIcon,
  Key01Icon,
} from "hugeicons-react";

// Main Component
function FeaturesSection() {
  return (
    <div className="flex flex-col items-center justify-around gap-10 px-4 py-28 sm:flex-row lg:px-28">
      {/* Application Submission Column */}
      <div className="flex flex-col items-center">
        <div className="mb-4 text-core-primary-light">
          <Key01Icon size="3em" />
        </div>
        <h3 className="mb-2 text-lg">Zero trust security</h3>
        <p className="max-w-48 text-center text-sm text-gray-600">
          Understand the "Never Trust, Always Verify" approach to securing
          networks, applications, and sensitive data.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-4 text-core-primary-light">
          <DocumentCodeIcon size="3em" />
        </div>
        <h3 className="mb-2 text-lg">APPLICATION SUBMISSION</h3>
        <p className="max-w-48 text-center text-sm text-gray-600">
          Submit your job applications securely and track your status in
          real-time.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-4 text-core-primary-light">
          <ComputerCloudIcon size="3em" />
        </div>
        <h3 className="mb-2 text-lg">FLEXIBLITY</h3>
        <p className="max-w-48 text-center text-sm text-gray-600">
          Choose from remote, on-site, or hybrid jobs to match your lifestyle
          and schedule.
        </p>
      </div>
    </div>
  );
}

export default FeaturesSection;
