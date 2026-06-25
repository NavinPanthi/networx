import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import type { ApiError } from "../../@types/apiError";
import http from "../../lib/http";

const EditProfileApi = async (data: FormData) => {
  const response = await http.patch(`/users`, data);
  return { ...response.data };
};

const useEditProfileMutation = () => {
  return useMutation({
    mutationFn: EditProfileApi,

    onSuccess: (data) => {
      toast.success(data?.message || "User edited.");
    },

    onError: (error) => {
      const e = error as ApiError;
      console.log(e);
      toast.error(
        e?.response?.data?.message || e?.message || "Something went wrong",
      );
    },
  });
};

export default useEditProfileMutation;
