import { MAXIMUM_FILE_SIZE } from "@/constant";
import * as yup from "yup";

export const fileSchema = yup
  .mixed<FileList | string>()
  .test("file-exist", "Please select a file", (value) => {
    return !!value && (typeof value === "string" || value.length > 0);
  })
  .test("file-length", "Only 1 file is allowed", (value) => {
    return !(value instanceof FileList) || value.length === 1;
  })
  .test("file-size", "File size must be less than 5 MB", (value) => {
    return !(value instanceof FileList) || value[0]?.size <= MAXIMUM_FILE_SIZE;
  })
  .required("File is required");
