import { BarCode01Icon, type HugeiconsProps } from "hugeicons-react";

export interface INavigation {
  id: string;
  name: string;
  path: string;
icon: React.FC<HugeiconsProps> | string;
}

export const adminLinks: INavigation[] = [
  {
    id: "jobs",
    name: "Jobs",
    path: "/admin/jobs",
    icon: BarCode01Icon,
  },
];
