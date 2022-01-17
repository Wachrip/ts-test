import React from "react";

interface FilterSelect {
  onFilterSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterBy: React.FC<FilterSelect> = ({ onFilterSelectHandler }) => {
  return (
    <div>
      <div className="flex">
        <div className="mb-3 w-96">
          <label htmlFor="sort">Отфильтровать по компании: </label>
          <select
            name="sort"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onFilterSelectHandler(e)
            }
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="none">-------</option>
            <option value="Samsung">Samsung</option>
            <option value="LG">LG</option>
            <option value="Indesit">Indesit</option>
          </select>
        </div>
      </div>
    </div>
  );
};
