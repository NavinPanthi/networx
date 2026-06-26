import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetUserJobsQuery from "../../services/user/use-get-user-jobs-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import TextInput from "../../components/ui/text-input";
import JobCard from "../../components/explore/job-card";

type FormValues = {
  search: string;
};

const JobHeroSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({
    page: "1",
    size: "20",
  });

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search] = useState<string | undefined>(initialSearch);

  const { data: jobsData } = useGetUserJobsQuery({
    search,
    searchParams,
  });
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.search.trim()) {
      navigate(`/job?search=${encodeURIComponent(data.search.trim())}`);
      reset();
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-white px-4 py-12 text-center lg:mt-16 lg:px-28 lg:py-16 ">
      {/* Hero Title */}
      <div className="max-w-2xl sm:min-h-[400px] flex flex-col items-center justify-center">
        <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl">
          Find Job Opportunities
        </h2>
        <p className="mb-6 text-gray-600">
          Connecting talent with trusted cybersecurity careers.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-row gap-4">
            <TextInput
              placeholder="Search jobs..."
              {...register("search")}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-core-primary sm:w-80"
            />
            <button
              type="submit"
              className="hidden rounded-md bg-core-primary px-5 py-2 font-semibold text-white transition hover:bg-core-primary/90 md:block"
            >
              Search
            </button>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-md bg-core-primary px-6 py-2 font-semibold text-white transition hover:bg-core-primary/90"
          >
            Browse
          </button>
        </form>
      </div>

      <div className="mt-16 w-full max-w-6xl">
        <h3 className="mb-6 text-xl font-bold text-black">Featured Jobs</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobsData &&
            jobsData.items
              .slice(0, 5)
              .map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  );
};

export default JobHeroSection;
