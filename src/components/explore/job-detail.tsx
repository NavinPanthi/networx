import { useParams } from "react-router-dom";

import {
  Calendar01Icon,
  Dollar01Icon,
  LaptopIcon,
  Layers01Icon,
} from "hugeicons-react";
import useGetSingleJobQuery from "../../services/jobs/use-get-single-job";
import cn from "../../lib/classnames";
import UploadFileForm from "../../features/candidate/file-upload-form";

const JobDetail = ({
  className,
  applySection = false,
  jobId,
}: {
  className?: string;
  applySection?: boolean;
  jobId?: string | number;
}) => {
  const { id } = useParams<{ id: string }>();

  const resolvedJobId = jobId || id;

  const { data: job, isPending } = useGetSingleJobQuery(resolvedJobId ?? "");

  if (isPending) return <div className="py-10 text-center">Loading...</div>;

  if (!job) return <div className="py-10 text-center">Job not found.</div>;

  const firstImage = job.images[0];

  return (
    <div className={cn(className, "mx-auto max-w-6xl px-4 py-10")}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Job Image */}
        <div className="flex items-center justify-center">
          <img
            src={`data:${firstImage.imageType};base64,${firstImage.imageData}`}
            alt={job.title}
            className="max-h-[80vh] w-full rounded-2xl object-cover shadow"
          />
        </div>

        {/* Job Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="flex items-center gap-2 text-2xl text-core-primary-mid-light">
              {job.companyFullName}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Calendar01Icon className="h-4 w-4 text-gray-500" />
            <span>Date posted: {job.listingDate}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <LaptopIcon className="h-4 w-4 text-gray-500" />
            <span>Type: {job.type}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Layers01Icon className="h-4 w-4 text-gray-500" />
            <span>Skill level: {job.level}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Dollar01Icon className="h-4 w-4 text-gray-500" />
            <span>Payment: {job.payment}</span>
          </div>

          <div className="mt-4 text-gray-600">
            <p>
              Gain hands-on experience in {job.title.toLowerCase()} with{" "}
              {job.companyFullName}. Work with professionals to enhance your
              cybersecurity skills and practical knowledge.
            </p>
          </div>

          {applySection && (
            <>
              <UploadFileForm
                company={job.companyFullName}
                status="Pending"
                title={job.title}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
