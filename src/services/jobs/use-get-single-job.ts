import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import type { JobSingleData } from "../../@types/job-single-data";
import http from "../../lib/http";
import type { ApiError } from "../../@types/apiError";

const getSingleJobApi = async (
  jobId: string | number,
): Promise<JobSingleData | undefined> => {
  try {
    const response = await http(`/jobs/${jobId}`);
    return response.data.data;
  } catch (error) {
    const e = error as ApiError;
    toast.error(e?.response?.data?.message || "Failed to fetch product");
  }
};

const useGetSingleJobQuery = (jobId: string | number) => {
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getSingleJobApi(jobId),
    enabled: !!jobId,
  });
};

export default useGetSingleJobQuery;
