import { BarCode01Icon, type HugeiconsProps } from "hugeicons-react";

export interface INavigation {
  id: string;
  name: string;
  path: string;
  icon: React.FC<HugeiconsProps> | string;
}

export const companyLinks: INavigation[] = [
  {
    id: "Jobs",
    name: "Jobs",
    path: "/company/jobs",
    icon: BarCode01Icon,
  },
];
