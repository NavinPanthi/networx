import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import InternSearchInput from "../candidate/job-search-input";
import useGetUserJobsQuery from "../../services/user/use-get-user-jobs-query";
import JobShimmer from "../../components/explore/job-shimmer";
import JobCard from "../../components/explore/job-card";

const Explore = () => {
  const [searchParams] = useSearchParams({
    page: "1",
    size: "20",
  });

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search, setSearch] = useState<string | undefined>(initialSearch);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string[]>([]);
  const { data: jobsData, isPending } = useGetUserJobsQuery({
    selectedSkillLevel,
    selectedPayment,
    selectedType,
    search,
    searchParams,
  });

  if (isPending) {
    return <JobShimmer />;
  }

  return (
    <div className="relative gap-2 px-4 lg:px-28">
      <InternSearchInput
        className="sticky top-20 z-20 flex flex-col items-center justify-between gap-3 bg-shade-light py-2 text-sm md:flex-row md:gap-1 lg:py-6 xl:text-base"
        selectedType={selectedType}
        selectedSkillLevel={selectedSkillLevel}
        selectedPayment={selectedPayment}
        search={search}
        setSelectedType={setSelectedType}
        setSelectedSkillLevel={setSelectedSkillLevel}
        setSelectedPayment={setSelectedPayment}
        setSearch={setSearch}
      />

      <div className="z-10 grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobsData && jobsData.items.length > 0 ? (
          jobsData.items.map((job) => <JobCard job={job} />)
        ) : (
          <p className="col-span-full flex min-h-[50vh] items-center justify-center text-gray-500">
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Explore;
