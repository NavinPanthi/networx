import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export type FilterDropDownType = {
  name: string;
  selectedFilterData: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterData?: any;
  className?: string;
};

export interface JobSearchInputType {
  selectedType: string[];
  selectedSkillLevel: string[];
  selectedPayment: string[];
  search: string | undefined;
  setSelectedType: Dispatch<SetStateAction<string[]>>;
  setSelectedSkillLevel: Dispatch<SetStateAction<string[]>>;
  setSelectedPayment: Dispatch<SetStateAction<string[]>>;
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  className: string;
  verified?: boolean | string;
  setVerified?: Dispatch<SetStateAction<boolean | undefined | string>>;
}
