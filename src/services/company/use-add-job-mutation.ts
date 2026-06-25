import { type Dispatch, type SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";
import type { ApiError } from "@/@types/apiError";

interface AddJobApiParams {
  data: FormData;
}

interface AddJobsMutationProps {
  reset: () => void;
  toggleDrawer?: () => void;
  setImage: Dispatch<SetStateAction<File[]>>;
}

const addJobApi = async ({ data }: AddJobApiParams) => {
  for (const [key, value] of data.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await http.post("/company/jobs", data);
  return response.data;
};

const useAddJobMutation = ({
  reset,
  toggleDrawer,
  setImage,
}: AddJobsMutationProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addJobApi,

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
      reset();
      setImage([]);

      if (toggleDrawer) toggleDrawer();
      toast.success(data?.message || "Job successfully added");
    },

    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useAddJobMutation;
