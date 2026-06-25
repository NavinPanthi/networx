import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ShimmerTable from "../../components/explore/job-table-shinmer";
import useGetCompanyJobsQuery from "../../services/company/use-get-company-jobs-query";
import Header from "../../components/header";
import JobSearchInput from "../../features/candidate/job-search-input";
import cn from "../../lib/classnames";
import RegisterJobDrawer from "../../features/company/jobs/register-job-modal";
import JobTable from "../../components/jobs/jobs-table";

const CompanyJobs = () => {
  const location = useLocation();
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
  const collapsed = useSelector(
    (state: RootState) => state.sidebar.isCollapsed,
  );
  const { data: jobsData, isPending } = useGetCompanyJobsQuery({
    selectedSkillLevel,
    selectedPayment,
    selectedType,
    search,
    searchParams,
  });

  if (isPending) {
    <ShimmerTable />;
  }
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] = useState(false);

  return (
    <>
      <Header
        title="Your Jobs"
        description="Manage your jobs"
        ActionComponent=<p>Add an job</p>
        actionCallback={() => {
          setIsRegisterDrawerOpen(true);
        }}
      />
      <div className="relative gap-2 md:px-4">
        <h2 className="mb-4 text-nowrap text-3xl font-bold text-gray-800 md:pt-12 md:text-4xl">
          Posted Jobs
        </h2>
        <JobSearchInput
          className="flex flex-col items-center justify-between gap-3 rounded-xl bg-shade-light p-3 text-sm md:flex-row md:gap-1 md:p-6 xl:text-base"
          selectedType={selectedType}
          selectedSkillLevel={selectedSkillLevel}
          selectedPayment={selectedPayment}
          search={search}
          setSelectedType={setSelectedType}
          setSelectedSkillLevel={setSelectedSkillLevel}
          setSelectedPayment={setSelectedPayment}
          setSearch={setSearch}
        />

        <div
          className={cn("py-6 md:py-12", {
            "h-[calc(100vh-210px)]": collapsed,
          })}
        >
          {internsData && <JobTable jobs={jobsData.items} />}
        </div>
      </div>
      <RegisterJobDrawer
        isOpen={isRegisterDrawerOpen}
        toggleDrawer={() => setIsRegisterDrawerOpen(!isRegisterDrawerOpen)}
      />
    </>
  );
};

export default CompanyJobs;
