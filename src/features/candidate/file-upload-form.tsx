import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { fileSchema } from "../../schemas";
import type { RootState } from "../../redux/store";
import Label from "../../components/ui/label";
import Button from "../../components/ui/button";

const schema = yup
  .object({
    file: fileSchema,
  })
  .required();

type UploadFileForm = yup.InferType<typeof schema>;

function UploadFileForm({
  className,
  company,
  status,
  title,
}: {
  className?: string;
  company: string;
  status: string;
  title: string;
}) {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<UploadFileForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  const file = watch("file")?.[0];
  const dispatch = useDispatch();
  const [isApplied, setApplied] = useState(false);

  const handleUpload: SubmitHandler<UploadFileForm> = (data) => {
    if (!loginStatus) {
      toast.error("Please log in to apply.");
      navigate("/log-in");
      return;
    }
    const { file } = data;
    const dateApplied = String(new Date().toLocaleDateString());
    const formData = new FormData();
    formData.append("document", file[0]);

    setApplied(true);
    toast.success("Job applied successfully.");
  };

  if (isApplied) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <form
      onSubmit={handleSubmit(handleUpload)}
      className={cn(className, "flex flex-1 flex-col justify-between")}
    >
      <fieldset className="mt-4">
        <Label required={false} helpText="Upload one PDF document.">
          Apply for the job
        </Label>

        <div className="mt-4 flex h-32 flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50">
          {file && !errors.file && file instanceof File ? (
            <div className="flex w-full items-center justify-between gap-2 px-8">
              <div>
                <p className="body-large-semibold text-neutral-800">
                  {file.name}
                </p>
                <p className="body-large mt-2 text-neutral-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              <TrashIcon
                onClick={() => resetField("file")}
                className="cursor-pointer text-red-500"
                height={24}
                width={24}
              />
            </div>
          ) : (
            <>
              <p className="body-large">Upload your document</p>

              <label className="mt-4">
                <div className="secondary-btn-md flex w-fit cursor-pointer items-center gap-2">
                  <ArrowUpTrayIcon height={24} width={24} />
                  <p>Upload File</p>
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  {...register("file")}
                />
              </label>
            </>
          )}

          {errors.file && (
            <p className="mt-2 text-sm text-red-500">{errors.file?.message}</p>
          )}
        </div>
        <div className="mt-6">
          <Button className="hover:bg-core-primary-dark bg-core-primary text-white">
            Apply Now
          </Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UploadFileForm;
