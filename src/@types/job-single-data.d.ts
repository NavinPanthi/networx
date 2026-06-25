export interface JobSingleResponse {
  success: boolean;
  message: string;
  data: JobSingleData;
}

export interface JobSingleData {
  id: number;
  title: string;
  description: string;
  type: string;
  level: string;
  payment: string;
  listingDate: string;
  images: JobImage[];
  companyFullName: string;
}
