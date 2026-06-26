import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import http from "../../lib/http";
import { setLogin } from "../../redux/slices/user-slice";
import { checkAdmin } from "../../utils/check-admin";
import { checkCompany } from "../../utils/check-company";
import type { ApiError } from "../../@types/apiError";

interface ILoginProps {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

const LoginApi = async (data: ILoginProps) => {
  const response = await http.post(`/public/login`, data);
  console.log(response.data);
  return { ...response.data, isRememberMe: data.isRememberMe };
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: LoginApi,
    onSuccess: (data) => {
      dispatch(
        setLogin({
          token: data?.data.token,
          userData: data?.data,
          isRememberMe: data.isRememberMe,
        }),
      );

      toast.success(data?.message || "Login successful");
      navigate(
        checkAdmin(data?.data)
          ? "/admin/jobs"
          : checkCompany(data?.data)
            ? "/company/jobs"
            : "/",
        { replace: true },
      );
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

export default useLoginMutation;
