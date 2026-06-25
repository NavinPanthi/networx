import type { ChangeEvent } from "react";
import SearchInput from "../../components/ui/search-input";
import FilterDropDown from "../../components/explore/filter-dropdown";
import Button from "../../components/ui/button";
import { payment, skillLevels, type } from "../../utils/filter-data";
import cn from "../../lib/classnames";
import type { JobSearchInputType } from "../../@types/props-types";

const JobSearchInput = ({
  selectedType,
  selectedSkillLevel,
  selectedPayment,
  search,
  setSelectedType,
  setSelectedSkillLevel,
  setSelectedPayment,
  setSearch,
  className,
}: JobSearchInputType) => {
  const handleResetFiltersAndSearch = () => {
    setSelectedType([]);
    setSelectedSkillLevel([]);
    setSelectedPayment([]);
    setSearch("");
  };

  const hasDataInFilter =
    selectedSkillLevel.length > 0 ||
    selectedType.length > 0 ||
    selectedPayment.length > 0 ||
    search;

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedType((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((item) => item !== value),
    );
  };
  const handleSkillLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedSkillLevel((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((item) => item !== value),
    );
  };
  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedPayment((prevState) =>
      checked
        ? [...prevState, value]
        : prevState.filter((item) => item !== value),
    );
  };

  return (
    <div className={cn(className)}>
      <SearchInput
        placeholder="Search products"
        containerClassName=" xs:w-[10%] sm:w-[30%] xl:w-[40%] 2xl:w-[50%] semi-2xl:w-[60%] "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // className="min-w-72 lg:min-w-96"
      />

      <div className="flex gap-1 md:gap-2">
        <FilterDropDown
          selectedFilterData={selectedType}
          filterData={type}
          onChange={handleTypeChange}
          name="Type"
          className="!w-[150%]"
        />

        <FilterDropDown
          selectedFilterData={selectedSkillLevel}
          filterData={skillLevels}
          onChange={handleSkillLevelChange}
          name="Skill level"
          className="!w-[150%]"
        />

        <FilterDropDown
          selectedFilterData={selectedPayment}
          filterData={payment}
          onChange={handlePaymentChange}
          name="Payment"
          className="!w-[150%]"
        />

        <Button
          onClick={handleResetFiltersAndSearch}
          disabled={!hasDataInFilter}
          variant={hasDataInFilter ? "danger-outline" : "tertiary"}
          className="hidden border-neutral-500 sm:block"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default JobSearchInput;
