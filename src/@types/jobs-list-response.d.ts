export interface JobResponse {
  success: boolean;
  message: string;
  data: JobData;
}

export interface JobData {
  items: JobItem[];
  totalItems: number;
  totalPages: number;
  currPage: number;
  limit: number;
  hasNextPage: boolean;
}

export interface JobItem {
  id: number;
  title: string;
  description: string;
  type: string;
  level: string;
  payment: string;
  listingDate: string;
  images: JobImage[];
}

export interface JobImage {
  id: number;
  imageData: string;
  imageName: string;
  imageType: string;
}
