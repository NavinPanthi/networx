import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";
import type { JobData } from "../../@types/jobs-list-response";
import type { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

const getJobsApi = async ({
  searchParams,
  selectedSkillLevel,
  selectedPayment,
  selectedType,
  debounceSearch,
}: {
  searchParams: URLSearchParams;
  debounceSearch?: string;
  selectedSkillLevel?: string[];
  selectedPayment?: string[];
  selectedType?: string[];
}): Promise<JobData | undefined> => {
  const searchQueryParams = new URLSearchParams(searchParams);
  if (debounceSearch) {
    searchQueryParams.set("search", debounceSearch);
  }

  if (selectedSkillLevel && selectedSkillLevel.length > 0) {
    selectedSkillLevel.forEach((element) => {
      searchQueryParams.append("levels", element);
    });
  }
  if (selectedType && selectedType.length > 0) {
    selectedType.forEach((element) => {
      searchQueryParams.append("types", element);
    });
  }
  if (selectedPayment && selectedPayment.length > 0) {
    selectedPayment.forEach((element) => {
      searchQueryParams.append("payments", element);
    });
  }
  ["page", "size"].forEach((param) => {
    const value = searchParams.get(param);
    if (value) searchQueryParams.set(param, value);
  });

  try {
    const response = await http(`/jobs`, {
      params: searchQueryParams,
    });
    return response.data.data;
  } catch (error) {
    const e = error as ApiError;
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

const useGetCompanyJobsQuery = ({
  searchParams,
  selectedSkillLevel,
  selectedPayment,
  selectedType,
  search,
}: {
  selectedSkillLevel?: string[];
  selectedPayment?: string[];
  selectedType?: string[];
  search?: string;
  searchParams: URLSearchParams;
}) => {
  const page = searchParams.get("page") || "1";
  const size = searchParams.get("size") || "20";
  const [debounceSearch] = useDebounce(search, 500);

  return useQuery({
    queryKey: [
      "company-jobs",
      size,
      page,
      selectedSkillLevel,
      selectedPayment,
      selectedType,
      debounceSearch,
      debounceSearch,
    ],
    queryFn: () =>
      getJobsApi({
        searchParams,
        selectedSkillLevel,
        selectedPayment,
        selectedType,
        debounceSearch,
      }),
  });
};

export default useGetCompanyJobsQuery;
